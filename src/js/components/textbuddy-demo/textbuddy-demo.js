import TextBuddy from 'textbuddy'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    #container {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }
    textarea {
      box-shadow: inset 0px 2px 1px 0px lightgray;
      font-size: 1.2rem;
      border: none;
      resize: none;
      outline: none;
      vertical-align:top;
      flex-grow: 2;
      padding: 20px;
    }
    #container.div, textarea, h1 {
      width: 100%;
      box-sizing: border-box;
    }
    #container div {
      padding: 20px;
      margin: 20px;
      border: 2px solid white;
      box-shadow: 0px 2px 1px 0px black;

    }
    h1 {
      text-align: center;
      color: black;
      text-shadow: white 2px 2px;
      margin-top: 40px;
    }
  </style>
  <div id="container">
    <h1>TextBuddy - Demo</h1>
    <div></div>
    <textarea></textarea>
  </div>
`

customElements.define('textbuddy-demo',
  /**
   * Textbuddy-demo.
   */
  class extends HTMLElement {
    #textArea
    #container

    /**
     * Create an instance of Textbuddy-demo.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#textArea = this.shadowRoot.querySelector('textarea')
      this.#container = this.shadowRoot.querySelector('#container')

      this.#textArea.addEventListener('keydown', (event) => this.#analyse(event))
      this.#textArea.addEventListener('keyup', (event) => this.#analyse(event))

      this.#analyse()
    }

    connectedCallback () {
      this.#textArea.focus()
    }

    #analyse (event) {
      const text = new TextBuddy(this.#textArea.value)
      const result = text.getFullAnalyzis()

      let displayArea = this.shadowRoot.querySelector('#container div')
      let div = document.createElement('div')

      for (const [key, value] of Object.entries(result)) {
        let p = document.createElement('p')
        p.textContent = key + ': ' + value
        div.appendChild(p)
      }
      this.#container.replaceChild(div, displayArea)
    }
  }
)
