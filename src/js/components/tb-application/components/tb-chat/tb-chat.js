import './components/tb-onboaring'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    #container {
      background-color: gray;
      width: 300px;
      height: 50px;
      box-sizing: border-box;
      overflow: hidden;
      color: white;
      text-align: center;
      border-radius: 5px;
      position:fixed;
      bottom: 20px;
      right: 20px;
      border: 1px solid gray;
    }
    #container:hover {
      cursor: pointer;
      border: 1px solid lightgray;
    }
    #container:active {
      cursor: pointer;
      border: 1px solid black;
    }
    h1 {
      font-size: 20px;
    }

    tb-onboarding {
      display: none;
    }
  </style>
  <div id="container">
  <tb-onboarding>
  </tb-onboarding>

    <h1 id="button">
      Start Ai-Chat
    </h1>
  </div>
`

customElements.define('tb-chat',
  /**
   * tb-chat.
   */
  class extends HTMLElement {
    #container
    #startAiChat
    #ApiKey

    /**
     * Create an instance of tb-chat.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        this.#container = this.shadowRoot.querySelector('#container')
        this.#startAiChat = this.shadowRoot.querySelector('#button')

        this.#startAiChat.addEventListener('click', (event) => this.startAiChat(event))  
    }

    startAiChat (event) {
      if (this.#ApiKey == null) {
        this.shadowRoot.querySelector('tb-onboarding').style.display = 'block';
        this.shadowRoot.querySelector('#button').style.display = 'none';

      }
    }
  }
)
