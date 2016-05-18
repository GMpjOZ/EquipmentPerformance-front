$(function(){
    $('form').each(function (index, domEle){
        var index_rep = 1;
        var add_btn_rep = $(domEle).find('#add_btn_rep');
        var btns = $(domEle).find('.btns');
        add_btn_rep.on('click',function(){
            var insert_inputs = '<div class="inputs">' +
                                    '<label><p>记录ID</p><input type="text" name="repair_id_'+ index_rep + '" value="" placeholder=""></label>' +
                                    '<br>' +
                                    '<label><p>设备ID</p><input type="text" name="asset_id_'+ index_rep + '" value="" placeholder=""></label>' +
                                    '<div class="select">' +
                                        '<div class="select_head">' +
                                            '<label>' +
                                              '<p>设备类型</p>' +
                                              '<input class="select_show" type="text" name="asset_type_'+ index_rep + '" value="" readonly>' +
                                              '<i class="fa fa-angle-down select_button"></i>' +
                                            '</label>' +
                                        '</div>' +
                                        '<ul class="select_sub">' +
                                            '<li>OPTION1</li><hr>' +
                                            '<li>OPTION2</li><hr>' +
                                            '<li>OPTION3</li>' +
                                        '</ul>' +
                                    '</div>' +
                                    '<label class="time"><p>维修开始时间</p><input type="text" name="rep_strt_time_'+ index_rep + '" value="" placeholder=""></label>' +
                                    '<label class="time"><p>维修结束时间</p><input type="text" name="rep_end_time_'+ index_rep + '" value="" placeholder=""></label>' +
                                    '<label><p>维修费用</p><input type="text" name="rep_cost_'+ index_rep + '" value="" placeholder=""></label>' +
                                    '<label class="time"><p>申报时间</p><input type="text" name="decl_time_'+ index_rep + '" value="" placeholder=""></label>' +
                                '</div>';
             $(insert_inputs).insertBefore(btns);
             index_rep++;
        });
    });
});
