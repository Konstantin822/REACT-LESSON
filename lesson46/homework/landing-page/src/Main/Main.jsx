function Main() {

    let hero = {
        denis: './Denis_Novik.jpg',
        ps: './Ps.svg',
        ai: './Ai.svg',
        ae: './Ae.svg',
        figma: './Figma.svg',
        fashion: './Fashion-Store.png',
        reebok: './reebok_web.png',
        braun: './braun-landing.png'
    }
    return (
        <main>
            <section class="hero">
                <div class="container">
                    <div class="hero__first-screen">
                        <h1 class="hero__name">Denis Novik</h1>
                        <img class="hero__image" src={hero.denis} alt="Denis Novik" width="970"></img>
                    </div>
                </div>
            </section>

            <section class="about">
                <div class="container">
                    <div class="about-me">
                        <h2 class="about__title">About me</h2>
                        <div class="about__description">
                            <p class="about__description__text">Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in
                                design and
                                everything connected with it.</p>
                            <p class="about__description__text">I'm studying at courses "Web and mobile design interfaces"
                                in
                                IT-Academy.
                            </p>
                            <p class="about__description__text">Ready to implement excellent projects with wonderful people.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="skills">
                <div class="container">
                    <div class="skills__place">
                        <div class="skills-heading">
                            <h2 class="skills__title">Skills</h2>
                            <p class="skills__description">I work in such programs as</p>
                        </div>
                        <div class="skills__row">
                            <div class="skills__item">
                                <div class="item__product">
                                    <img src={hero.ps} alt="adobe photoshop"></img>
                                    <h4 class="skills__name">Adobe Photoshop</h4>
                                </div>
                                <div class="skills__stars">
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26"
                                        fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26"
                                        fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26"
                                        fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                            <div class="skills__item">
                                <div class="item__product">
                                    <img src={hero.ai} alt="adobe illustrator"></img>
                                    <h4 class="skills__name">Adobe Illustrator</h4>
                                </div>
                                <div class="skills__stars">
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26"
                                        fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26"
                                        fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                            <div class="skills__item">
                                <div class="item__product">
                                    <img src={hero.ae} alt="adobe after effects"></img>
                                    <h4 class="skills__name">Adobe After Effects</h4>
                                </div>
                                <div class="skills__stars">
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26"
                                        fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                            <div class="skills__item">
                                <div class="item__product">
                                    <img src={hero.figma} alt="figma"></img>
                                    <h4 class="skills__name">Figma</h4>
                                </div>
                                <div class="skills__stars">
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                    <svg class="is-active" xmlns="http://www.w3.org/2000/svg" width="27" height="26"
                                        viewBox="0 0 27 26" fill="none">
                                        <path
                                            d="M7.41471 25.6211C6.78429 26.1123 6.14017 26.1259 5.48235 25.662C4.82452 25.1982 4.60525 24.5843 4.82452 23.8203L7.16802 16.2485L1.20649 12.0329C0.54867 11.5691 0.350226 10.9551 0.611163 10.1911C0.871003 9.42715 1.39836 9.04516 2.19323 9.04516H9.55264L11.9372 1.18692C12.0743 0.804923 12.287 0.511331 12.5753 0.306144C12.8626 0.102048 13.1707 0 13.4996 0C13.8285 0 14.1366 0.102048 14.4238 0.306144C14.7122 0.511331 14.9249 0.804923 15.0619 1.18692L17.4465 9.04516H24.8059C25.6008 9.04516 26.1287 9.42715 26.3896 10.1911C26.6495 10.9551 26.4505 11.5691 25.7927 12.0329L19.8311 16.2485L22.1746 23.8203C22.3939 24.5843 22.1746 25.1982 21.5168 25.662C20.859 26.1259 20.2149 26.1123 19.5844 25.6211L13.4996 20.9962L7.41471 25.6211Z"
                                            fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="portfolio">
                <div class="container">
                    <div class="portfolio__place">
                        <h2 class="portfolio__title">Portfolio</h2>
                        <div class="portfolio__pages">
                            <div class="portfolio__item">
                                <img src={hero.fashion} alt="fashion store"></img>
                                <p class="portfolio__description">Online fashion store - Homepage</p>
                            </div>
                            <div class="portfolio__item">
                                <img src={hero.reebok} alt="reebok store"></img>
                                <p class="portfolio__description">Reebok store - Concept</p>
                            </div>
                            <div class="portfolio__item">
                                <img src={hero.braun} alt="braun landing page"></img>
                                <p class="portfolio__description">Braun Landing Page - Concept</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;