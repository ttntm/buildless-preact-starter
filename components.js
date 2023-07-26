import { h } from 'https://esm.sh/preact@10.4.7'
import { useReducer } from 'https://esm.sh/preact@10.4.7/hooks'
import htm from 'https://esm.sh/htm@3.0.4'

const html = htm.bind(h)

export default function() {
  return {
    Counter: (props) => {
      const heading = props.heading || 'A simple counter component'
      const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
          case 'increment': return state + 1
          case 'decrement': return state - 1
          case 'reset': return 0
        }
      }, 0)

      return html`<div>
        <h2>${heading}</h2>
        <p>Current value: ${count}</p>
        <div class="flex form-group">
          <button class="btn btn-primary" onClick="${() => dispatch('increment')}" dangerouslySetInnerHTML=${{ __html: '&plus;' }} />
          <button class="btn btn-primary" onClick="${() => dispatch('decrement')}" dangerouslySetInnerHTML=${{ __html: '&minus;' }} />
          <button class="btn btn" onClick="${() => dispatch('reset')}">Reset</button>
        </div>
      </div>`
    }
  }
}
