<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh-CN">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap3/css/bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap3/css/bootstrap-theme.min.css">
<script src="${pageContext.request.contextPath}/bootstrap3/js/jquery-1.11.2.min.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap3/js/bootstrap.min.js"></script>
<script type="text/javascript">
	$(function () {
	  $('[data-toggle="popover"]').popover();
	});
	
	function show(){
		$('#element').popover('show');
	}
	
	function hide(){
		$('#element').popover('hide');
	}
	
	function toggle(){
		$('#element').popover('toggle');
	}
	
	function destroy(){
		$('#element').popover('destroy');
	}
</script>
</head>
<body style="padding: 120px">
<button id="element" type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>

  <hr/>
  <input type="button" value="show" onclick="show()"/>
  <input type="button" value="hide" onclick="hide()"/>
  <input type="button" value="toggle" onclick="toggle()"/>
  <input type="button" value="destroy" onclick="destroy()"/>
</body>
</html>