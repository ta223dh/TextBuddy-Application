const template = document.createElement('template')
template.innerHTML = `
  <style>
  p {
      margin: 0px;
      padding: 0px;
      line-height: 20px;
    }
  </style>

  <div></div>
`

customElements.define('tb-dataview',
  /**
   * tb-dataview.
   */
  class extends HTMLElement {
    /**
     * Create an instance of tb-dataview.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }

    /**
     * Display the data.
     *
     * @param {Object} data - The object with data to display.
     */
    display (data) {
      const container = this.shadowRoot.querySelector('div')
      const dataView = document.createElement('div')

      for (const [key, value] of Object.entries(data)) {
        const dataRow = document.createElement('p')

        if (key === 'Word frequency') {
          dataRow.textContent = key + ' top #3: '
          dataView.appendChild(dataRow)

          let i = 0
          for (const [word, frequency] of Object.entries(data[key])) {
            if (i === 3) {
              break
            }

            const indentedDataRow = document.createElement('p')
            indentedDataRow.textContent = `- ${word}: ${frequency}`
            dataView.appendChild(indentedDataRow)

            i++
          }
        } else if (key === 'Average word length') {
          dataRow.textContent = key + ': ' + value.toFixed(1) + ' characters'
          dataView.appendChild(dataRow)
        } else {
          dataRow.textContent = key + ': ' + value
          dataView.appendChild(dataRow)
        }
      }
      container.replaceChildren(dataView)
    }
  }
)
