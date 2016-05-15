$(function(){

    // SELECT
    $('form').each(function (index, domEle){
        $(domEle).find('.select').each(function (index, domEle){
            var select_button = $(domEle).find('.select_head .select_button');
            var select_show = $(domEle).find('.select_head .select_show');
            var select_sub = $(domEle).find('.select_sub');
            var select_opts = select_sub.find('li');
            select_opts.each(function(index,domEle){
                $(domEle).on('click',function(){
                    select_show.val(this.innerHTML);
                    select_sub.stop(true,false).fadeOut(400);
                    select_button.removeClass('fa-angle-up').addClass('fa-angle-down');
                });
            });
            select_button.on('click',function(){
                if( select_sub.is(":hidden") ) {
                    select_sub.stop(true,false).slideDown(400);
                    $(this).removeClass('fa-angle-down').addClass('fa-angle-up');
                } else {
                    select_sub.stop(true,false).slideUp(400);
                    $(this).removeClass('fa-angle-up').addClass('fa-angle-down');
                }
            });
        });
    });

    // NAV
    $('#menu .has-sub').each(function(index,domEle){
        var first = $(domEle).find('a');
        var second = $(domEle).find('.sub');
        first.on('click',function(){
            if( second.is(":hidden") ) {
                second.stop(true,false).slideDown(400);
                second.find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
            } else {
                second.stop(true,false).slideUp(400);;
                second.find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        });
    });
});
