import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import Home from './Pages/Home/Home.jsx';
import Goods from './Pages/Goods/Goods.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';

import './main.css';

function App() {
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/goods' element={<Goods />} />
                        <Route path='/contact' element={<ContactUs />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
