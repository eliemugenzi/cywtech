$(document).ready(()=>{
  $('.parallax').parallax();
  //$('.carousel.carousel-slider').carousel({fullWidth:true});

  let options={
    scrollOffset:100
  }
  $('.scrollspy').scrollSpy(options);
  $('.slider').slider();
  $(".button-collapse").sideNav();
})
