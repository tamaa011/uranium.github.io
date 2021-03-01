$(".me").click(function(){
//    $(".work-examples").removeClass("slideInRight");
//    $(".work-examples").addClass("slideOutRight");
//    $(".main-page").removeClass("bounceOut");
//    $(".main-page").addClass("bounceIn");
    $(".main-page").removeClass("hidden");
    $(".me i").addClass("active");
    $(".works i").removeClass("active");
    $(".cv-cv i").removeClass("active");
    $(".contact-c i").removeClass("active");
    $(".work-examples").addClass("hidden");
    $(".cv").addClass("hidden");
    $(".contact").addClass("hidden");
  });

$(".works").click(function(){
//    $(".work-examples").removeClass("slideOutRight");
//    $(".main-page").addClass("bounceOut");
//    $(".work-examples").addClass("slideInRight");
    
    $(".cv").addClass("hidden");
    $(".contact").addClass("hidden");
    $(".works i").addClass("active");
    $(".me i").removeClass("active");
    $(".cv-cv i").removeClass("active");
    $(".contact-c i").removeClass("active");
    $(".main-page").addClass("hidden");
    $(".work-examples").removeClass("hidden");
  });

$(".cv-cv").click(function(){
//     $(".cv").addClass("bounce");
    $(".cv").removeClass("hidden");
    $(".main-page").addClass("hidden");
    $(".work-examples").addClass("hidden");
    $(".contact").addClass("hidden");
    $(".cv-cv i").addClass("active");
    $(".works i").removeClass("active");
    $(".me i").removeClass("active");
    $(".contact-c i").removeClass("active");
    
  });

$(".contact-c").click(function(){
    $(".main-page").addClass("hidden");
    $(".work-examples").addClass("hidden");
    $(".cv").addClass("hidden");
    $(".contact-c i").addClass("active");
    $(".me i").removeClass("active");
    $(".work i").removeClass("active");
    $(".cv-cv i").removeClass("active");
    $(".contact").removeClass("hidden");
  });

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(document).ready(function () {
  setInterval(function(){ $("#text-one").toggleClass("hidden"); }, 2200);
  setInterval(function(){ $("#text-two").toggleClass("hidden"); }, 2200);
    });