$(function(){
    $('form').each(function (index, domEle){
        var index_dept = 1;
        var add_btn_dept = $(domEle).find('#add_btn_dept');
        var btns = $(domEle).find('.btns');
        add_btn_dept.on('click',function(){
            var insert_inputs = '<div class="inputs">' +
                '<div class="select">' +
                    '<div class="select_head">' +
                        '<label>' +
                          '<p>科室</p>' +
                          '<input class="select_show" type="text" name="dept_'+ index_dept + '" value="" readonly>' +
                          '<i class="fa fa-angle-down select_button"></i>' +
                        '</label>' +
                    '</div>' +
                    '<ul class="select_sub">' +
                        '<li>OPTION1</li><hr>' +
                        '<li>OPTION2</li><hr>' +
                        '<li>OPTION3</li>' +
                    '</ul>' +
                '</div>' +
                '<label class="time"><p>科室工作时长</p><input type="text" name="dept_time_'+ index_dept + '" value="" placeholder=""></label>' +
            '</div>'; 
            $(insert_inputs).insertBefore(btns);
            index_dept++;
       });
   });
});
