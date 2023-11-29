const template = document.createElement('template')
template.innerHTML = `
  <style>
    #container {
      background-color: lightpink;
      box-sizing: border-box;
      overflow: hidden;
      color: black;
      text-align: center;
      border-radius: 5px;
      margin: 20px;
    }

    #container {
      box-sizing: border-box;
      width: 100%;
      display: flex;
  flex-direction: column;

    }
  
    h1 {
      font-size: 20px;
    }

    #messages {
      overflow-y: auto; 
      padding: 20px;

  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;


    }

    #question, #answer {
      padding-bottom: 20px;

    }

    textarea {
      border-radius: 5px;
      font-size: 1 rem;
      border: none;
      resize: none;
      outline: none;
      padding: 10px;
      margin: 10px;
      box-sizing: border-box;
      height: 50px;
      flex: 1;

    }

  #input {
  display: flex;
  align-items: center;
  padding: 10px;
}

    button {
      border-radius: 5px;

      padding: 10px;
      margin: 10px;

      box-sizing: border-box;
      height: 50px;
    }

    button:hover {
      cursor: pointer;
    }


  </style>

  <div id="container">
  <div id="messages">
  <div id="question">Question:</div>
  <div id="answer">Answer:</div>
  </div>
  <div id="input">
  <textarea placeholder="Enter OpenAi API key..."></textarea><button>Send</button>
  </div>
  </div>
`

customElements.define('tb-chat',
  /**
   * tb-chat.
   */
  class extends HTMLElement {
    #textarea
    #button
    #ApiKey
    #question
    #answer

    /**
     * Create an instance of tb-chat.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        this.#textarea = this.shadowRoot.querySelector('textarea')
        this.#button = this.shadowRoot.querySelector('button')
        this.#question = this.shadowRoot.querySelector('#question')
        this.#answer = this.shadowRoot.querySelector('#answer')

        this.#button.addEventListener('click', (event) => this.startAiChat(event))  
        this.#textarea.addEventListener('keydown', (event) => this.textAreaKeyPress(event))  
    }

    static get observedAttributes() {
      return ['answer', 'error'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'answer' && newValue !== oldValue) {
        this.#answer.textContent = 'Answer: ' + newValue;
      }
      else if (name === 'error') {
        this.#answer.textContent = 'Answer: ' + newValue;
      }
    }

    textAreaKeyPress (event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault()
        this.startAiChat()
      }
    }


    startAiChat (event) {
      if (this.#ApiKey == null) {
        this.#ApiKey = this.#textarea.value
        const customEvent = new CustomEvent('apiKey', {
          detail: this.#ApiKey,
          bubbles: true,
        });
        this.dispatchEvent(customEvent);
        this.#textarea.placeholder = 'Enter a question...'
        this.#textarea.value = '';
      } else {
        const customEvent = new CustomEvent('question', {
          detail: this.#textarea.value,
          bubbles: true,
        });
        this.#question.textContent = 'Question: ' + this.#textarea.value
        this.dispatchEvent(customEvent);
        this.#textarea.value = '';
        this.#answer.textContent = 'Answer: '
      }
    }
  }
)
