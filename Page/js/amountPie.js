var domAmount = document.getElementById("amount");
var myChartAmount = echarts.init(domAmount);
var app = {};
option = null;
option = {
    title : {
        text: '全校夜间用电整体情况',
        textStyle: {
            color:'#000000',        
            fontStyle:'normal',
            fontWeight:'bold',    
            fontFamily:'Microsoft yahei', 
            fontSize:12,
            align:'center', 
        },
        subtext: '（用电量高、中、低）',
        subtextStyle: {
            color:'#000000',        
            fontStyle:'normal',
            fontWeight:'normal',    
            fontFamily:'Microsoft yahei', 
            fontSize:10,
            align:'center'   
        },
        x:'center',
        y: '20vh'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#ff8646', '#ffc900','#17dfb7'],
    series: [
        {
            name: '用电情况',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: '高' },
                { value: 310, name: '中' },
                { value: 234, name: '低' },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: { 　　　　　　　　　　//去除饼图的指示折线label
                normal: {
                    show: false,
                    position: 'inside',
                    formatter: "{b}:{d}%"
                },
            },
        }
    ]
};
;
if (option && typeof option === "object") {
    myChartAmount.setOption(option, true);
}

window.addEventListener("resize", function () {
    myChartAmount.resize();
});