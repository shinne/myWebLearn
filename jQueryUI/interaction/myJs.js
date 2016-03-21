$(document).ready(function(){
	//拖动
	$(".draggable").draggable();

	//放置，放置会产生一个drop事件
	$(".droppable").droppable();
	$(".droppable").on("drop",function(event,ui){
		console.log(event);
	});
});

//变换大小
$(function(){
	$(".resizable").resizable();

});


//选中
$(function(){
	 $( "#selectable" ).selectable();
	 $("#selectButton").on("click",function(){
	 	if($(".right").hasClass("ui-selected")){
	 		$(".right").css("background","green");
	 	}
	 });
});

//改变排列顺序
$(function(){
	$("#sortable").sortable();

});