var domType = document.getElementById("type");
var myChartType = echarts.init(domType);
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
        subtext: '（夜间用电类型）',
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
    color:['#e92c60', '#ffc900','#71adfc'],
    series: [
        {
            name: '用电情况',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: '熬夜型' },
                { value: 310, name: '规律型' },
                { value: 234, name: '偶然型' },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(113, 173, 252, 0.5)'
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
    myChartType.setOption(option, true);
}

window.addEventListener("resize", function () {
    myChartType.resize();
});