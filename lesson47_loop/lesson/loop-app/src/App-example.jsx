import { testUsers } from './data/Users.jsx';

const testUsers2 = [
  { id: 1, name: "Пользователь 1", age: 16, email: "user1@example.com" },
  { id: 2, name: "Пользователь 2", age: 30, email: "user2@example.com" },
  { id: 3, name: "Пользователь 3", age: 22, email: "user3@example.com" },
  { id: 4, name: "Пользователь 4", age: 27, email: "user4@example.com" },
  { id: 5, name: "Пользователь 5", age: 17, email: "user5@example.com" }
];

function App() {

  const users3 = testUsers2.map(item => (
    item.age >= 18 && <h1 key={item.id}>Ви повнолітній: {item.name}</h1>
  ))

  // Условие && { Результат }
  // Условие ? { Результат если true} : { Результат если false}

  return (
    <>
      <h2>Render v1</h2>
      {

        // Old
        // testUsers2.map(item => {
        //   return <div>{item.name}</div>
        // })

        // Key warning fix v1
        // testUsers2.map((item) => (
        //   <h1 key={item.id}>{item.name}</h1>
        // ))

        // Key warning fix v2
        testUsers2 && testUsers2.map((item, index) => (
          <h1 key={index}>{item.name}</h1>
        ))

      }
      <hr />

      <h2>Render v2</h2>
      <div>
        {/* Если юзер есть отрисовуем */}
        {users3 && users3}
      </div>
    </>
  );
}

export default App;
