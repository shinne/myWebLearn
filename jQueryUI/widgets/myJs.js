//下拉菜单accrodion
$(function(){
	$("#accordion").accordion();

});


//字符匹配

availableTags = ['auto','abc','you','love','me','really','bbq'];
$(function(){
	$("#autoComplete").autocomplete({
		source:availableTags
	});
});


//对话框弹出
$(function(){
	$("#btn1").button().on("click",function(){
	$('#dialog').dialog();
});
});

//时间插件
$(function(){
	$("#datepicker").datepicker();
});


//进度条

var pb;
var max = 100;
var current = 0;
$(function(){
	pb = $("#progressbar");
	pb.progressbar({max:100});
	setInterval(changePb,100);
});

function changePb(){
	current++;
	if(current >= 100){
		current = 0 ;
	}

	pb.progressbar("option","value",current);
}


//menu
$(function(){
	$("#menu").menu({
		position:{
			at:"right bottom"
		}
	});
});


//slider
var spanValue,slider;
$(function(){
	slider = $('#slider');
	spanValue=$("#span");

	slider.slider({
		slide:function(event,ui){
			spanValue.text(slider.slider("option",'value'));
		}
	});

});


//spinner
$(function(){
	$("#spinner").spinner();
	$("#spinner").spinner("value","20");
	$("#spinnerButton").on('click',function(){
		var put = $("#spinner").spinner("value");
		alert(put);
	});
});


//时间插件
$(function(){
	$("#tabs").tabs();
});

//tooltips
$(function(){
	$("document").tooltip();
});

