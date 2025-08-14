
window.setTimeout(function(){
$(".loading").fadeOut(500)
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();
},400)

$(document).ready(function(){
  $(window).load(function () {
          $(".mobile-inner-header-icon").click(function(){
            $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
            $(".mobile-inner-nav").slideToggle(250);
          });
          $(".mobile-inner-nav li").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });
          $(".mobile-inner-nav li").click(function(){
            $(this).find('dl').slideToggle(200)
          })
        });

})

$(document).ready(function(){


$('.index>*,.section1 .title').not('.section1').addClass('wow fadeInUp')
$('.section3 .videoCon .play').click(function(){
  $(this).fadeOut(200)
  $('.section3 .videoCon video').attr('controls',true)
  $('.section3 .videoCon video').get(0).play()
})

function height(){
  var sc = $(window).scrollTop();
  if (sc > 200) {
      $("body").addClass("current");
    } else {
      $("body").removeClass("current");
    }
}
height()
$(window).scroll(function () {
  height()
});



});