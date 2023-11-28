
const template = document.createElement('template')
template.innerHTML = `
  <style>
    #container {
      background-color: blue;
      width: 100px;
      height: 100px;
      box-sizing: border-box;
      overflow: hidden;
    }
  </style>
  <div id="container">
  </div>
`

customElements.define('tb-chat',
  /**
   * tb-chat.
   */
  class extends HTMLElement {

    /**
     * Create an instance of tb-chat.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

    }
  }
)
