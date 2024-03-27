import React from 'react'

function About() {
    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div
                            class="position-relative overflow-hidden rounded ps-5 pt-5 h-100"
                            style={{ minHeight: "400px" }}
                        >
                            <img
                                class="position-absolute w-100 h-100"
                                src="img/apacha.png"
                                alt=""
                                style={{ objectFit: "cover" }}
                            />
                            <div
                                class="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3"
                                style={{ width: "200px", height: "200px" }}
                            >
                                <div
                                    class="d-flex flex-column justify-content-center text-center bg-primary rounded h-100 p-3"
                                >
                                    <h1 class="text-white mb-0">5+</h1>
                                    <h2 class="text-white">YILLIK</h2>
                                    <h5 class="text-white mb-0">TAJRIBA</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="h-100">
                            <h1 class="display-6 mb-5">
                                Biz sizning tovarlaringizni Xitoydan eng ishonchli va tezkor olib kelib beramiz
                            </h1>
                            <p class="fs-5 text-primary mb-4">
                                XITOYDAN SOTIB OLISH ENDI YANADA OSON!
                            </p>
                            <div class="row g-4 mb-4">
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center">
                                        <img
                                            class="flex-shrink-0 me-3"
                                            src="img/icon/icon-04-primary.png"
                                            alt=""
                                        />
                                        <h5 class="mb-0">Mahsulotlar sifati yuqorida darajada</h5>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center">
                                        <img
                                            class="flex-shrink-0 me-3"
                                            src="img/icon/icon-03-primary.png"
                                            alt=""
                                        />
                                        <h5 class="mb-0">Mahalliy bozordan ancha arzon</h5>
                                    </div>
                                </div>
                            </div>
                            <p class="mb-4">
                            Bugungi kunda Xitoy mahsulotlari mahalliy do'konlar assortimentining deyarli 80% ni tashkil qiladi. Bu, birinchi navbatda, ularni sotib olishning arzonligi bilan bog'liq. Hattoki, mamlakatga olib kirish va bojxona rasmiylashtiruvi xarajatlarini hisobga olsak ham, bunday tovarlarning yakuniy narxi O‘zbekistonda ishlab chiqarilgan mahsulotlardan bir necha barobar arzon. 
                            </p>
                            <div class="border-top mt-4 pt-4">
                                <div class="d-flex align-items-center">
                                    <img
                                        class="flex-shrink-0 rounded-circle me-3"
                                        src="img/profile.jpg"
                                        alt=""
                                    />
                                    <h5 class="mb-0">Biz bilan bog'lanish: +998 33 190 26 66</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About