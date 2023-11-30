import './components/tb-chat'
import './components/tb-dataview'

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

    #dataContainer  {
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
        <div id="dataContainer"><tb-dataview></tb-dataview></div>
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
    #aside
    #apiKey
    #textBuddy
    #tbchat
    #dataView

    /**
     * Create an instance of TextBuddy application.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#textArea = this.shadowRoot.querySelector('textarea')
      this.#dataView = this.shadowRoot.querySelector('tb-dataview')
      this.#tbchat = this.shadowRoot.querySelector('tb-chat')
      this.#aside = this.shadowRoot.querySelector('aside')

      this.#textArea.addEventListener('keydown', (Event) => this.#analyse(Event))
      this.#textArea.addEventListener('keyup', (Event) => this.#analyse(Event))
      this.#aside.addEventListener('apiKey', (Event) => this.#addApiKey(Event))
      this.#aside.addEventListener('question', (Event) => this.#submitQuestion(Event))

      this.#analyse()
    }

    /**
     * Submit Ai question.
     *
     * @param {Event} Event - the event that triggered the method call
     */
    async #submitQuestion (Event) {
      try {
        const answer = await this.#textBuddy.aiAnswerQuestion(Event.detail)
        this.#tbchat.setAttribute('answer', answer)
      } catch (error) {
        this.#tbchat.setAttribute('error', error.message)
      }
    }

    /**
     * Add Api Key.
     *
     * @param {Event} Event - the event that triggered the method call
     */
    #addApiKey (Event) {
      this.#apiKey = Event.detail
      this.#textBuddy.setOpenAiApiKey(Event.detail)
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
     * @param {Event} Event - the event that triggered the analyzis
     */
    #analyse (Event) {
      this.#textBuddy = new TextBuddy(this.#textArea.value)

      if (this.#apiKey !== null) {
        this.#textBuddy.setOpenAiApiKey(this.#apiKey)
      }
      const fullAnalyzisResult = this.#textBuddy.fullAnalyzis()

      this.#updateDataView(fullAnalyzisResult)
    }

    /**
     * Display the data.
     *
     * @param {Object} data - The data object.
     */
    #updateDataView (data) {
      this.#dataView.display(data)
    }
  }
)
