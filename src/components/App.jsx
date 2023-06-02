import '../App.css'
import Card from './Card'
import { emojis } from '../imojis'

const App = () => {
  return (
    <article>
      <h1 className="header">WikiMoji</h1>
      <div className="cards">
        {emojis.map((card) => {
          const { name, emoji, meaning } = card
          return <Card name={name} imoji={emoji} description={meaning} />
        })}
      </div>
    </article>
  )
}

export default App
