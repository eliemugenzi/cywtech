$(document).ready(()=>{
  $('.parallax').parallax();
  //$('.carousel.carousel-slider').carousel({fullWidth:true});

  let options={
    scrollOffset:100
  }
  $('.scrollspy').scrollSpy(options);
  $('.slider').slider();
  $(".button-collapse").sideNav();

  $('#more1').slideUp();
  $('#more2').slideUp();
  $('#more3').slideUp();
  $('.scrollspy').scrollSpy(options);
  $('.slider').slider();
  $(".button-collapse").sideNav();

  $('#toggle1').click(()=>{
    $('#more1').slideToggle(500);
  })
  $('#toggle2').click(()=>{
    $('#more2').slideToggle(500);
  })
  $('#toggle3').click(()=>{
    $('#more3').slideToggle(500);
  })
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
        