import React from 'react'

function Features() {
    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="display-6 mb-5">Mijozlar nega bizni tanlashadi!</h1>
                        <p class="mb-4">
                        Bizning ishonchliligimiz, samaradorligimiz va yuqori darajadagi xizmat ko'rsatishimiz tashqi savdo kompaniyalari bilan ko'p yillik ish, ko'plab bajarilgan tashishlar va hamkorlarimizning yuqori bahosi bilan isbotlangan. Bizning mijozlarimiz o'zlarining qimmatbaho yuklarini xavf ostiga qo'yishga qodir emaslar, shuning uchun ular tovarlar va mahsulotlarni tashishni professionallarga ishonib topshirishadi.
                        </p>
                        <div class="row g-3">
                            <div class="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                <div class="bg-light rounded h-100 p-3">
                                    <div
                                        class="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3"
                                    >
                                        <img
                                            class="align-self-center mb-3"
                                            src="img/icon/icon-06-primary.png"
                                            alt=""
                                        />
                                        <h5 class="mb-0">Jarayonlashtirish oson</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                <div class="bg-light rounded h-100 p-3">
                                    <div
                                        class="bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3"
                                    >
                                        <img
                                            class="align-self-center mb-3"
                                            src="img/icon/icon-03-primary.png"
                                            alt=""
                                        />
                                        <h5 class="mb-0">Tezkor yetkazib berish</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                <div class="bg-light rounded h-100 p-3">
                                    <div
                                        class="bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3"
                                    >
                                        <img
                                            class="align-self-center mb-3"
                                            src="img/icon/icon-04-primary.png"
                                            alt=""
                                        />
                                        <h5 class="mb-0">Policy Controlling</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                <div class="bg-light rounded h-100 p-3">
                                    <div
                                        class="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3"
                                    >
                                        <img
                                            class="align-self-center mb-3"
                                            src="img/icon/icon-07-primary.png"
                                            alt=""
                                        />
                                        <h5 class="mb-0">Money Saving</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div
                            class="position-relative rounded overflow-hidden h-100"
                            style={{ minHeight: "400px" }}
                        >
                            <img
                                class="position-absolute w-100 h-100"
                                src="img/feature.jpg"
                                alt=""
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features