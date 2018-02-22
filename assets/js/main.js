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


var options = [
  {selector: '#partners', offset: 500, callback: function(el) {
    Materialize.fadeInImage($(el));
  } },
  {selector: '#about', offset: 500, callback: function(el) {
    Materialize.fadeInImage($(el));
  } },
  {selector: '#events', offset: 500, callback: function(el) { 
    Materialize.fadeInImage($(el));
  } }];
Materialize.scrollFire(options);
        