import { Route, Routes } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";


const GET_LOCATIONS = gql`
query GetLocations {
  collections {
    meta {
      pagination {
        page 
        pageCount
      }
    }
    data {
      id
      attributes {
        title
        description
        img {
          data {
            attributes {
              url 
            }
          }
        }
      }
    }
  }
}
`;

function App() {
  // fetch('http://localhost:1337/api/upload/files')
  //   .then(data => data.json())
  //   .then(data => console.log(data))

  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(data?.collections.data[1].attributes.title)

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
