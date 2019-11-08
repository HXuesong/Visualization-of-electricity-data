//获取div的四个顶点坐标
function getDivPosition() {
    var odiv = document.getElementById('map');
    //  alert(odiv.getBoundingClientRect().left);
    // alert(odiv.getBoundingClientRect().top);

    var xLeft, xRigh, yTop, yBottom;
    return {
        xLeft: odiv.getBoundingClientRect().left,
        xRigh: odiv.getBoundingClientRect().left + 1030,
        yTop: odiv.getBoundingClientRect().top,
        yBottom: odiv.getBoundingClientRect().top + 800
    };
}

//获取鼠标坐标
function mousePos(e) {
    var x, y;
    var e = e || window.event;
    return {
        x: e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
        y: e.clientY + document.body.scrollTop + document.documentElement.scrollTop
    };
};

//在固定div层拖动图片
var ie = document.all;
var nn6 = document.getElementById && !document.all;
var isdrag = false;
var y, x;
var oDragObj;

//鼠标移动
function moveMouse(e) {
    //鼠标的坐标
    mousePos(e).x;
    mousePos(e).y;
    //div的四个顶点坐标
    getDivPosition().xLeft;
    getDivPosition().xRigh;
    getDivPosition().yTop;
    getDivPosition().yBottom;

    if (isdrag && mousePos(e).x > getDivPosition().xLeft && mousePos(e).x < getDivPosition().xRigh && mousePos(e).y > getDivPosition().yTop && mousePos(e).y < getDivPosition().yBottom) {
        oDragObj.style.top = (nn6 ? nTY + e.clientY - y : nTY + event.clientY - y) + "px";
        oDragObj.style.left = (nn6 ? nTX + e.clientX - x : nTX + event.clientX - x) + "px";
        return false;
    }
}

//鼠标按下才初始化
function initDrag(e) {
    var oDragHandle = nn6 ? e.target : event.srcElement;
    var topElement = "HTML";
    while (oDragHandle.tagName != topElement && oDragHandle.className != "dragAble") {
        oDragHandle = nn6 ? oDragHandle.parentNode : oDragHandle.parentElement;
    }
    if (oDragHandle.className == "dragAble") {
        isdrag = true;
        oDragObj = oDragHandle;
        nTY = parseInt(oDragObj.style.top + 0);
        y = nn6 ? e.clientY : event.clientY;
        nTX = parseInt(oDragObj.style.left + 0);
        x = nn6 ? e.clientX : event.clientX;
        document.onmousemove = moveMouse;
        return false;
    }
}
document.onmousedown = initDrag;
document.onmouseup = new Function("isdrag=false");