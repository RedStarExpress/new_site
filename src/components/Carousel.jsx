import React from 'react'

function Carousel() {
    return (
        <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        {/* <img class="w-100" src="img/hero-bg.png" alt="Image1" /> */}
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <h1 class="display-3 text-white mb-4 animated slideInDown">
                                            ZED CARGO - ENG ISHONCHLI HAMKORINGIZ
                                        </h1>
                                        <p class="fs-5 text-white mb-5">
                                            Xitoy davlatidan 3-5 kunda tezkor yetkazib berish xizmati
                                        </p>
                                        <a href="https://t.me/Zedcargo" class="btn btn-primary py-3 px-5"
                                        >ko'proq ma'lumot olish</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item carousel-item-2">
                        {/* <img className="w-100" src="img/hero-bg.png" alt="Image2" /> */}
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <h1 class="display-3 text-white mb-4 animated slideInDown">
                                            TEZKOR, ARZON VA BARQAROR REYSLAR                                        </h1>
                                        <p class="fs-5 text-white mb-5">
                                               Avia logistika o'zining misli ko'rilmagan tezligi va samadorligi bilan mashxur.
                                        </p>
                                        <a href="https://t.me/Zedcargo" class="btn btn-primary py-3 px-5"
                                        >ko'proq ma'lumot olish</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#header-carousel"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#header-carousel"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel