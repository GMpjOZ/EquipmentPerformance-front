$(function(){
    $('form').each(function (index, domEle){
        var index_op = 1;
        var add_btn_op = $(domEle).find('#add_btn_op');
        var btns = $(domEle).find('.btns');
        add_btn_op.on('click',function(){
            var insert_inputs = '<div class="inputs">' +
                                    '<label><p>操作ID</p><input type="text" name="op_id_'+index_op+'" value="" placeholder=""></label>' +
                                    '<br>' +
                                    '<label><p>设备ID</p><input type="text" name="asset_id_'+index_op+'" value="" placeholder=""></label>' +
                                    '<div class="select">' +
                                      '<div class="select_head">' +
                                          '<label>' +
                                            '<p>设备类型</p>' +
                                            '<input class="select_show" type="text" name="asset_type_'+index_op+'" value="" readonly>' +
                                            '<i class="fa fa-angle-down select_button"></i>' +
                                          '</label>' +
                                      '</div>' +
                                      '<ul class="select_sub">' +
                                          '<li>OPTION1</li><hr>' +
                                          '<li>OPTION2</li><hr>' +
                                          '<li>OPTION3</li>' +
                                      '</ul>' +
                                    '</div>' +
                                    '<label class="time"><p>操作开始时间</p><input type="text" name="op_strt_time_'+index_op+'" value="" placeholder=""></label>' +
                                    '<label class="time"><p>操作结束时间</p><input type="text" name="op_end_time_'+index_op+'" value="" placeholder=""></label>' +
                                    '<label><p>操作费用</p><input type="text" name="op_cost_'+index_op+'" value="" placeholder=""></label>' +
                                    '<div class="select">' +
                                        '<div class="select_head">' +
                                            '<label>' +
                                              '<p>操作科室</p>' +
                                              '<input class="select_show" type="text" name="op_dep_'+index_op+'" value="" readonly>' +
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
             index_op++;
        });
    });
});
