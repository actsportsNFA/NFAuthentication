import React from 'react'
export default function NewsLetter() {
    return (
      <>
      <div class="rts-newsletter-section" id="contact">
<div class="container">
  <div class="newsletter-inner">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="newsletter-box">
          <div class="shape">
            <img src="./images/team/shape.png" alt="" />
          </div>
          <div class="section-title-area section-title-area1 text-start mb--50">
            <h1 class="section-title">SUBSCRIBE NEWSLETTER</h1>
            <p>
              Game Changer: Stay ahead of the game with our NFA
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
                required/>
            </div>
            <div class="button">
              <button type="submit" class="btn">
                SUBSCRIBE <i class="fal fa-long-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{/* <!--================= Newsletter Section End Here =================--> */}

      </>
       )
    }
    
