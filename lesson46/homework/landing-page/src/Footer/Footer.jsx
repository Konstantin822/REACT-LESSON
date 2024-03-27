function Footer() {

    let footer = {
        linkedin: './linkedin.svg',
        instagram: './instagram.svg',
        behance: './behance.svg',
        dribbble: './dribbble.svg'
    }

    return (
        <footer class="footer">
            <div class="container">
                <div class="footer__contacts">
                    <div class="contacts__heading">
                        <h2 class="footer__title">Contacts</h2>
                        <p class="footer__text">Want to know more or just chat? You are welcome!</p>
                    </div>
                    <div class="footer__links">
                        <button class="button footer__button">
                            <p class="button__text">Send message</p>
                        </button>
                        <div class="footer__icons">
                            <a class="link__linkedin" href="" target="_blank">
                                <img src={footer.linkedin} alt="linkedin" width="40"></img>
                            </a>
                            <a class="link__instagram" href="" target="_blank">
                                <img src={footer.instagram} alt="instagram" width="40"></img>
                            </a>
                            <a class="link__behance" href="" target="_blank">
                                <img src={footer.behance} alt="behance" width="40"></img>
                            </a>
                            <a class="link__dribbble" href="" target="_blank">
                                <img src={footer.dribbble} alt="dribbble" width="40"></img>
                            </a>
                        </div>
                    </div>
                    <p class="footer__description">Like me on LinkedIn, Instagram, Behance, Dribble</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;