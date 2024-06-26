import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}