import React from "react";

function App() {
  let out = React.createRef()
  let input = React.createRef()
  let check = React.createRef()

  let out2 = React.createRef()
  let count = 0


  let num = 2

  let arr = []

  function testClick() {
    console.log(check.current.checked) // Проверка checkbox
    console.log(input)
    out.current.innerHTML = input.current.value

    arr.push(input.current.value)
    console.log(arr)
  }

  function checkInp() {
    out.current.innerHTML = input.current.value
  }

  function plus() {
    console.log(out2)
    out2.current.innerHTML = ++count
  }

  function minus() {
    console.log(out2)
    out2.current.innerHTML = --count
  }

  return (
    <>
      <h1>Test</h1>
      <button onClick={testClick}>Start</button>

      <div ref={out}></div>
      {/* ref = querySelector */}

      <input type="checkbox" ref={check}></input>
      <input type="text" onInput={checkInp} ref={input}></input>

      {/* Сделать счетчик */}
      <div>
        <button onClick={plus}>+</button>
        <div ref={out2}>0</div>
        <button onClick={minus}>-</button>
      </div>
    </>
  )
}

export default App;
