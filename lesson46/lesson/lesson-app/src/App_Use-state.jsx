import { useState } from "react";

export function Hero() {
  return (
    <div>
      <h1>Hero</h1>
    </div>
  )
}

export function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export function Test1() {
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

function App() {

  // let [результат, функция меняющая результат] = useState(дефолтное занчение)
  let [out, setOut] = useState(0)
  let [section, setSection] = useState(Hero)
  let [tabContent, setTabContent] = useState(Test1)

  function renderItem() {
    setOut(++out)
  }

  return (
    <>
      <h1>Test</h1>
      <button onClick={renderItem}>+</button>
      <h3>{out}</h3>
      <nav>
        <ol>
          <li onClick={() => { setSection(Hero) }}>Home</li>
          <li onClick={() => { setSection(About) }}>About</li>
        </ol>
      </nav>

      <button onClick={() => { setTabContent(Test1) }}>1</button>

      {section}

      {tabContent}
    </>
  )
}

export default App;
