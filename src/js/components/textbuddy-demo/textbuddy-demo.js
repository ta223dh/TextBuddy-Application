import TextBuddy from 'textbuddy'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    #app {
      background-color: pink;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
    }
    #container {
      width: 100%;
      height: calc(100% - 115px);
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
    }
    textarea {
      border-radius: 5px;
      font-size: 1.2rem;
      border: none;
      resize: none;
      outline: none;
      padding: 20px;
      margin: 20px;
      box-sizing: border-box;

    }
    #container.div, textarea, h1 {
      width: 100%;
      box-sizing: border-box;
    }
    #container div {
      margin: 0px 20px;
      box-sizing: border-box;
      overflow: hidden;
      width: 500px;

    }
    h1 {
      height: 40px;
      text-align: center;
      color: black;
      text-shadow: white 2px 2px;
      margin-top: 50px;
    }
  </style>
  <div id=app>
      <h1>TextBuddy - Live Demo</h1>
  <div id="container">
    <textarea></textarea>
    <div></div>

  </div>
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
      const result = text.fullAnalyzis()

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
