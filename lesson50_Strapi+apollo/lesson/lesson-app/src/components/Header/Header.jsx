export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container header__container">
                    <img src="/images/logo.svg" />
                    <nav className="header__nav">
                        <a href="" className="header__link header__nav-home--active">Home</a>
                        <a href="" className="header__link header__nav-news">Last news</a>
                        <a href="" className="header__link header__nav-videos">Videos</a>
                        <a href="" className="header__link header__nav-incubator">Incubator</a>
                        <a href="" className="header__link header__nav-collection">Collection</a>
                        <a href="" className="header__link header__nav-shop">Shop</a>
                        <a href="" className="header__link header__nav-testimonials">Testimonials</a>
                        <a href="" className="header__link header__nav-contact">Contact</a>
                    </nav>
                </div>
            </header>
        </>
    )
}