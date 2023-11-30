import './components/tb-chat'

import TextBuddy from 'textbuddy'

const template = document.createElement('template')
template.innerHTML = `
  <style>

    #app {
      height: 100%;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }

    tb-chat {
      box-sizing: border-box;
      display: flex;
      height: 100%;
    }

    #text {
      border-radius: 5px;
      font-size: 1.2rem;
      border: none;
      resize: none;
      outline: none;
      padding: 20px;
      margin: 20px;
      box-sizing: border-box;
      height: 100%;
    }

    #content {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
    }

    main {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      flex: 1;
    }

    aside {
      height: 100%;
      max-width: 50%;
      box-sizing: border-box;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    
    h1 {
      box-sizing: border-box;

      height: 40px;
      text-align: center;
      color: black;
      text-shadow: white 2px 2px;
      margin-top: 50px;
    }

    #data-display p {
      margin: 0px;
      padding: 0px;
      line-height: 20px;
    }
    #data-display  {
      display: flex;
      box-sizing: border-box;
      padding: 20px;
      margin: 20px;
      background-color: lightpink;
      color: black;
      border-radius: 5px;
    }
  </style>
  <div id=app>
    <div id="content">
      <main>
        <header>
          <h1>TextBuddy</h1>
        </header>
        <textarea id="text"></textarea>
      </main>
      <aside>
        <div id="data-display"><div></div></div>
        <tb-chat></tb-chat>
      <aside>
  </main>
  </div>
`

customElements.define('tb-application',
  /**
   * TextBuddy application.
   */
  class extends HTMLElement {
    #textArea
    #dataContainer
    #aside
    #apiKey
    #textBuddy
    #tbchat

    /**
     * Create an instance of TextBuddy application.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#textArea = this.shadowRoot.querySelector('textarea')
      this.#dataContainer = this.shadowRoot.querySelector('#data-display')
      this.#tbchat = this.shadowRoot.querySelector('tb-chat')
      this.#aside = this.shadowRoot.querySelector('aside')

      this.#textArea.addEventListener('keydown', (event) => this.#analyse(event))
      this.#textArea.addEventListener('keyup', (event) => this.#analyse(event))

      this.#aside.addEventListener('apiKey', (event) => {
        this.#apiKey = event.detail
        this.#textBuddy.setOpenAiApiKey(event.detail)
      })

      this.#aside.addEventListener('question', async (event) => {
        try {
          const answer = await this.#textBuddy.aiAnswerQuestion(event.detail)
          this.#tbchat.setAttribute('answer', answer)
        } catch (error) {
          this.#tbchat.setAttribute('error', error.message)
        }
      })

      this.#analyse()
    }

    /**
     * Focus on the text area on load.
     */
    connectedCallback () {
      this.#textArea.focus()
    }

    /**
     * Run fullAnalyzis on the text and display the result.
     *
     * @param {Event} event - the event that triggered the analyzis
     */
    #analyse (event) {
      this.#textBuddy = new TextBuddy(this.#textArea.value)
      if (this.#apiKey !== null) {
        this.#textBuddy.setOpenAiApiKey(this.#apiKey)
      }
      const fullAnalyzisResult = this.#textBuddy.fullAnalyzis()

      const dataViewToBeReplacted = this.#dataContainer.querySelector('div')
      const dataView = document.createElement('div')

      for (const [key, value] of Object.entries(fullAnalyzisResult)) {
        if (key === 'Word frequency') {
          const dataRow = document.createElement('p')
          dataRow.textContent = key + ' top #3: '
          dataView.appendChild(dataRow)

          let i = 0

          for (const [word, frequency] of Object.entries(fullAnalyzisResult[key])) {
            i++
            const dataRow = document.createElement('p')
            dataRow.textContent = `- ${word}: ${frequency}`
            dataView.appendChild(dataRow)
            if (i === 3) { break }
          }
        } else {
          const dataRow = document.createElement('p')
          if (key === 'Average word length') {
            dataRow.textContent = key + ': ' + value.toFixed(1) + ' characters'
          } else {
            dataRow.textContent = key + ': ' + value
          }

          dataView.appendChild(dataRow)
        }
      }
      this.#dataContainer.replaceChild(dataView, dataViewToBeReplacted)
    }
  }
)
