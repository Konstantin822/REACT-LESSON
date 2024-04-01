import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import Home from './Pages/Home/Home.jsx';
import AboutUs from './Pages/AboutUs/AboutUs.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/contact' element={<ContactUs />} />

                    <Route path='*' element={<h1>404</h1>} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
