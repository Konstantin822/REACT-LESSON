import { HomeAPI } from "../../data/home-page";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import './style.scss';


export function Card() {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div className="instructions__row">
            {/* <Swiper
                effect={'fade'}
                slidesPerView={3}
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper instructions__slider">
                {HomeAPI.instructions.cards.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="instructionsi__item">
                            <div className="instructions__icons">
                                <h5 className="instructions__title">{item.title}</h5>
                                <img src={'/images/instructions/' + item.icon} alt="" />
                            </div>
                            <p className="instructions__text">
                                {item.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> */}
            {HomeAPI.instructions.cards.map((item, index) => (
                <div key={index} className="instructions__card">
                    <div className="instructions__icons">
                        <h5 className="instructions__title">{item.title}</h5>
                        <img src={'/images/instructions/' + item.icon} alt="" />
                    </div>
                    <p className="instructions__text">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="container hero__container">
                    <div className="hero__item">
                        <img src="/images/Lizard.png" alt="lizard" />
                        <div className="hero__item_title">
                            <h2 className="hero__item_title-name">Uromastyx Ornate</h2>
                            <h3 className="hero__item_title-status">In Stock</h3>
                        </div>
                    </div>
                    <div className="hero__content">
                        <h1 className="h1 hero__title">
                            {HomeAPI.title}
                        </h1>
                        <p className="p1 hero__text">
                            {HomeAPI.description}
                        </p>

                        <div className="hero__owner">
                            <img src={'/images/' + HomeAPI.owner.img} alt="" />
                            <div className="hero__row">
                                <h5 className="hero__name">
                                    {HomeAPI.owner.name}
                                </h5>
                                <p className="hero__position">
                                    {HomeAPI.owner.position}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* home-list */}
            {/* nav */}
            <section className="instructions">
                <div className="container instructions__container">
                    <header className="instructions__header">
                        <img src="/images/chameleon.png" alt="chameleon" />
                        <h2 className="instructions__header_title">
                            {HomeAPI.instructions.title}
                        </h2>
                    </header>
                    <Card />
                </div>
            </section>
        </>
    )
}