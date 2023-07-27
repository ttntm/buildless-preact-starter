import { h, render } from 'https://esm.sh/preact@10.4.7'
import { useEffect, useState } from 'https://esm.sh/preact@10.4.7/hooks'
import htm from 'https://esm.sh/htm@3.0.4'
import Components from './components.js'
import { App_Static } from './config.js'

const html = htm.bind(h)

// Initialization call for components defined in `components.js`
const {
  Counter
} = Components()

// A local functional component definition
const Heading = ({ textContent }) => {
  return html`<h1>${textContent}</h1>`
}

export default function App(config) {
  // Config passed from `index.html`
  const { context } = config

  const Main = () => {
    const [firstTimeRender, setFirstTimeRender] = useState(true)
    
    useEffect(() => {
      if (firstTimeRender) {
        // Code that should only run on the first render of this component

        console.info('Marker: first time render', context)

        setFirstTimeRender(false)
      }
    }, [])

    return html`
      <img class="block mx-auto my-1" src="${App_Static.image}" width="350" />
      <${Heading} textContent="${App_Static.heading}" />
      <p>${App_Static.intro}</p>
      <${Counter} heading="Counter Component" />
    `
  }

  render(html`<${Main} />`, document.querySelector('#app-container'))
}
