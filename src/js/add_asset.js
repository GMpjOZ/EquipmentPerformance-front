$(function(){

    $('form').each(function (index, domEle){
        var index = 1;
        var add_btn_asset = $(domEle).find('#add_btn_asset');
        var btns = $(domEle).find('.btns');
        var insert_inputs = '<div class="inputs">' +
            '<label><p>设备id</p><input type="text" name="asset_id_'+index+'" value="" placeholder=""></label>' +
            '<label><p>设备名称</p><input type="text" name="asset_name_'+index+'" value="" placeholder=""></label>' +
            '<div class="select">' +
                '<div class="select_head">' +
                    '<label>' +
                      '<p>设备类型</p>' +
                      '<input class="select_show" type="text" name="asset_type_'+index+'" value="" readonly> ' +
                      ' <i class="fa fa-angle-down select_button"></i>' +
                    '</label>' +
                '</div>' +
                '<ul class="select_sub">' +
                    '<li>OPTION1</li><hr>' +
                    '<li>OPTION2</li><hr>' +
                    '<li>OPTION3</li>' +
                '</ul>' +
            '</div>' +
            '<div class="select">' +
              '<div class="select_head">' +
                  '<label>' +
                    '<p>所属科室</p>' +
                    '<input class="select_show" type="text" name="asset_dept_'+index+'" value="" readonly> ' +
                    ' <i class="fa fa-angle-down select_button"></i>' +
                  '</label>' +
              '</div>' +
              '<ul class="select_sub">' +
                  '<li>OPTION1</li><hr>' +
                  '<li>OPTION2</li><hr>' +
                  '<li>OPTION3</li>' +
              '</ul>' +
            '</div>' +
        '</div>';
        add_btn_asset.on('click',function(){
             $(insert_inputs).insertBefore(btns);
             index++;
        });
    });
});
