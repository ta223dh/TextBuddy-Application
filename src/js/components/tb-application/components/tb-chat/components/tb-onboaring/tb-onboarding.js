const template = document.createElement('template')
template.innerHTML = `
  <style>
   
  </style>
  <div id="container">
    HELLO
  </div>
`

customElements.define('tb-onboarding',
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
    }
  }
)
