import { Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";


function App() {
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
