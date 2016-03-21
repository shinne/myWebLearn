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
	function toggle(){
		if($("#p1").hasClass("active")){
			$("#p1").removeClass("active");
		}else{
			$("#p1").addClass("active");
		}
	}
</script>
<style type="text/css">

</style>
</head>
<body style="padding: 20px">
<div class="bs-example">
  <div class="progress">
    <div id="p1" class="progress-bar progress-bar-striped " role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%"><span class="sr-only">45% Complete</span></div>
  </div>
  <button type="button" class="btn btn-default bs-docs-activate-animated-progressbar" data-toggle="button" aria-pressed="false" autocomplete="off" onclick="toggle()">Toggle animation</button>
</div>
</body>
</html>