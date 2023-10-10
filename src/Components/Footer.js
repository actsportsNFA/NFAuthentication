import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

export default function Footer() {
  return (
    <>
      <div class="footer footer1">
        <div class="container">
          <div class="footer-inner">
            <div class="row">
              <div class="col-xl-4 col-md-6">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <img src="./images/Updated-Logo-beta.png" alt="footer-logo" />
                  </div>
                  <p class="footer-text">
                    NFA is a powerful tool that allows celebrities to
                    authenticate their autographed collectibles using blockchain
                    technology. Meaning fans can trust that the collectibles
                    they purchase are authentic and verified by stars.
                  </p>
                  <div class="social-links">
                    <a
                      href="https://www.instagram.com/nfauthentication/"
                      target="_blank"
                      class="platform"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://twitter.com/nfacollection?s=20"
                      target="_blank"
                      class="platform"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6 col-sm-6">
                <div class="footer-widget">
                  <h3 class="footer-widget-title">
                    <span class="decorator"></span> ESSENTIAL LINKS
                  </h3>
                  <ul class="widget-items cata-widget">
                    <li class="widget-list-item">
                      <CustomLink to="/" id="#home">
                        Home
                      </CustomLink>
                    </li>
                    <li class="widget-list-item">
                      <CustomLink to="/" id="#cards">
                        Benefits
                      </CustomLink>
                    </li>
                    <li class="widget-list-item">
                      <CustomLink to="/" id="#about">
                        About
                      </CustomLink>
                    </li>
                    <li class="widget-list-item">
                      <CustomLink to="/" id="#process">
                        Process
                      </CustomLink>
                    </li>
                    <li class="widget-list-item">
                      <CustomLink to="/" id="#sponsor">
                        Sponsors
                      </CustomLink>
                    </li>
                    <li class="widget-list-item">
                      <CustomLink to="/" id="#contact">
                        Contact
                      </CustomLink>
                    </li>
                    <li class="widget-list-item">
                      <CustomLink to="/" id="#faq">
                        FAQ
                      </CustomLink>
                    </li>
                    <li class="widget-list-item">
                      <CustomLink to="/privacy-policy" id="root">
                        Privacy & Policy
                      </CustomLink>
                    </li>
                    <li class="widget-list-item">
                      <CustomLink to="/terms-condition" id="root">
                        Terms & Conditions
                      </CustomLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-md-6">
                <div class="footer-widget address-widget">
                  <h3 class="footer-widget-title">
                    <span class="decorator"></span> GET IN TOUCH
                  </h3>
                  <ul>
                    <li class="widget-list-item">
                      <i class="fas fa-envelope-open"></i>
                      <a href="mailto:contact@nfauthentication.io">
                        contact@nfauthentication.io
                      </a>
                    </li>

                    <li class="widget-list-item">
                      <i class="fas fa-map-marker-alt"></i>{" "}
                      <span>
                        150 SE 2nd Ave, Miami, FL 33131, United States
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom-area">
          <div class="container">
            <div class="bottom-area-inner ">
              <span class="copyright">
                © Copyright 2023. All Rights Reserved By NFA{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
