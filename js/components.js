class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="container-fluid nav-bar bg-transparent">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <a href="index.html" class="navbar-brand d-flex align-items-center text-center">
                    <div class="icon p-2 me-2">
                        <img class="img-fluid" src="img/icon-deal.png" alt="Icon" style="width: 30px; height: 30px;">
                    </div>
                    <h1 class="m-0 text-primary">MATRIX ONE</h1>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <a href="index.html" class="nav-item nav-link ${this.getAttribute('active')==='home'?'active':''}">Trang Chủ</a>
                        <a href="location.html" class="nav-item nav-link ${this.getAttribute('active')==='location'?'active':''}">Vị Trí</a>
                        <a href="layout.html" class="nav-item nav-link ${this.getAttribute('active')==='layout'?'active':''}">Mặt Bằng</a>
                        <a href="contact.html" class="nav-item nav-link ${this.getAttribute('active')==='contact'?'active':''}">Liên hệ</a>
                    </div>
                    <a href="tel:0988412823" class="btn btn-primary px-3 d-none d-lg-flex">hotline: 0988412823</a>
                </div>
            </nav>
        </div>
      `;
    }
  }
  class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Liên Hệ</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>1 Lê Quang Đạo, Mễ Trì, HN</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>0988412823</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>Hrnhctrang@gmail.com</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Liên Kết Nhanh</h5>
                        <a class="btn btn-link text-white-50" href="">Vị Trí</a>
                        <a class="btn btn-link text-white-50" href="">Mặt Bằng</a>
                        <a class="btn btn-link text-white-50" href="">Liên Hệ</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Photo Gallery</h5>
                        <div class="row g-2 pt-2">
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-1.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-2.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-3.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-4.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-5.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-6.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Nhận Thông Tin</h5>
                        <p>Điền Email của bạn để đăng kí nhận thông tin về dự án</p>
                        <div class="position-relative" style="max-width: 400px;">
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="email" placeholder="Email">
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Đăng Kí</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">The Matrix One Premium</a>, All Right Reserved. 
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Trang chủ</a>
                                <a href="">Vị trí</a>
                                <a href="">Mặt bằng</a>
                                <a href="">Liên hệ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
  }
  customElements.define('my-header', MyHeader);
  customElements.define('my-footer', MyFooter);
  