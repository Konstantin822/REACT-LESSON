import Card from './component/card.jsx';
import './main.css';
export const testUsers = [
  { id: 1, name: "Пользователь 1", age: 16, email: "user1@example.com" },
  { id: 2, name: "Пользователь 2", age: 30, email: "user2@example.com" },
  { id: 3, name: "Пользователь 3", age: 22, email: "user3@example.com" },
  { id: 4, name: "Пользователь 4", age: 27, email: "user4@example.com" },
  { id: 5, name: "Пользователь 5", age: 17, email: "user5@example.com" }
];

function App() {

  const users = testUsers.map(item => <Card key={item.id} user={item} />)

  return (
    <>
      <div className='card-wrap'>
        {/* V1
      {testUsers.map(item => (
        <Card key={item.id} user={item} />
      ))} */}

        {/* V2 */}
        {users}
      </div>
    </>
  );
}

export default App;
