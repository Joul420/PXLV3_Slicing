$(document).ready(function(){
  $("#showLeft").click(function(e){
    $(this).toggleClass('active');
    $('.cbp-spmenu-left').toggleClass('cbp-spmenu-open');
    $('.col-image-cover').toggleClass('down');
  });
});
