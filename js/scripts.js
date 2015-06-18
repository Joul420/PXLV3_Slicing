$(document).ready(function(){
  sizeContent();
  $("#showLeft").click(function(e){
    $(this).toggleClass('active');
    $('.cbp-spmenu-left').toggleClass('cbp-spmenu-open');
    $('.col-fixed-300').toggleClass('down');
  });
});

$(window).resize(sizeContent);
function sizeContent() {
  $(".tab-content").height($(".col-fixed-300").height()-103);
  $(".thumbed-link").height(($(".tab-content").height()/5)-25);
}