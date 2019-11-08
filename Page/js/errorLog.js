(function($){
	$.fn.extend({
		//插件名称；
		_wx_ison: false,
		wxSelect:function(options){
			var defaults = {
				data: [],
				height:240
			};
			var options = $.extend(defaults,options);

			return this.each(function(){
				//创建元素
				var _this = this,
					w = $(_this).width() || $(_this).find("input").width();
					if(!$(_this).attr("data-bind")){
						init();
						renders(options.data);
					}

				function init(){
					$(_this).attr("data-bind",true);

					$(_this).append("<span class='wxSelect_bottom'></span>")
					$(_this).find(".wxSelect_bottom").css({
						width:"24px",
						height:"95%",
						display:"inline-block",
						position:"absolute",
						right:"5px",
						top:"1px",
						zIndex:2
					})
					$(_this).css({position:"relative",width:w + "px"}),
					$(_this).append("<span class='wxSelect_label'></span>")
					$(_this).find(".wxSelect_label").css({
						display: "inline-block",
						width:"0",
					    height:"0",
					    borderWidth:"6px 6px 0",
					    borderStyle:"solid",
					    borderColor:"#6c6c6c transparent transparent",
						cursor: "pointer",
						position: "absolute",
						right: "3px",
						top: "10px",
						borderRadius: '3px',
						zIndex:3
					})
					$(_this).append('<div class="dataBox"><ul class="dataList"></ul></div>');
					$(_this).find(".dataBox").css({
						width: "100%",
						maxHeight: "options.height" + "px",
						overflowY: "scroll",
						overflowX: "hidden",
						background:" #fff",
						boxShadow: "1px 2px 4px #ccc",
						display: "none",
						position:'absolute',
						zIndex:'999'
					});
					$(_this).find(".wxSelect_label").on("click",function(event) {
					$(_this).find(".dataBox").slideToggle(100);
					});
					function input(e){
						var val = $(_this).find("input").val().trim()
						,dataSelect = []
						,data = options.data;
						console.log(val);
						if(val != ""){
							for(var i in data){
								if(data[i]['name'].indexOf(val) != -1){
									dataSelect.push(data[i]);
								}
							}
							renders(dataSelect);
						}else{
							renders(data);
						}
						$(_this).find(".dataBox").slideDown(50);
					}
					$(_this).find("input").eq(0).on("input",input);
					$(_this).find(".dataList").on("click","li",function(){
						var val = $(this).text();
						var data = $(this).attr("value");
						if(val != ""){
							$(_this).find(".wx-input").val(val).attr("data-value",data);
							$(_this).find(".dataBox").slideUp(50);
						}
					});
					if(!$.fn._wx_ison){
						$(document).on("click",function(event){
							var e = event || window.event;
							e.stopPropagation();	
							var flag = true
							,tag = $(".input-Selector")
							,target = $(e.target);
					        if(target.closest(tag).length == 0 && flag == true){
								$(".input-Selector").find(".dataBox").slideUp(50);
								flag = false;
				       		}
						});
						$.fn._wx_ison = true;
					}
				}
				//渲染列表
				function renders(data){
						$(_this).find(".dataList").html("");
						var html = "";
						for(var i = 0; i<data.length;i++){
							 html += "<li value="+data[i].value+">"+data[i].name+"</li>"
						}
						$(_this).find(".dataList").append(html);
						$(_this).find(".dataList li").css({
							padding:"4px 0 4px 2px",
                            border:"1px solid #edf7ff",
                            fontSize: "12px",
						});
						$(_this).find(".dataList li").hover(function(){
							$(this).css({
								background:"#d5dee6"
							})
						},function(){
							$(this).css({background:"none"})
						})
				}
			})
		}
	})
})(jQuery);

$(function(){
    $(".input-box").wxSelect({
        data:[{"name":"知行苑7舍（原15栋）","value":21},{"name":"知行苑6舍（32栋）","value":11},{"name":"知行苑5舍（5栋）","value":13}]
    });
    $(".input-box2").wxSelect({
        data:[{"name":"521","value":23},{"name":"224","value":19},{"name":"311","value":26},{"name":"721","value":22}]
    });
    $(".input-box3").wxSelect({
        data:[{"name":"2019","value":23},{"name":"2018","value":19},{"name":"2017","value":26},{"name":"2016","value":22},{"name":"2015","value":25}]
    });
    $(".input-box4").wxSelect({
        data:[{"name":"1","value":23},{"name":"2","value":19},{"name":"3","value":26},{"name":"4","value":22},{"name":"5","value":25}]
    });
})