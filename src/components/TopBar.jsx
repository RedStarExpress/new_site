import React from 'react'

function TopBar() {
    return (
        <div
            class="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block"
        >
            <div class="row gx-0 align-items-center">
                <div class="col-lg-7 px-5 text-start">
                    <a href='tel:+998331902666' class="h-100 d-inline-flex align-items-center me-4 text-white-50">
                        <small class="fa fa-phone-alt me-2"></small>
                        <small>+998 33 190 26 66</small>
                    </a>
                    <a href='https://t.me/zed_cargo' class="h-100 d-inline-flex align-items-center me-4 text-white-50">
                        <small class="far fa-envelope-open me-2"></small>
                        <small>@zed_cargo</small>
                    </a>
                    <div class="h-100 d-inline-flex align-items-center me-4">
                        <small class="far fa-clock me-2"></small>
                        <small>DU - SHAN,  9:00 - 18:00</small>
                    </div>
                </div>
                <div class="col-lg-5 px-5 text-end">
                    <div class="h-100 d-inline-flex align-items-center">
                        <a class="text-white-50 ms-4" href="#1"
                        ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a class="text-white-50 ms-4" href="#1"
                        ><i class="fab fa-twitter"></i
                        ></a>
                        <a class="text-white-50 ms-4" href="#1"
                        ><i class="fab fa-linkedin-in"></i
                        ></a>
                        <a class="text-white-50 ms-4" href="https://www.instagram.com/zedcargo"
                        ><i class="fab fa-instagram"></i
                        ></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar