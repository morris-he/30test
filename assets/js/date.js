/*
created by morris
2019/07/26
 */

//日期选择器
var pick_date;
$("#my-input").calendar({
    minDate:getStartDate(-1),
    maxDate: getStartDate(6),
    dateFormat:'mm/dd',
    onChange:function(p, values, displayValues){
        pick_date = values[0]
        console.log(pick_date)
        //在日历选择对应日期出现高亮
        for(var i=0;i<7;i++){
            var change_date = document.getElementsByClassName('date_num')[i].innerHTML
            if(change_date == pick_date){
                $('.date_num').eq(i).parent('.date_message').addClass('on').siblings().removeClass('on')
                $('.pick_time').eq(i).addClass('show').siblings().removeClass('show')
            }
        }
    }
});

//获取从今日往后七天日历函数 如：2019-07-26
function getStartDate(n){ //n为你要传入的参数，当前为0，前一天为-1，后一天为1
    var date = new Date() ;
    var year,month,day ;
    date.setDate(date.getDate()+n);
    year = date.getFullYear();
    month = date.getMonth()+1;
    day = date.getDate() ;
    s = year + '-' + ( month < 10 ? ( '0' + month ) : month ) + '-' + ( day < 10 ? ( '0' + day ) : day) ;
    return s;
}

//获取当前的时间往后七天 如：07/26
function getAfterDate(n){ //n为你要传入的参数，当前为0，前一天为-1，后一天为1
    var date = new Date() ;
    var year,month,day ;
    date.setDate(date.getDate()+n);
    month = date.getMonth()+1;
    day = date.getDate() ;
    y= ( month < 10 ? ( '0' + month ) : month ) + '/' + ( day < 10 ? ( '0' + day ) : day);
    return y;
}
for(var i=0;i<7;i++){
    var date_num = document.getElementsByClassName('date_num')[i]
    var new_date = getAfterDate(i)
    date_num.innerHTML = new_date
}

// 获取对应星期
function getWeekDate(n) {
    var date = new Date();
    date.setDate(date.getDate()+n)
    var day= date.getDay()
    var weeks = new Array("周天", "周一", "周二", "周三", "周四", "周五", "周五");
    var w = weeks[day];
    return w;
}
for(var i=0;i<7;i++){
    var date_text = document.getElementsByClassName('date_text')[i]
    var new_week = getWeekDate(i)
    date_text.innerHTML = new_week
    document.getElementsByClassName('date_text')[0].innerHTML = '今天'
    document.getElementsByClassName('date_text')[1].innerHTML = '明天'
}

//点击切换选项卡
$(function () {
    $('.date_message').click(function () {
        $(this).addClass('on').siblings().removeClass('on')
        var index = $(this).index()
        $('.pick_time').eq(index).addClass('show').siblings().removeClass('show')
    })
})
