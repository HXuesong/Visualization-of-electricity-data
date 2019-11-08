var oExportLogo = document.querySelector('#exportLogo');

oExportLogo.onclick = function () {
    //要导出的json数据
    const jsonData = [
        {
            name: '2019-01-01',
            phone: '寒暑假漏电',
            email: '已处理'
        },
        {
            name: '2019-01-01',
            phone: '用电量突增',
            email: '已处理'
        },
        {
            name: '2019-01-01',
            phone: '用电量突增',
            email: '待处理'
        },
        {
            name: '2019-01-01',
            phone: '用电量突增',
            email: '已处理'
        },
        {
            name: '2019-01-01',
            phone: '用电量突增',
            email: '已处理'
        },
        {
            name: '2019-01-01',
            phone: '用电量突增',
            email: '已处理'
        },
        {
            name: '2019-01-01',
            phone: '用电量突增',
            email: '已处理'
        },
        {
            name: '2019-01-01',
            phone: '用电量突增',
            email: '已处理'
        }
    ]
    //列标题，逗号隔开，每一个逗号就是隔开一个单元格
    let str = `时间,事件,状态\n`;

    //增加\t为了不让表格显示科学计数法或者其他格式
    for (let i = 0; i < jsonData.length; i++) {

        for (let item in jsonData[i]) {
            str += `${jsonData[i][item] + '\t'},`;
        }

        str += '\n';
    }

    //encodeURIComponent解决中文乱码
    let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);

    //通过创建a标签实现
    let link = document.createElement("a");
    link.href = uri;

    //对下载的文件命名
    link.download = "用电异常记录.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}