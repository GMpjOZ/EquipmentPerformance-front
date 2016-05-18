$(function(){
    $('form').each(function (index, domEle){
        var index_scrap = 1;
        var add_btn_scrap = $(domEle).find('#add_btn_scrap');
        var btns = $(domEle).find('.btns');
        add_btn_scrap.on('click',function(){
            var insert_inputs = '<div class="inputs">' +
                                    '<label><p>报废记录ID</p><input type="text" name="scrap_id_'+index_scrap+'" value="" placeholder=""></label>' +
                                    '<label class="time"><p>报废时间</p><input type="text" name="scrap_time_'+index_scrap+'" value="" placeholder=""></label>' +
                                    '<label><p>设备ID</p><input type="text" name="asset_id_'+index_scrap+'" value="" placeholder=""></label>' +
                                    '<div class="select">' +
                                        '<div class="select_head">' +
                                            '<label>' +
                                              '<p>设备类型</p>' +
                                              '<input class="select_show" type="text" name="asset_type_'+index_scrap+'" value="" readonly>' +
                                              '<i class="fa fa-angle-down select_button"></i>' +
                                            '</label>' +
                                        '</div>' +
                                        '<ul class="select_sub">' +
                                            '<li>OPTION1</li><hr>' +
                                            '<li>OPTION2</li><hr>' +
                                            '<li>OPTION3</li>' +
                                        '</ul>' +
                                    '</div>' +
                                '</div>';
            $(insert_inputs).insertBefore(btns);
            index_scrap++;
       });
   });
});
