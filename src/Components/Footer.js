import React from 'react'

export default function Footer() {
  return (
   <>
   
   <div class="footer footer1">
        <div class="container">
            <div class="footer-inner">
                <div class="row">
                    <div class="col-xl-4 col-md-6">
                        <div class="footer-widget">
                            <div class="footer-logo"><img src="./images/logo-re.png" alt="footer-logo"/>
                            </div>
                            <p class="footer-text">NFA is a powerful tool that allows athletes to authenticate their sports collectibles using blockchain technology.</p>
                            <div class="social-links">
                                <a href="https://www.instagram.com/nfauthentication/" target='_blank' class="platform"><i class="fab fa-instagram"></i></a>
                                <a href="https://twitter.com/nfacollection?s=20" target='_blank' class="platform"><i class="fab fa-twitter"></i></a>
                             
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 col-sm-6">
                        <div class="footer-widget">
                            <h3 class="footer-widget-title"><span class="decorator"></span> ESSENTIAL LINKS</h3>
                            <ul class="widget-items cata-widget" style={{marginLeft:'40px'}}>
                                <li class="widget-list-item"><a href="#home">Home</a></li>
                                <li class="widget-list-item"><a href="#cards">Benefits</a></li>
                                <li class="widget-list-item"><a href="#about">About</a></li>
                                <li class="widget-list-item"><a href="#process">Process</a></li>
                                <li class="widget-list-item"><a href="#sponsor">Sponsors</a></li>
                                <li class="widget-list-item"><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                        <div class="footer-widget address-widget">
                            <h3 class="footer-widget-title"><span class="decorator"></span> GET IN TOUCH</h3>
                            <ul>
                                <li class="widget-list-item"><i class="fas fa-envelope-open"></i><a
                                        href="mailto:contact@nfauthentication.io">contact@nfauthentication.io</a></li>
                                
                                <li class="widget-list-item"><i class="fas fa-map-marker-alt"></i> <span>Miami, FL</span></li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
        <div class="footer-bottom-area">
            <div class="container">
                <div class="bottom-area-inner">
                    <span class="copyright">© Copyright 2023. All Rights Reserved By NFA </span>
                    <div class="footer-bottom-links">
             
                        <a href="#faq">FAQ</a>
      
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
