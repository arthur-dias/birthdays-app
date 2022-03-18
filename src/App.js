import { useState } from 'react'

// Data
import data from './data'

// Components
import List from './List'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  )
}

export default App
