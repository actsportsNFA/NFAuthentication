import React, { useEffect } from 'react'

export default function ScrollToTop() {
    const $ = window.$
    useEffect(() => {
        var btn = $('.scroll-top-btn');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('jumpTop');
            } else {
                btn.removeClass('jumpTop');
            }
        });
    
        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
    
        $("#nav ul li a[href^='#']").on('click', function (e) {
            e.preventDefault();
            var hash = this.hash;
    
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        });
    
        $("#nav div div a[href^='#']").on('click', function (e) {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
    
        });
    
        $("#nav ul li a[href^='#']").on('click', function (e) {
            e.preventDefault();
    
            // store hash
            var hash = this.hash;
    
            // animate
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
    
        });
    
        $("#nav div div a[href^='#']").on('click', function (e) {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        });
      }, []);
    
   
  return (
    <div class="scroll-top-btn scroll-top-btn1"><i class="fas fa-angle-up arrow-up"></i><i
            class="fas fa-circle-notch"></i></div>
  )
}
