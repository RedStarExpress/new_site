import React from 'react'

function Facts() {
    return (
        <div class="container-fluid overflow-hidden my-5 px-lg-0">
            <div class="container facts px-lg-0">
                <div class="row g-0 mx-lg-0">
                    <div class="col-lg-6 facts-text wow fadeIn" data-wow-delay="0.1s">
                        <div class="h-100 px-4 ps-lg-0">
                            <h1 class="text-white mb-4">Shaxsiy menejer va maxsus xizmatlar haqida</h1>
                            <p class="text-light mb-5">
                                ZED CARGO kompaniyasi sizga maxsus VIP-100 xizmatini taklif qiladi. Bu xizmatda siz uchun maxsus yuqori tajribaga ega 
                                menejer xizmat ko'rsatadi va har bir mijoz bilan individual ishlanadi. VIP-100 xizmatida faqatgina 100 ta mijoz uchun xizmat ko'rsatiladi,
                                joylar soni chegaralanganligi sababli siz ham bu xizmatdan foydalanishga ulgurib qoling.
                            </p>
                            <a href="#1" class="align-self-start btn btn-secondary py-3 px-5">
                                Menejer bilan aloqa
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 facts-counter wow fadeIn" data-wow-delay="0.5s">
                        <div class="h-100 px-4 pe-lg-0">
                            <div class="row g-5">
                                <div class="col-sm-6">
                                    <h1 class="display-5" data-toggle="counter-up">1234</h1>
                                    <p class="fs-5 text-primary">Mamnun mijozlar</p>
                                </div>
                                <div class="col-sm-6">
                                    <h1 class="display-5" data-toggle="counter-up">1234</h1>
                                    <p class="fs-5 text-primary">Yetkazilgan miqdor</p>
                                </div>
                                <div class="col-sm-6">
                                    <h1 class="display-5" data-toggle="counter-up">1234</h1>
                                    <p class="fs-5 text-primary">Hamkorlar soni</p>
                                </div>
                                <div class="col-sm-6">
                                    <h1 class="display-5" data-toggle="counter-up">1234</h1>
                                    <p class="fs-5 text-primary">Jamoa a'zolari</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facts