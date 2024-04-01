import useFetch from 'react-fetch-hook';

function App() {
  const { data, isLoading } = useFetch('https://rickandmortyapi.com/api/character')

  console.log(data?.results);

  const list = data?.results.map(item =>
    <div className="item">
      <img src={item.image}></img>
      <h2>{item.name}</h2>
    </div>
  )
  return isLoading ? (
    <div>...Loading</div>
  ) : (
    <div className="App">
      {list}
    </div>
  );
}

export default App;
