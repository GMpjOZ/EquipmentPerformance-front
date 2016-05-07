window.onload = function() {

  // SELECT
  $('#i_select').on('click',function(){
    if( $("#sub").css("display") == 'none' ) {
      $('#sub').stop(true,false).slideDown(400);
      $(this).removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
      $('#sub').stop(true,false).slideUp(400);
      $(this).removeClass('fa-angle-up').addClass('fa-angle-down');
    }
  });
  var lis = $('#sub li');
  for( var i=0; i<lis.length; i++ ) {
    lis[i].onclick =  function(){
      $('#show').val(this.innerHTML);
      $('#sub').stop(true,false).fadeOut(400);
    };
  }

  // NAV

  $('#menu .has-sub > a').on('click',function(){
    
    if( $(this).next().css("display") == 'none' ) {
      $(this).next().stop(true,false).slideDown(400);
      $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
      $(this).next().stop(true,false).slideUp(400);
      $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
  })
}
