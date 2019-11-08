var dom = document.getElementById("hisDataView");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'category',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        /*改变xy轴颜色*/
        axisLine: {
            lineStyle: {
                color: '#e33b38',
                width: 1, //这里是为了突出显示加上的  
            }
        }
    },
    yAxis: {
        type: 'value',
        /*改变xy轴颜色*/
        axisLine: {
            lineStyle: {
                color: '#e33b38',
                width: 0, //这里是为了突出显示加上的  
            }
        }
    },
    series: [{
        data: [2, 3, 5, 6, 4, 3, 5, 7, 6, 5, 4, 3],
        type: 'line',
        smooth: true,
        symbolSize: 1,   //折线点的大小
        itemStyle : {  
            normal : {  
            color: ['#cccccc'], //圈圈的颜色 
            lineStyle: {
                color: '#ff8646',  //曲线的颜色
            width:3
                }
            } 
        }
    }]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

window.onresize = myChart.resize;