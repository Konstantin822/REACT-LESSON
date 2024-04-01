import Button from "./Button.jsx";
import Cart from "./Cart.jsx";

let shopItem = [
  {
    img: "http://google.com",
    title: "title 1",
    description: 'some description'
  },
  {
    img: "http://google.com",
    title: "title 2",
    description: 'some description'
  },
  {
    img: "http://google.com",
    title: "title 3",
    description: 'some description'
  }
]

function App() {
  return (
    <>
      <h1>Test</h1>
      <Button item={'Name'} />
      <Button />
      <Button ClassName={'button--red'} />

      <Cart item={shopItem[0]} />
      <Cart item={shopItem[1]} />
      <Cart item={shopItem[2]} />
    </>
  )
}

export default App;
