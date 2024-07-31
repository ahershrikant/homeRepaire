(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 5);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    
})(jQuery);


function styleElement() {
    let element = document.getElementById('text-style');
    element.style.animationPlayState = 'running';
}
  
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    // Log form data to console (you can handle the form data as needed)
    console.log('Name:', formData.get('name'));
    console.log('Email:', formData.get('email'));
    console.log('Subject:', formData.get('subject'));
    console.log('pnum:', formData.get('number'));
    console.log('age:', formData.get('age'));
    console.log('message:', formData.get('message'));

    alert('Form submitted successfully!');
}
  const ndate= new Date();
  document.getElementById('date-info').innerHTML=ndate.toDateString();
  
  function imge(){
   let body=document.getElementsByTagName('body')[0];
    body.classList.add('obj');
  }
 imge();

 function onname(event) {
    const text = document.getElementById('t-text');
    text.style.color = '#2275c8';

}
function onname1(event) {
    const text = document.getElementById('t-text');
    text.style.color = 'white';
}


