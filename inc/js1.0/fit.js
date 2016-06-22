/**
 * Created by Administrator on 2016/5/30.
 */
(function (doc, win) {
    var docEl = doc.documentElement,//获取HTML元素
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    //判断窗口有没有orientationchange方法，有就赋给变量，没有就返回resize方法
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 12 * (clientWidth / 320) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
