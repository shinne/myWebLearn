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
<style type="text/css">

</style>
</head>
<body style="padding: 20px">
<button type="button" id="aButton"  class="btn btn-primary" data-complete-text="finished!" autocomplete="off">
  a button
</button>

<hr/>
<button type="button" id="toggle">toggle</button>
<button type="button" id="s">string</button>
<button type="button" id="reset">reset</button>
<script>
  $('#toggle').on('click', function () {
    $("#aButton").button("toggle");
  });
  
  $('#s').on('click', function () {
    $("#aButton").button("complete");
  });
  
  $('#reset').on('click', function () {
    $("#aButton").button("reset");
  });
</script>
</body>
</html>