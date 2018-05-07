/**
 * Created by Rose on 2018/4/21.
 */
var load = 0;
var clearTime1;
var clearTime2;
var yearsOld = 0; //年龄
var number = 1; //第几题
var yearArr = [9, 9, 8, 7, 4];
var imgArr = ['http://s.flyfinger.com/picRepo/O/xindiantu/images/4.png', 'http://s.flyfinger.com/picRepo/O/xindiantu/images/1@2x.png', 'http://s.flyfinger.com/picRepo/O/xindiantu/images/2@2x.png', 'http://s.flyfinger.com/picRepo/O/xindiantu/images/3@2x.png', 'http://s.flyfinger.com/picRepo/O/xindiantu/images/5@2x.png']
var year = ['0~3', '4~7', '8~14', '15~18', '19~22', '23~27', '28~31', '32~40', '40+'];
var yearData = []; //年龄段数组
var happyData = []; //幸福度数组
var happyArr = [];
var question = [
    {
        num: 1,
        year: '0-3',
        title: '虽然没啥记忆，但好像挺开心',
        anwser: ['衣来伸手，饭来张口', '妈还是亲妈', '我可能失忆了', '被逼学走路', '叫妈妈不应，叫爸爸不灵', '我不想提起', '满满的美好回忆']
    },
    {
        num: 2,
        year: '4-7',
        title: '熊孩子诞生了',
        anwser: ['皮一下就很开心了', '冒着被揍的风险还是要皮一下', '皮一下不存在的', '被揍到不敢皮', '皮不皮都要挨揍', '我不想提起', '满满的美好回忆']
    },
    {
        num: 3,
        year: '8-14',
        title: '“别人家的孩子”',
        anwser: ['幻想天上下刀子停课一天', '数学老师忘留作业', '学校里的路人甲', '老师说“再讲十分钟”', '体育老师又生病了', '我不想提起', '满满的美好回忆']
    },
    {
        num: 4,
        year: '15-18',
        title: '“上学”是我的劲敌',
        anwser: ['ta做了我的同桌', '收获意外的假期', '从路人甲变成了路人乙', '班主任总是“暗中观察”', '五年高考 三年模拟', '我不想提起', '满满的美好回忆']
    },
    {
        num: 5,
        year: '18-22',
        title: '白天不懂夜的黑',
        anwser: ['光明正大的谈恋爱', '逃课从不点名', '带饭、打水统统不落', '一逃课就点名', '寝室四年唯一单身狗', '我不想提起', '满满的美好回忆']
    },
    {
        num: 6,
        year: '23-26',
        title: '“别人家孩子”又来了',
        anwser: ['工资在手，对象我有', '睡到自然醒', '“差不多”的人生', '相不完亲', '别人家孩子都是人生赢家', '我不想提起', '满满的美好回忆']
    },
    {
        num: 7,
        year: '27-31',
        title: '感觉渐渐油腻',
        anwser: ['生活不止有眼前的苟且', '用最贵的眼霜，熬最晚的夜', '地铁大军中的一员', '被逼婚', '永远跟不上的房价', '我不想提起', '满满的美好回忆']
    },
    {
        num: 8,
        year: '32-40',
        title: '人到中年不得已，保温杯里泡枸杞',
        anwser: ['不用养生', '一堆朋友一起浪', '工资还够养家', '老板还是你老板', '还是单身', '我不想提起', '满满的美好回忆']
    },
    {
        num: 9,
        year: '40+',
        title: '保卫发际线',
        anwser: ['老来俏', '平淡是真', '上有老下有小', '岁月是把杀猪刀', '感觉身体被掏空', '我不想提起', '满满的美好回忆']
    },
]


$(function () {
    loading();
    share()
    /*if(is_weixn()){
        $('#musicfx').play();
    }*/
    /* $('.logo').load(function () {
         document.getElementById('musicfx').play();
     })*/
    $('body').one('touchstart', function () {
        document.getElementById('musicfx').play();
    })

    var random = Math.ceil(Math.random() * 5);
    $('.end-word').attr('src', imgArr[random - 1]);
    var aa = 1;

    setTimeout(function () {
        doudong()
    }, 1200)

    setInterval(function () {
        if (aa == 1) {
            $('.bgs:even').css({
                'transform': 'translateX(-3px)'
            })
            $('.bgs:odd').css({
                'transform': 'translateX(3px)'
            })
            aa = 2
            setTimeout(function () {
                $('.bgs:even').css({
                    'transform': 'translateX(0px)'
                })
                $('.bgs:odd').css({
                    'transform': 'translateX(0px)'
                })
                aa = 1
            }, 50)
        }
    }, 2000)


    //首页-选择年龄
    $('.bt_btn2').on('click', function () {
        $('.index').fadeOut();
        $('.index2').fadeOut();
        $('#one_question').fadeIn();
    })


    //选择年龄
    $('input[type=radio][name=age]').change(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        var val = $(this).val();
        $('#one_question .answer').attr('ans', val);
        yearsOld = parseFloat(val);
        console.log(yearsOld);
    });

    //提交年龄
    $('#one_question .year-btn').on('click', function () {
        yearsOld = parseInt($('#one_question .answer').attr('ans'));
        $('#one_question').hide();
        number = 1;
        renderQues();
        $('#two_question').show();
    })
})

function loading() {
    clearTime1 = setInterval(function () {
        load += 5;
        $('.load-center p').text(load + '%');
        if (load >= 81) {
            clearInterval(clearTime1)
        }
    }, 100)

    setTimeout(function () {
        clearTime2 = setInterval(function () {
            load += 3;
            $('.load-center p').text(load + '%');
            if (load >= 100) {
                clearInterval(clearTime2)
                $('.loading').hide();
                $('.background').show()
                $('.index').show();
                setTimeout(function () {
                    $('.index2').show();
                }, 1000)
            }
        }, 200)
    }, 2100)
}

function clickYear(that) {
    $(that).parent().addClass('active').siblings().removeClass('active');
    var val = parseInt($(that).val());
    $('#two_question .answer').attr('ans', val);
}

//下一题
function nextQues() {
    var happy = parseInt($('#two_question .answer').attr('ans'));
    var num = parseInt($('#two_question .answer').attr('num'));
    var flag = 0;
    $.each(happyData, function (i, v) {
        if (v.num == num) {
            flag = 1;
            v.happy = happy;
            happyArr[num - 1] = happy;
        }
    })
    if (flag == 0) {
        var obj = {
            num: num,
            happy: happy
        };
        happyData.push(obj);
        happyArr.push(happy);
    }

    number++;
    renderQues();

    $('#two_question .left').attr('onclick', 'prevQues()');
    if (number >= yearArr[yearsOld - 1]) {
        $('#two_question .year-btn').attr('onclick', 'submitXinDian()')
        $('#two_question .year-btn').text('生成心电图')
    }
}

/**
 * 渲染题型
 */
function renderQues() {
    $.each(question, function (i, v) {
        if (v.num == number) {
            $('#two_question .answer').attr('ans', 3);
            $('#two_question .answer').attr('num', number);
            $('#two_question .years').text(v.year + '岁');
            $('#two_question .title-two').text(v.title);
            var answer = '';
            var flag = 0;
            var flag_num = 0;
            $.each(happyData, function (ii, vv) {
                if (vv.num == number) {
                    flag = 1;
                    flag_num = vv.happy;
                    $('#two_question .answer').attr('ans', flag_num);
                }
            })
            if (flag == 0) {
                $.each(v.anwser, function (idx, val) {
                    if (idx == 3) {
                        answer += '<span class="active"><input onchange="clickYear(this)" type="radio" name="year" value="' + (6 - idx) + '"><i>' + val + '</i></span><br>';
                    } else if (idx == 5) {
                        answer += '<span><input onchange="clickYear(this)" type="radio" name="year" value="1"><i>' + val + '</i></span><br>';
                    } else if (idx == 6) {
                        answer += '<span><input onchange="clickYear(this)" type="radio" name="year" value="7"><i>' + val + '</i></span><br>';
                    } else {
                        answer += '<span><input onchange="clickYear(this)" type="radio" name="year" value="' + (6 - idx) + '"><i>' + val + '</i></span><br>';
                    }
                })
            } else {
                $.each(v.anwser, function (idx, val) {
                    if (flag_num == 7) {
                        if (idx == 6) {
                            answer += '<span class="active"><input onchange="clickYear(this)" type="radio" name="year" value="7"><i>' + val + '</i></span><br>';
                        } else {
                            answer += '<span><input onchange="clickYear(this)" type="radio" name="year" value="' + (6 - idx) + '"><i>' + val + '</i></span><br>';
                        }
                    } else {//5  -- 序号为1
                        if (idx == (6 - flag_num)) {
                            answer += '<span class="active"><input onchange="clickYear(this)" type="radio" name="year" value="' + (6 - idx) + '"><i>' + val + '</i></span><br>';
                        } else if (idx == 6) {
                            answer += '<span><input onchange="clickYear(this)" type="radio" name="year" value="7"><i>' + val + '</i></span><br>';
                        } else {
                            answer += '<span><input onchange="clickYear(this)" type="radio" name="year" value="' + (6 - idx) + '"><i>' + val + '</i></span><br>';
                        }
                    }

                })
            }

            $('#two_question .answer').html(answer);
            return false;
        }
    })
}

//上一题
function prevQues() {
    number--;
    renderQues();
    $('#two_question .year-btn').attr('onclick', 'nextQues()');
    $('#two_question .year-btn').text('继续前行');
    if (number == 1) {
        $('#two_question .left').attr('onclick', '');
    }

}

/**
 * 生产心电图
 */
function submitXinDian() {
    $('#two_question .left').attr('onclick', '');
    var happy = parseInt($('#two_question .answer').attr('ans'));
    var num = parseInt($('#two_question .answer').attr('num'));
    happyData = {
        num: num,
        happy: happy
    };
    happyArr.push(happy);
    yearData = year.slice(0, yearArr[yearsOld - 1]);

    $('.logo').show();
    $('#two_question').hide();
    $('.end').show();
    console.log(yearData);
    console.log(happyArr);
    console.log(happyData);
    enchartAge();
}


function enchartAge() {


//            var symbolSize = 10;
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        title: {
            text: '       ',
            subtext: '  最幸福',
            subtextStyle: {
                color: '#666',
                fontSize: 14,
                lineHeight: 80,
                fontWeight: 'bold',
            }
        },
        grid: {
            right: '15%',
        },
        tooltip: {},
        xAxis: {
            name: '年龄段(岁)',
            data: yearData,
            boundaryGap: false,
            axisLine: {
                symbol: ['none', 'arrow'],
                lineStyle: {
                    color: '#666',
                    width: 2,
                },
            },
            axisTick: {
                show: false,
            },
            nameTextStyle: {
                color: '#666'
            },
            nameGap: 10,
            nameRotate: 45,
        },
        yAxis: {
            name: '最不幸福',
            nameLocation: 'start',
            nameGap: -20,
            // show:false,
            // interval:21,
            boundaryGap: false,
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'transparent',
                }
            },
            splitLine: {
                show: false,
            },
            nameTextStyle: {
                color: '#666',
                fontSize: 14,
                lineHeight: 80,
                fontWeight: 'bold',
            },
        },
        series: [{
            // name: '年龄段(岁)',
            type: 'line',
            smooth: true,
            data: happyArr,
            color: ['#666'],
            symbol: 'none',
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3
                    }
                }
            }
        }],
    };
    myChart.setOption(option);
}

/**
 * 判断是否为空
 * @param strVal
 * @returns {boolean}
 */
function isNullOrEmpty(strVal) {
    if (strVal == '' || strVal == null || strVal == undefined) {
        return true;
    } else {
        return false;
    }
}

/*

function share() {
    //先定义分享参数对象,全参数为（可按需配置 ）：
    var options = {
        'id': "高能少年团", //项目名
        'title': "人生心电图",
        'desc': "选择每个人生阶段你印象最深的那个词语 人生心电图即将生成",
        // 'link': "http://s.flyfinger.com/picRepo/O/xindiantu/index.html",
        'link': "http://h5.dodoh5.com.cn/O/xindiantu/index.html",
        'imgUrl': "http://s.flyfinger.com/picRepo/O/xindiantu/images/dian.png",
        //        'type':'分享类型,music、video或link，不填默认为link',
        //        'dataUrl':' 如果type是music或video，则要提供数据链接，默认为空',
        //        'success':function(){
        //            alert('分享成功加调');
        //        },
        //        'cancel':function(){
        //            alert('分享取消回调');
        //        },
        //        'trigger':function(){
        //            alert('调起微信菜单');
        //        },
        //        'fail':function(){
        //            alert('调用失败回调');
        //        }
    };
    //后定义实例(注：实例名不能为关键字和'wx')：
    var _wx_share = new WxShare(options);
    //如要在中途重置分享信息，调用setOptions方法：
    //    _wx_share.setOptions({
    //        'title':'修改后的分享标题'
    //    });
    //如要在中途重置分享给朋友，调用setAppMessageOptions方法：
    //    _wx_share.setAppMessageOptions({
    //        'title':'修改后分享给朋友的分享标题'
    //    });
    //如要在中途重置分享到朋友圈，调用setTimeLineOptions方法：
    _wx_share.setTimeLineOptions({
        'title': "朋友圈title重置"
    });
}
*/



var htmlWidth=document.documentElement.clientWidth||document.body.clientWidth;
var htmlDom=document.getElementsByTagName("html")[0];
htmlDom.style.fontSize=htmlWidth/640*40+"px";

function GetRequest(){
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
        }

    }
    return theRequest;
}
window["urlObj"]=GetRequest();
function share() {
    var selfURL = window.location.href;

    $.ajax({
        url: "http://h5.dodoh5.com.cn/360dodoh5/wxService", //接口文档提供地址
        type: "POST",
        data: {
            url: selfURL,
        },
        dataType: 'json',
        success: function (_data) {
            console.log(_data);

            wx.config({
                debug: false,
                appId: 'wxb2a93bcde109c2db',//接口文档提供appId
                timestamp: _data.timestamp,
                nonceStr: _data.nonceStr,
                signature: _data.signature,
                jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem',
                    'translateVoice',
                    'startRecord',
                    'stopRecord',
                    'onRecordEnd',
                    'playVoice',
                    'pauseVoice',
                    'stopVoice',
                    'uploadVoice',
                    'downloadVoice',
                    'chooseImage',
                    'previewImage',
                    'uploadImage',
                    'downloadImage',
                    'getNetworkType',
                    'openLocation',
                    'getLocation',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'closeWindow',
                    'scanQRCode',
                    'chooseWXPay',
                    'openProductSpecificView',
                    'addCard',
                    'chooseCard',
                    'openCard'
                ]// 功能列表，我们要使用JS-SDK的什么功能
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('-=-=-=-=-=-=');
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });

    wx.ready(function () {
        wx.onMenuShareTimeline({
            title: "人生心电图", // 分享标题
            link: "http://h5.dodoh5.com.cn/O/xindiantu/index.html", // 分享链接,将当前登录用户转为puid,以便于发展下线
            imgUrl: "http://s.flyfinger.com/picRepo/O/xindiantu/images/dian.png", // 分享图标
            success: function () {
                if (typeof _hmt !== 'undefined') {
                    _hmt.push(["_trackEvent", "share_1", "click", "share_1"]);
                }
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: "人生心电图", // 分享标题
            desc: "选择每个人生阶段你印象最深的那个词语 人生心电图即将生成", // 分享描述
            link: "http://h5.dodoh5.com.cn/O/xindiantu/index.html", // 分享链接
            imgUrl: "http://s.flyfinger.com/picRepo/O/xindiantu/images/dian.png", // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                if (typeof _hmt !== 'undefined') {
                    _hmt.push(["_trackEvent", "share_2", "click", "share_2"]);
                }
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    });

}

/***
 * 判断是否是微信浏览器
 * @returns {boolean}
 */
function is_weixn() {
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    return isWeixin;
}


function doudong() {
    var bb = 1;
    setInterval(function () {
        if (bb == 1) {
            $('.bot_l').css({
                'transform': 'translateX(-5px) translateY(5px) '
            })
            $('.bot_r').css({
                'transform': 'translateX(5px) translateY(5px) rotateY(-180deg)'
            })
            $('.top_l').css({
                'transform': 'translateX(-5px) translateY(-5px) rotateX(-180deg)'
            })
            $('.top_r').css({
                'transform': 'translateX(5px) translateY(-5px) rotateX(-180deg) rotateY(-180deg)'
            })
            bb = 2
            setTimeout(function () {
                $('.bot_l').css({
                    'transform': 'translateX(0px) translateY(0px) '
                })
                $('.bot_r').css({
                    'transform': 'translateX(0px) translateY(0px) rotateY(-180deg)'
                })
                $('.top_l').css({
                    'transform': 'translateX(0px) translateY(0px) rotateX(-180deg)'
                })
                $('.top_r').css({
                    'transform': 'translateX(0px) translateY(0px) rotateX(-180deg) rotateY(-180deg)'
                })
                bb = 1
            }, 60)
        }
    }, 2000)
}
