import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";


export default function Navbar() {
    const Swiper =window.Swiper 
        useEffect(() => {
          new Swiper(".bannerSlide", {
            slidesPerView: 1,
		spaceBetween: 0,
		slidesPerGroup: 1,
		speed: 1300,
		loop: true,
		loopFillGroupWithBlank: true,
        fadeEffect:{
            crossFade:true
        },
		virtualTranslate: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},


		effect: "fade",
		centeredSlides: false,
		breakpoints: {
			1500: {
				slidesPerView: 1,
			},
			991: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			}
		},
		navigation: {
			nextEl: ".slide-next",
			prevEl: ".slide-prev",
		},
		pagination: {
			el: '.swiper-pagination',
			   type: 'bullets',
			clickable:'true'
		  }
          });
      
    
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
			}
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: ".slide-next",
			prevEl: ".slide-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar"
		},
	});  
        }, [Swiper]);

  return (
    <>
      <div id="rts__preloader">
        <div class="main-fader responsive-height-comments">
          <div class="loader">
           
            {/* <img
              class="main_logo"
              src="./images/Logo-re.png"
              alt="nfa-logo"
        
            /> */}
            <video  width="700" height="700" loop muted autoPlay>
                      <source src="./images/logo3.mp4"  type="video/mp4"/>
                  </video>
         
          </div>
        </div>
      </div>
      {/* <!--================= Preloader End Here =================--> */}

      <div class="anywere anywere-home"></div>

      {/* <!--================= Header Section Start Here =================--> */}
      <header id="rtsHeader" class="rts-header1">
        <div class="navbar-sticky">
          <div class="navbar-part navbar-part1">
            <div class="container">
              <div class="navbar-inner">
                <Link to="/" class="logo">
                  <img
                    class="main_logo"
                    src="./images/Updated-Logo-beta.png"
                    alt="sportius-logo"
                  />
                </Link>
                <Link  to="/" class="logo-sticky">
                  <img
                    class="main_logo"
                    src="./images/logo-re.png"
                    alt="nfa-logo"
                  />
                </Link>
                <div class="rts-menu">
                  <nav class="menus menu-toggle">
                    <ul class="nav__menu">
                      <li class="has-dropdown">
                        {/* <Link class="menu-item" to="/#home">
                          Home
                        </Link> */}
                        <CustomLink class="menu-item" to="/" id="home">
                          Home
                        </CustomLink>
                        {/* <!-- <ul class="dropdown-ul">
                                            <li class=""><a class="dropdown-link active" href="index-2.html">Homepage
                                                    1</a>
                                            </li>
                                            <li class="dropdown-li"><a class="dropdown-link"
                                                    href="index-two.html">Homepage
                                                    2</a></li>
                                            <li class="dropdown-li"><a class="dropdown-link"
                                                    href="index-three.html">Homepage 3</a></li>
                                        </ul> --> */}
                      </li>
                      <li>
                        <CustomLink class="menu-item" to="/" id="cards">
                          BENEFITS
                        </CustomLink>
                      </li>
                      <li class="has-dropdown">
                        <CustomLink class="menu-item" to="/" id="about">
                          ABOUT
                        </CustomLink>
                        {/* <!-- <ul class="dropdown-ul mega-dropdown">
                                            <li class="mega-dropdown-li">
                                                <ul class="mega-dropdown-ul">
                                                    <li class="dropdown-li"><a class="dropdown-link"
                                                            href="team.html">Team Details</a>
                                                    </li>
                                                    <li class="dropdown-li"><a class="dropdown-link"
                                                            href="team-details.html">Player Details</a>
                                                    </li>
                                                    <li class="dropdown-li"><a class="dropdown-link"
                                                            href="history.html">History</a>
                                                    </li>
                                                    <li class="dropdown-li"><a class="dropdown-link"
                                                            href="awards.html">Awards</a>
                                                    </li>
                                                    <li class="dropdown-li"><a class="dropdown-link"
                                                            href="faq.html">FAQ</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mega-dropdown-li">
                                                <ul class="mega-dropdown-ul">
                                                    <li class="dropdown-li"><a class="dropdown-link"
                                                            href="gallery.html">Gallery</a>
                                                    </li>
                                                    <li class="dropdown-li"><a class="dropdown-link"
                                                            href="event.html">Event</a>
                                                    </li>
                                                    <li class="dropdown-li"><a class="dropdown-link"
                                                            href="event-details.html">Event Details</a>
                                                    </li>
                                                    <li class="dropdown-li"><a class="dropdown-link"
                                                            href="error.html">Error</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mega-dropdown-li">
                                                <ul class="mega-dropdown-ul">
                                                    <li class="dropdown-li"><a class="dropdown-link"
                                                            href="match-schedule.html">Match Schedule</a>
                                                    </li>
                                                    <li class="dropdown-li"><a class="dropdown-link"
                                                            href="match-result.html">Match
                                                            Result</a>
                                                    </li>
                                                    <li class="dropdown-li"><a class="dropdown-link"
                                                            href="league-standings.html">Point Table</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul> --> */}
                      </li>

                      <li class="has-dropdown">
                        <CustomLink class="menu-item" to="/" id="process">
                          Process
                        </CustomLink>
                        {/* <!-- <ul class="dropdown-ul">
                                            <li class="dropdown-li"><a class="dropdown-link" href="blog.html">News</a>
                                            </li>
                                            <li class="dropdown-li"><a class="dropdown-link"
                                                    href="blog-details.html">News
                                                    Details</a></li>
                                        </ul> --> */}
                      </li>
                      <li class="has-dropdown">
                        <CustomLink class="menu-item" to="/" id="#sponsor">
                          Brands
                        </CustomLink>
                        {/* <!-- <ul class="dropdown-ul">
                                            <li class="dropdown-li"><a class="dropdown-link" href="shop.html">Shop</a>
                                            </li>
                                            <li class="dropdown-li"><a class="dropdown-link"
                                                    href="product-details.html">Product Details</a></li>
                                            <li class="dropdown-li"><a class="dropdown-link" href="cart.html">Cart</a>
                                            </li>
                                            <li class="dropdown-li"><a class="dropdown-link"
                                                    href="checkout.html">Checkout</a></li>
                                            <li class="dropdown-li"><a class="dropdown-link" href="account.html">My
                                                    Account</a></li>
                                            <li class="dropdown-li"><a class="dropdown-link" href="thank-you.html">Thank
                                                    you</a></li>
                                        </ul> --> */}
                      </li>
                      <li>
                        <CustomLink class="menu-item" to="/" id="#contact">
                          Contact
                        </CustomLink>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="header-action-items header-action-items1">
                  {/* <!-- <div class="search-part">
                                <div class="search-icon action-item icon"><i class="rt-search"></i></div>
                                <div class="search-input-area">
                                    <div class="container">
                                        <div class="search-input-inner">
                                            <select class="custom-select select-hidden">
                                                <option value="hide">All Catagorys</option>
                                                <option value="all">All</option>
                                                <option value="league">League</option>
                                                <option value="club">Club</option>
                                                <option value="team">Team</option>
                                                <option value="player">Player</option>
                                                <option value="match">Match</option>
                                                <option value="score">Score</option>
                                            </select>
                                            <div class="input-div">
                                                <div class="search-input-icon"><i class="rt-search mr--10"></i></div>
                                                <input id="searchInput1" class="search-input" type="text"
                                                    placeholder="Search by keyword or #">
                                            </div>
                                            <div class="search-close-icon"><i class="rt-xmark"></i></div>
                                        </div>
                                    </div>
                                </div> --> */}
                  <a href="https://nfauthentication.com/" class="more-btn">
                    JOIN NOW <i class="fal fa-long-arrow-right"></i>
                  </a>
                </div>
                {/* <!-- <div class="cart action-item">
                                <div class="cart-nav">
                                    <div class="basket-icon cart-icon icon"><a href="#0"><i
                                                class="fal fa-shopping-basket"></i></a></div>
                                </div>
                            </div>
                        </div>
                        <a class="hamburger-menu aitem d-block">
                            <div class="hamburger-menu-inner">
                                <span></span>
                                <span class=""></span>
                                <span></span>
                            </div>
                        </a> --> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!--================= Banner Section Start Here =================--> */}
    
        {/* <!--================= Banner Section End Here =================--> */}
      </header>
    </>
  );
}
