import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Nav from './nav/Nav.jsx';

import logo from "./icons/logo192.png";

let hero = {
  title: "Hello World",
  img: './logo512.png',
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing"
}

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-wrap">
        {/* <Nav />
        <img src={logo} alt=""></img> */}
        <h1>{hero.title}</h1>
        <Nav />
        <img src={hero.img}></img>
        <p>{hero.description}</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
