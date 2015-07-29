$(document).ready(function(){
  sizeContent();
  $('#showMenu').click(function(e){
    if(!$(this).hasClass('active')) {
      $(this).addClass('active');
      $('#big-left-search').removeClass('open');
      $('#showSearch').removeClass('active');
      $('#big-left-menu').addClass('open');
      $('.col-fixed-300').removeClass('down-big').addClass('down-little');
    } else {
      $(this).removeClass('active');
      $('#big-left-menu').removeClass('open');
      $('.col-fixed-300').removeClass('down-little').removeClass('down-big');
    }
  });
  $('#showSearch').click(function(e){
    if(!$(this).hasClass('active')) {
      $(this).addClass('active');
      $('#big-left-menu').removeClass('open');
      $('#showMenu').removeClass('active');
      $('#big-left-search').addClass('open');
      $('.col-fixed-300').removeClass('down-little').addClass('down-big');
    } else {
      $(this).removeClass('active');
      $('#big-left-search').removeClass('open');
      $('.col-fixed-300').removeClass('down-little').removeClass('down-big');
    }
  });
  
  $('.caption').css('top',function(){
    return $(this).parents('.thumbnail').outerHeight()-($(this).children('h2').outerHeight()+$(this).children('accroche').outerHeight())-30
  });
  $('.thumbnail').hover(function(){
    $(this).children('.caption').css('transition','1s')
    $(this).children('.caption').css('top',15);
  },function(){
    $(this).children('.caption').css('top',function(){
      return $(this).parents('.thumbnail').outerHeight()-($(this).children('h2').outerHeight()+$(this).children('accroche').outerHeight())-30
    });
  });
});

$(window).resize(sizeContent);
function sizeContent() {
  $('.tab-content').height($('.col-fixed-300').height()-103);
  $('.thumbed-link').height(($('.tab-content').height()/5)-25);
  
  $('.caption').css('transition','none');
  $('.caption').css('top',function(){
    return $(this).parents('.thumbnail').outerHeight()-($(this).children('h2').outerHeight()+$(this).children('accroche').outerHeight())-30
  });
}