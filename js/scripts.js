$(document).ready(function(){
  sizeContent();
  $('#showLeft').click(function(e){
    $(this).toggleClass('active');
    $('.cbp-spmenu-left').toggleClass('cbp-spmenu-open');
    $('.col-fixed-300').toggleClass('down');
  });
  
  $('.slider-content').append('<span class="freeze-button glyphicon glyphicon-pause"></span>')
  $('.freeze-button').click(function(){$(this).parents('.card-box').toggleClass('active')})
});

$(window).resize(sizeContent);
function sizeContent() {
  $('.tab-content').height($('.col-fixed-300').height()-103);
  $('.thumbed-link').height(($('.tab-content').height()/5)-25);
}