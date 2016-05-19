$(function(){

    // SELECT
    $('form').each(function(index,domEle){
        $(domEle).hide();
    });
    $('form').first().show();
    $('#tab').on('click', function(e) {
        var e_index = $(this).find('li').index($(e.target));
        console.log(e_index);
        $(this).find('li').each(function(index,domEle){
            $(domEle).removeClass('active');
        });
        $('form').each(function(index,domEle){
            $(domEle).hide();
        });

        $('form').eq(e_index).show();
        $(e.target).addClass('active');
    });


    $('#all_forms').on('click', function(e) {
        if( $(e.target).is(".select_button") ) {
            var select_head = $(e.target).parents('.select_head');
            var select_show = $(e.target).siblings('.select_show');
            var select_sub = select_head.siblings('.select_sub');
            var select_opts = select_sub.find('li');
            if( select_sub.is(":hidden") ) {
                select_sub.stop(true,false).slideDown(400);
                $(e.target).removeClass('fa-angle-down').addClass('fa-angle-up');
            } else {
                select_sub.stop(true,false).slideUp(400);
                $(e.target).removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        }
        if( $(e.target).is(".select_sub li") ) {
            var select_sub = $(e.target).parent();
            var select_head = select_sub.siblings('.select_head');
            var select_show = select_head.find('.select_show');
            var select_button = select_show.siblings('.select_button');
            select_show.val($(e.target).html());
            select_sub.stop(true,false).fadeOut(400);
            select_button.removeClass('fa-angle-up').addClass('fa-angle-down');
        }
    });


    $('form').each(function (index, domEle){
        $('.index_form').find('.inputs').each(function (index, domEle){
            $(domEle).find('.select').each(function(index, domEle){
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
                        console.log('s');
                        select_sub.stop(true,false).slideDown(400);
                        $(this).removeClass('fa-angle-down').addClass('fa-angle-up');
                    } else {
                        select_sub.stop(true,false).slideUp(400);
                        $(this).removeClass('fa-angle-up').addClass('fa-angle-down');
                    }
                });
            });
        });
    });

    // NAV
    var link = $('#menu').find('a');
    $('#menu .has-sub').each(function(index,domEle){
        var first = $(domEle).children('p');
        var second = $(domEle).find('.sub');
        first.on('click',function(){
            if( second.is(":hidden") ) {
                second.stop(true,false).slideDown(400);
                first.find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
            } else {
                second.stop(true,false).slideUp(400);
                first.find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        });
    });
    function aa(){
        $('#menu').find('a').each(function(index, domEle){
            if($(domEle).hasClass('active')){
                $(domEle).parents('.sub').stop(true,false).show();
            }
        });
    };
    aa();

    $('#warning').find('button').on('click', function(){
        $('#warning').hide();
    })
});
