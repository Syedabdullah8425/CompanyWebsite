const firebaseConfig = {
    apiKey: "AIzaSyAK-2ZZ1pLbecxygnZQcA7viUfVWM-8iOc",
    authDomain: "i-debuggedpro.firebaseapp.com",
    databaseURL: "https://i-debuggedpro-default-rtdb.firebaseio.com",
    projectId: "i-debuggedpro",
    storageBucket: "i-debuggedpro.appspot.com",
    messagingSenderId: "636652079611",
    appId: "1:636652079611:web:02e764cd9f58fd50f8635e"
  };
  //initialzining Firebase
  firebase.initializeApp(firebaseConfig);

//reference to project
var qoutationDB = firebase.database().ref('quotations');
document.getElementById('qoute').addEventListener('submit', submitForm);



function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("form-floating-1");
    var emailId = getElementVal("form-floating-2");
    var service = getElementVal("floatingSelect");
    var description = getElementVal("form-floating-3");

    saveQuote(name, emailId, service, description);
    
    //enable Alert
    document.querySelector('.alert').style.display = 'block';

    //remove alert after 3 seconds
setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
}, 3000);

//reset the form
document.getElementById('qoute').reset();

}

const saveQuote = (name, emailId, service, description) => {
    var newForm = qoutationDB.push();
    
    newForm.set({
        name : name,
        emailId : emailId,
        service : service,
        description : description,
    })
}

var getElementVal = (id) => {
   return document.getElementById(id).value;
}

(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
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
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

