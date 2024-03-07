import React from 'react'

function Navbar() {
    return (
        <nav
            class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5"
        >
            <a href="index.html" class="navbar-brand d-flex align-items-center">
                <h1 class="m-0">
                    <img
                        class="img-fluid me-3"
                        src="img/icon/icon-02-primary.png"
                        alt=""
                    />ZedCargo
                </h1>
            </a>
            <button
                type="button"
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
                    <a href="index.html" class="nav-item nav-link active">Bosh sahifa</a>
                    <a href="about.html" class="nav-item nav-link">Biz haqimizda</a>
                    <a href="service.html" class="nav-item nav-link">Bizning xizmatlar</a>
                    <div class="nav-item dropdown">
                        <a
                            href="#1"
                            class="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >sahifalar</a
                        >
                        <div class="dropdown-menu bg-light border-0 m-0">
                            <a href="feature.html" class="dropdown-item">Features</a>
                            <a href="appointment.html" class="dropdown-item">Appointment</a>
                            <a href="team.html" class="dropdown-item">Team Members</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="404.html" class="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" class="nav-item nav-link">Bog'lanish</a>
                </div>
            </div>
            <a href="#1" class="btn btn-primary px-3 d-none d-lg-block">ADMIN BILAN BOG'LANISH</a>
        </nav>
    )
}

export default Navbar