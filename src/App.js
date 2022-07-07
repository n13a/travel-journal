import React from 'react'
import Header from './components/Header'
import Travel from './components/Travel'
import data from "./data"

const App = () => {
  const travels = data.map((item, index) => {
    return <Travel
      key={index}
      item={item}
    />
  })
  return (
    <div>
      <Header />
      {travels}
    </div>
  )
}

export default App