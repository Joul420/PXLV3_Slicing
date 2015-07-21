$(document).ready(function(){
  sizeContent();
  $('#showLeft').click(function(e){
    $(this).toggleClass('active');
    $('.cbp-spmenu-left').toggleClass('cbp-spmenu-open');
    $('.col-fixed-300').toggleClass('down');
  });
  /*VARIANTE HOMEPAGE*/
  $('#showLeft2').click(function(e){
    $(this).toggleClass('active');
    $('.cbp-spmenu-left').toggleClass('cbp-spmenu-open');
	$('.col-md-12').addClass('col-offset-300');
    $('.col-fixed-300').removeClass('collapse');
	/*NEEDS TO COLLAPSE WHEN RECLICKED*/
  });
  
  $('.slider-content').append('<span class="freeze-button glyphicon glyphicon-pause"></span>')
  $('.freeze-button').click(function(){$(this).parents('.card-box').toggleClass('active')})
  
  $('.caption').css('top',$('.thumbnail').outerHeight()-($('.caption h2').outerHeight()+$('.caption .accroche').outerHeight())-15);
  $('.thumbnail').hover(function(){
    $(this).children('.caption').css('transition','1s')
    $(this).children('.caption').css('top',15);
  },function(){
    $(this).children('.caption').css('top',$('.thumbnail').outerHeight()-($('.caption h2').outerHeight()+$('.caption .accroche').outerHeight())-15);
  });
});

$(window).resize(sizeContent);
function sizeContent() {
  $('.tab-content').height($('.col-fixed-300').height()-103);
  $('.thumbed-link').height(($('.tab-content').height()/5)-25);
  $('.caption').css('transition','none');
  $('.caption').css('top',$('.thumbnail').outerHeight()-($('.caption h2').outerHeight()+$('.caption .accroche').outerHeight())-15);
}