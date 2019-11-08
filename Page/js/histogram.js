var dom = document.getElementById("histogram");
var myChartTop = echarts.init(dom);
var app = {};
option = null;
app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'TOP10',
            type: 'bar',
            barWidth: '60%',
            data: [5, 3, 4, 2, 5, 6, 4]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChartTop.setOption(option, true);
}

window.addEventListener("resize", function () {
    myChartTop.resize();
});