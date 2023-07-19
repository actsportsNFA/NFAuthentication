import React, { useEffect } from "react";

export default function Home() {
  const Swiper = window.Swiper;
  useEffect(() => {
    new Swiper(".rts-brandSlider", {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      speed: 1000,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      breakpoints: {
        1200: {
          slidesPerView: 6,
        },
        900: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        580: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".slide-next",
        prevEl: ".slide-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
  }, []);

  return (
    <>
      {/* <!--================= Gallery Start Here =================--> */}
      <section
        class="rts-single-news-section section-gap rts-gallery-section"
        id="cards"
      >
        <div class="container">
          <div class="section-title-area section-title-area1 text-center mb--50">
            <span class="pretitle">BENEFITS</span>
            <h1 class="section-title">Why NFA ?</h1>
            <p>
              {" "}
              Unlock the world of collectibles and discover the benefits of
              owning exclusive digital authentications!
            </p>
          </div>
          <div class="section-inner">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="item">
                  <a class="gallery-picture">
                    <img
                      src="./images/card-1.jpg"
                      alt=""
                    />
                  </a>
                  <div class="contents-wrapper">
                    <div class="contents text-center">
                      <div class="d-block">
                        <i class="fa-regular fa-medal"></i>
                        {/* <!-- <div class="heading d-flex">
                                            <p class="tag">NFA</p>
                                            <span class="blog-date">JULY 21, 2023</span>
                                        </div> --> */}
                        <div class="gallery-title">
                          <a href="#">
                            Guarantee 100% <br /> authenticity
                          </a>
                        </div>
                      </div>
                      {/* <!-- <div class="author-info">
                                        <div class="content">
                                            <a href="#" class="read-more">READ MORE</a>
                                        </div>
                                    </div> --> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="item">
                  <a class="gallery-picture">
                    <img
                      src="./images/img.jpg"
                      alt=""
                    />
                  </a>
                  <div class="contents-wrapper">
                    <div class="contents text-center">
                      <div class="d-block">
                        <i class="fa-solid fa-display-chart-up-circle-currency"></i>
                        {/* <!-- <div class="heading d-flex">
                                            <p class="tag">NFA</p>
                                            <span class="blog-date">JULY 21, 2023</span>
                                        </div> --> */}
                        <div class="gallery-title">
                          <a href="#">
                            Sports collectible <br /> ownership tracking
                          </a>
                        </div>
                      </div>
                      {/* <!-- <div class="author-info">
                                        <div class="content">
                                            <a href="#" class="read-more">READ MORE</a>
                                        </div>
                                    </div> --> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="item">
                  <a class="gallery-picture">
                    <img
                      src="./images/img-2.png"
                      alt=""
                    />
                  </a>
                  <div class="contents-wrapper">
                    <div class="contents text-center">
                      <div class="d-block">
                        <i class="fa-regular fa-microchip"></i>
                        {/* <!-- <div class="heading d-flex">
                                            <p class="tag">NFA</p>
                                            <span class="blog-date"> JULY 21, 2023</span>
                                        </div> --> */}
                        <div class="gallery-title">
                          <a href="#">
                            Exclusive personalized <br /> fan experience
                          </a>
                        </div>
                      </div>
                      {/* <!-- <div class="author-info">
                                        <div class="content">
                                            <a href="#" class="read-more">READ MORE</a>
                                        </div>
                                    </div> --> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- <div class="col-lg-3 col-md-6">
                        <div class="item">
                            <a href="bog-details.html" class="gallery-picture"><img src="./images/blog/blog11.jpg" alt=""></a>
                            <div class="contents-wrapper">
                                <div class="contents text-start">
                                    <div class="d-block">
                                        <div class="heading d-flex">
                                            <p class="tag">NFA</p>
                                            <span class="blog-date"> JULY 21, 2023</span>
                                        </div>
                                        <div class="gallery-title">
                                            <a href="blog-details.html">WHAT TO EXPECT FROM</a>
                                        </div>
                                    </div>
                                    <div class="author-info">
                                        <div class="content">
                                            <a href="blog-details.html" class="read-more">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> --> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!--================= About Section Start Here =================--> */}
      <div class="rts-about-section section-gap" id="about">
        <div class="shape1">
          <img src="./images/shape2.png" alt="" />
        </div>
        <div class="shape2">
          <img
            src="./images/logo-re.png"
            style={{ opacity: "0.1" ,width:'320px'}}
            alt=""
          />
        </div>
        <div class="container-1">
          <div class="about-inner">
            <div class="row align-items-center">
              <div class="col-lg-5 col-12">
                <div class="about-thumb">
                  <div class="img1">
                    <img
                      src="./images/halmet.png"
                      alt="about-thumb"
                    />
                  </div>
                  <div class="img2">
                    <img
                      src="./images/shirts.png"
                      alt="about-thumb"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-12">
                <div class="contents">
                  <div class="section-title-area section-title-area1 text-start">
                    {/* <span class="pretitle">GAMES</span> */}
                    <h1 class="section-title">
                      <span>NFA IS A POWERFULL</span> <br /> AUTHENTICATION
                    </h1>
                    <p>
                      NFA is a powerful tool that allows athletes to
                      authenticate their sports collectibles <br />
                      using blockchain technology. Meaning fans can trust that
                      the collectibles <br />
                      they purchase are authentic and verified by the athletes.{" "}
                    </p>
                  </div>
                  <ul>
                    <li class="player">
                      <p class="sub">100%</p>
                      <h3 class="title">Guarantee</h3>
                    </li>
                    <li class="player">
                      <p class="sub">Tracking</p>
                      <h3 class="title">Ownership</h3>
                    </li>
                    <li class="player">
                      <p class="sub">Fan Experience</p>
                      <h3 class="title">Exclusive</h3>
                    </li>
                  </ul>
                  <a href="https://nfauthentication.com/" class="more-btn">
                    Join now<i class="fal fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--================= About Section End Here =================--> */}

      <div class="rts-awards-section section-gap" id="process">
        <div class="container">
          <div class="section-title-area section-title-area1 text-center mb--100">
            <span class="pretitle">Process</span>
            <h1 class="section-title">How Does NFA Work?</h1>
            <p>
              Receive product and exclusive experiences through athletes brand
              partnerships.
            </p>
          </div>
          <div class="row">
            <div class="col-xl-3 col-md-6">
              <div class="award-box">
                <h3>01</h3>
                <div class="award-picture">
                  <img
                    src="./images/shirt2.png"
                    alt="award-picture"
                  />
                </div>
                <div class="content">
                  <span class="award-title">
                    Buy the athlete's NFA <br /> autographed collectible
                  </span>
                  {/* <!-- <p>FINAL TOUR</p> --> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="award-box">
                <h3>02</h3>
                <div class="award-picture">
                  <img
                    src="./images/qr.png"
                    alt="award-picture"
                  />
                </div>
                <div class="content">
                  <span class="award-title">
                    Scan the QR code on the <br /> autographed collectible
                  </span>
                  {/* <!-- <p>FINAL TOUR</p> --> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="award-box">
                <h3>03</h3>
                <div class="award-picture">
                  <img
                    src="./images/card2.png"
                    alt="award-picture"
                  />
                </div>
                <div class="content">
                  <span class="award-title">
                    Redeem NFA <br /> Authentication
                  </span>
                  {/* <!-- <p>FINAL TOUR</p> --> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="award-box">
                <h3>04</h3>
                <div class="award-picture">
                  <img
                    src="./images/shoes.webp"
                    alt="award-picture"
                    style={{height:'155px',borderRadius:'50px'}}
                  />
                </div>
                <div class="content">
                  <span class="award-title">
                    Enjoy products, exclusive merchandise, and benefits <br />{" "}
                    from athletes' brand <br /> endorsement.
                  </span>
                  {/* <!-- <p>FINAL TOUR</p> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--================= Video Section Start Here =================--> */}
      <div class="rts-video-section">
        <div class="container">
          <div class="video-section-inner text-center">
            {/* <!-- <div class="play-video">
                    <a class="popup-video" href="https://www.youtube.com/watch?v=G4t6TqG5LM8"><i
                            class="fas fa-play"></i></a>
                </div> --> */}
            <div class="section-title-area section-title-area1 text-center text-white">
              <h1 class="section-title">
                Join your favorite athlete community
              </h1>
              <p>
                Digital authentications, when tethered to physical items, ascend
                to new heights of value, forging a bridge between the intangible
                and the tangible.
              </p>
            </div>
            <div class="col-lg-2 text-center mt-3">
              <a href="https://nfauthentication.com/" class="more-btn d-block">
                JOIN NOW <i class="fal fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!--================= VIdeo Section End Here =================-->
    <!--================= Sponsors Section Start Here =================--> */}
      <div class="rts-sponsors-section section-gap" id="sponsor">
        <div class="container">
          <div class="section-title-area section-title-area1 text-center mb--50">
            <span class="pretitle">Brand</span>
            <h1 class="section-title">
              Recognizable Athletes brand partnerships
            </h1>
            <p>
            Our NFA digital authentication grants you exclusive access to the brand partners of the athletes.
            </p>
          </div>
          <div class="sponsors-section-inner">
            <div class="swiper rts-brandSlider">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="#0" class="sponsor-single">
                    <div class="sponsors-logo">
                      <img
                        src="./images/brand1.svg"
                        alt="sponsor"
                      />
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#0" class="sponsor-single">
                    <div class="sponsors-logo">
                      <img
                        src="./images/brand2.svg"
                        alt="sponsor"
                      />
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#0" class="sponsor-single">
                    <div class="sponsors-logo">
                      <img
                        src="./images/brand3.svg"
                        alt="sponsor"
                      />
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#0" class="sponsor-single">
                    <div class="sponsors-logo">
                      <img
                        src="./images/brand4.svg"
                        alt="sponsor"
                      />
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#0" class="sponsor-single">
                    <div class="sponsors-logo">
                      <img
                        src="./images/brand5.svg"
                        alt="sponsor"
                      />
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#0" class="sponsor-single">
                    <div class="sponsors-logo">
                      <img
                        src="./images/brand6.svg"
                        alt="sponsor"
                      />
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#0" class="sponsor-single">
                    <div class="sponsors-logo">
                      <img
                        src="./images/brand7.svg"
                        alt="sponsor"
                      />
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#0" class="sponsor-single">
                    <div class="sponsors-logo">
                      <img
                        src="./images/brand8.svg"
                        alt="sponsor"
                      />
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#0" class="sponsor-single">
                    <div class="sponsors-logo">
                      <img
                        src="./images/brand9.svg"
                        alt="sponsor"
                      />
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#0" class="sponsor-single">
                    <div class="sponsors-logo">
                      <img
                        src="./images/brand10.svg"
                        alt="sponsor"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--================= Sponsors Table Section End Here =================--> */}

      {/* <!--================= Newsletter Section Start Here =================--> */}
      <div class="rts-newsletter-section" id="contact">
        <div class="container">
          <div class="newsletter-inner">
            <div class="row">
              <div class="col-lg-6">
                <div class="newsletter-box">
                  <div class="shape">
                    <img
                      src="./images/team/shape.png"
                      alt=""
                    />
                  </div>
                  <div class="section-title-area section-title-area1 text-start mb--50">
                    <h1 class="section-title">SUBSCRIBE NEWSLETTER</h1>
                    <p>
                      Game Changer: Stay Ahead of the Game with our NFA
                      Newsletter
                    </p>
                  </div>
                  <form>
                    <div class="form">
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Enter Your Email"
                        required
                      />
                    </div>
                    <div class="button">
                      <button type="submit" class="btn">
                        SUBSCRIBE <i class="fal fa-long-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="hero-image">
                  <img
                    src="./images/qr.png"
                    alt=""
                    style={{ maxHeight: "380px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--================= Newsletter Section End Here =================--> */}
      {/*  */}

      {/* <!--================= Product-details Section Start Here =================--> */}
      <div class="product-details-popup-wrapper">
        <div class="rts-product-details-section rts-product-details-section2 product-details-popup-section">
          <div class="product-details-popup">
            <button class="product-details-close-btn">
              <i class="fal fa-times"></i>
            </button>
            <div class="details-product-area">
              <div class="product-thumb-area">
                <div class="product-thumb-filter-group">
                  <div class="thumb-filter filter-btn active" data-show=".one">
                    <img
                      src="./images/products/gloves.png"
                      alt="product-thumb-filter"
                    />
                  </div>
                  <div class="thumb-filter filter-btn" data-show=".two">
                    <img
                      src="./images/products/product1.png"
                      alt="product-thumb-filter"
                    />
                  </div>
                  <div class="thumb-filter filter-btn" data-show=".three">
                    <img
                      src="./images/products/product2.png"
                      alt="product-thumb-filter"
                    />
                  </div>
                </div>
                <div class="cursor"></div>
                <div class="thumb-wrapper one filterd-items figure">
                  <div
                    class="product-thumb zoom"
                    onMouseMove="zoom(event)"
                    style={{
                      backgroundImage: "url(./images/products/prod.jpg)",
                    }}
                  >
                    <img
                      src="./images/products/prod.jpg"
                      alt="product-thumb"
                    />
                  </div>
                </div>
                <div class="thumb-wrapper two filterd-items hide">
                  <div
                    class="product-thumb zoom"
                    onMouseMove="zoom(event)"
                    style={{
                      backgroundImage: "url(./images/products/prod.jpg)",
                    }}
                  >
                    <img
                      src="./images/products/prod.jpg"
                      alt="product-thumb"
                    />
                  </div>
                </div>
                <div class="thumb-wrapper three filterd-items hide">
                  <div
                    class="product-thumb zoom"
                    onMouseMove="zoom(event)"
                    style={{
                      backgroundImage: "url(./images/products/prod.jpg)",
                    }}
                  >
                    <img
                      src="./images/products/prod.jpg"
                      alt="product-thumb"
                    />
                  </div>
                </div>
              </div>
              <div class="contents">
                <div class="product-status">
                  <span class="product-catagory">Dress</span>
                  <div class="rating-stars-group">
                    <div class="rating-star">
                      <i class="fas fa-star"></i>
                    </div>
                    <div class="rating-star">
                      <i class="fas fa-star"></i>
                    </div>
                    <div class="rating-star">
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                    <span>10 Reviews</span>
                  </div>
                </div>
                <h2 class="product-title">
                  Wide Cotton Tunic Dress <span class="stock">In Stock</span>
                </h2>
                <span class="product-price">
                  <span class="old-price">$9.35</span> $7.25
                </span>
                <p>
                  Priyoshop has brought to you the Hijab 3 Pieces Combo Pack
                  PS23. It is a completely modern design and you feel
                  comfortable to put on this hijab. Buy it at the best price.
                </p>
                <div class="product-bottom-action">
                  <div class="cart-edit">
                    <div class="quantity-edit action-item">
                      <button class="button">
                        <i class="fal fa-minus minus"></i>
                      </button>
                      <input type="text" class="input" value="01" />
                      <button class="button plus">
                        +<i class="fal fa-plus plus"></i>
                      </button>
                    </div>
                  </div>
                  <a href="cart.html" class="addto-cart-btn action-item">
                    <i class="rt-basket-shopping"></i>
                    Add To Cart
                  </a>
                  <a href="wishlist.html" class="wishlist-btn action-item">
                    <i class="rt-heart"></i>
                  </a>
                </div>
                <div class="product-uniques">
                  <span class="sku product-unipue">
                    <span>SKU: </span> BO1D0MX8SJ
                  </span>
                  <span class="catagorys product-unipue">
                    <span>Categories: </span> T-Shirts, Tops, Mens
                  </span>
                  <span class="tags product-unipue">
                    <span>Tags: </span> fashion, t-shirts, Men
                  </span>
                </div>
                <div class="share-social">
                  <span>Share:</span>
                  <a class="platform" href="#0">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="platform" href="#0">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="platform" href="#0">
                    <i class="fab fa-behance"></i>
                  </a>
                  <a class="platform" href="#0">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a class="platform" href="#0">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--================= Product-details Section End Here =================--> */}

      <section class="faq-area pt-105 pt-105 pt-md-55 pt-xs-55" id="faq">
        <div class="container">
          <div class="row align-items-center pb-90 pb-md-30 pb-xs-30">
            <div class="col-lg-12 col-md-12">
              <div class="faq-content-wrapper2 faq-wrap3 pr-30 pr-lg-0 pr-md-0 pr-xs-0">
                <div class="section-title-area section-title-area1 text-center mb--50">
                  <span class="pretitle">FAQS</span>
                  <h1 class="section-title">GENERAL FAQS</h1>
                  <p>
                    Frequently Asked Questions: Everything You Need to Know
                    About Sports
                  </p>
                </div>
                <div class="faq-que-list faq-que2 mb-30">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span>01.</span>What is NFA digital authentication?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p class="fs-14">
                            NFA (Non-Fungible Authentication) are unique digital
                            ., to verify the authenticity and ownership of
                            physical goods. By creating a digital representation
                            of a physical item on a blockchain, the NFA process
                            provides a way to validate the origin, history, and
                            ownership of tangible objects. It enables
                            collectors, buyers, and sellers to have a secure and
                            transparent method of verifying the authenticity and
                            provenance of physical items using blockchain
                            technology.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span>02.</span> Why is NFA digital authentication
                          important?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p class="fs-14">
                            NFA digital authentication is important for
                            collectors because it enhances their exclusive
                            experience in several ways:
                          </p>
                          <ul>
                            <li>
                              1. Authenticity Verification: NFA digital
                              authentication provides a secure and immutable way
                              to verify the authenticity of collectible items.
                              By attaching a unique NFA to a physical item,
                              collectors can have confidence in its provenance,
                              ensuring that it is genuine and not counterfeit
                            </li>
                            <li>
                              2. Ownership Confirmation: NFA digital
                              authentication allows collectors to prove
                              ownership of their items. The blockchain-based
                              nature of NFTs provides a transparent and
                              tamper-proof record of ownership, eliminating the
                              need for cumbersome paperwork or relying on trust
                              in transactions
                            </li>
                            <li>
                              3. Rarity and Scarcity: NFAs can be used to
                              establish the rarity and scarcity of collectible
                              items. By assigning a limited number of NFAs to
                              specific items, collectors can have a verifiable
                              proof of their item's exclusivity, adding value to
                              their collection.
                            </li>
                            <li>
                              4. Trading and Marketplace Efficiency: NFA digital
                              authentication enables collectors to easily buy,
                              sell, and trade their items in digital
                              marketplaces. The use of NFAs simplifies the
                              process, as ownership transfer can be executed
                              securely and instantly through smart contracts,
                              providing a seamless and efficient experience for
                              collectors.
                            </li>
                            <li>
                              5. Enhanced Collecting Experience: NFA digital
                              authentication adds a layer of innovation and
                              excitement to the collecting experience.
                              Collectors can engage in unique digital
                              interactions with their items, such as showcasing
                              their collection digitally or participating in
                              immersive experiences tied to their NFA-backed
                              physical items.
                            </li>
                            <p>
                              Overall, NFA digital authentication enhances
                              collectors' exclusive experience by ensuring
                              authenticity, establishing ownership, validating
                              rarity, facilitating trading, and introducing new
                              digital possibilities to the world of collecting.
                            </p>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span>03.</span> What can I do with a NFA digital
                          authentication?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p class="fs-14">
                            With NFA digital authentication, you can:
                          </p>
                          <ul>
                            <li>
                              1. Verify Authenticity: Use NFA to validate the
                              authenticity of physical items, ensuring they are
                              genuine and not counterfeit.
                            </li>
                            <li>
                              2. Establish Ownership: NFA digital authentication
                              provides a secure and transparent way to prove
                              ownership of your collectible items
                            </li>
                            <li>
                              3. Enhance Value: By associating NFA with your
                              physical items, you can add value to your
                              collection, as the exclusivity and provenance are
                              verified on the blockchain
                            </li>
                            <li>
                              4. Trade and Sell: Utilize digital marketplaces to
                              buy, sell, or trade your authenticated items more
                              efficiently, leveraging the benefits of NFA for
                              seamless ownership transfer
                            </li>
                            <li>
                              5. Engage in Digital Interactions: Explore unique
                              digital experiences tied to your NFA-backed
                              physical items, such as virtual galleries,
                              immersive showcases, or interactive content
                              related to your collection.
                            </li>
                            <li>
                              6. Connect with a Community: Participate in
                              communities of collectors and enthusiasts who
                              appreciate and engage with NFA-authenticated
                              physical items, expanding your network and sharing
                              your passion.
                            </li>
                            <p>
                              In summary, NFA digital authentication allows you
                              to validate authenticity, establish ownership,
                              enhance value, trade items, engage in digital
                              experiences, and connect with fellow collectors in
                              the NFA ecosystem.
                            </p>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingFour">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <span>04.</span> How do I get a NFA digital
                          authentication?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p class="fs-14">
                            To obtain NFA digital authentication for a physical
                            item, follow these steps:
                          </p>
                          <ul>
                            <li>
                              1. Purchase the NFA Athletes Autograph Collection:
                              Visit nfauthentication.com and select the desired
                              NFA athletes autograph collection.
                            </li>
                            <li>
                              2. Receive the Physical Item: After making the
                              purchase, you will receive the physical item, such
                              as a signed memorabilia or autographed item,
                              through the designated shipping process.
                            </li>
                            <li>
                              3. Scan the QR Code: Locate the QR code attached
                              to the item or the associated documentation. Use
                              your smartphone to scan the QR code.
                            </li>
                            <li>
                              4. Redeem Your NFA Authentication Card: Once you
                              scan the QR code, it will direct you to a
                              redemption process. Follow the instructions
                              provided to redeem your NFA authentication card
                              associated with the item
                            </li>
                            <li>
                              5. Receive the NFA Authentication Card: After
                              successfully completing the authentication
                              process, you will receive your NFA authentication
                              card associated with your purchased item. This
                              digital card serves as proof of authenticity and
                              ownership on the blockchain.
                            </li>
                            <p>
                              By scanning the QR code and going through the
                              redemption process, you can obtain your NFA
                              digital authentication card, ensuring the
                              authenticity and ownership of your NFA athletes
                              autograph collection item.
                            </p>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingFive">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          <span>05.</span> Where do I store my NFA digital
                          authentication?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p class="fs-14">
                            You can store your NFA digital authentication in a
                            digital wallet. If you already have a digital wallet
                            that supports NFTs, you can use that. Otherwise, NFA
                            offers a convenient option to create a digital
                            wallet in seconds using your phone number through
                            SMS or WhatsApp. This wallet will securely hold your
                            NFA digital authentication cards, allowing you to
                            manage and access them whenever needed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
