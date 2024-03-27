import Header from "./Header/Header.jsx"

import logo from './icons/logo512.png'
export default function App() {
    return (
        <div className="wrapper">
            <Header />
            <img src="logo192.png"></img>
            <img src={logo}></img>
        </div>
    )
}