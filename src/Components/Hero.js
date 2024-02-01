import React from 'react'

export default function Hero() {
  return (
    <>
    <header id="rtsHeader" class="rts-header1">
        

        {/* <!--================= Banner Section Start Here =================--> */}
        <div class="banner banner1" id="home">
          <div class="swiper bannerSlide">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="banner-single banner-single-1 banner1-bg">
                  <div class="container">
                    <div class="banner-content">
                      {/* <span class="pretitle">Got Perks?</span> */}
                      <h1 className="banner-heading">
                      Get <span style={{ color: '#60ae44' }}>Perks</span> From <br />
                      Autographed Collectibles
                  </h1>
                    {/* <div class="sub-heding">
                    <p>Your access to the stars</p>
                    <p class="second-para">Unlock exclusive content and more through celebrities' autographs</p>
                    </div> */}
                      <div class="banner-btn-area">
                        <a href="#cards" class="nxt-match-btn banner-btn">
                          EXCLUSIVE CONTENT AND PRODUCTS{" "}
                          <i class="far fa-long-arrow-right ml--5"></i>
                        </a>
                        <a href="#cards" class="nxt-match-btn banner-btn bannar-btn">
                        <i class="far fa-long-arrow-right ml--5"></i>
                        <img src="/images/app-store-100.png"></img>
                       </a>
                       <a href="#cards" class="nxt-match-btn banner-btn bannar-btn">
                        <i class="far fa-long-arrow-right ml--5"></i>
                        <img src="/images/play-store-100.png"></img>
                       </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="swiper-slide">
                <div class="banner-single banner-single-1_2 banner-bg">
                  <div class="container">
                    <div class="banner-content">
                      <span class="pretitle">WELCOME TO NFA</span>
                      <h1 class="banner-heading">
                      Celebrities brand <br />
                        endorsement
                      </h1>
                      <div class="banner-btn-area">
                        <a href="#cards" class="nxt-match-btn banner-btn">
                          EXPLORE MORE{" "}
                          <i class="far fa-long-arrow-right ml--5"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div class="swiper-slide">
                <div class="banner-single banner-single-3 banner-bg">
                  <div class="container">
                    <div class="banner-content">
                      <span class="pretitle">WELCOME TO NFA</span>
                      <h1 class="banner-heading">
                        More than <br />
                        an Autograph
                      </h1>
                      <div class="banner-btn-area">
                        <a href="#cards" class="nxt-match-btn banner-btn">
                          EXPLORE MORE{" "}
                          <i class="far fa-long-arrow-right ml--5"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <!-- <div class="slider-pagination-area">
                    <div class="swiper-pagination">
                        <span class="swiper-pagination-bullet one"></span>
                        <span class="swiper-pagination-bullet two"></span>
                        <span class="swiper-pagination-bullet three"></span>
                    </div>
                </div> --> */}
          </div>
        </div>
        {/* <!--================= Banner Section End Here =================--> */}
      </header>
    </>
  )
}
