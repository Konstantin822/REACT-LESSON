import React, { useState } from "react";

const users = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 22 },
];

function App() {

  let [out, setOut] = useState(users)
  let [count, setCount] = useState(users.length)

  let inp1 = React.createRef()
  let inp2 = React.createRef()

  function plus() {
    let name = inp1.current.value
    let age = inp2.current.value

    setOut([...out, { id: out.length + 1, name: name, age: age }])
    setCount(out.length + 1)

    console.log(out)
  }

  return (
    <div className="App">
      <h1>Task {count}</h1>

      <input ref={inp1} type="text" placeholder="name" />
      <input ref={inp2} type="number" placeholder="age" />
      <ol>
        {out.map(item => <li key={item.id}>Name: {item.name} Age: {item.age}</li>)}
      </ol>
      <button onClick={plus}>+</button>
    </div>
  );
}

export default App;
