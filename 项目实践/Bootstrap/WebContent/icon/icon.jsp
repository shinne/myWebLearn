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
<div class="btn-toolbar" role="toolbar">
  <div class="btn-group">
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-left"></span> <span class="sr-only">左对齐</span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-center"></span> <span class="sr-only">中间对齐</span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-right"></span> <span class="sr-only">右对齐</span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-justify"></span> <span class="sr-only">两端对齐</span></button>
  </div>
</div>
<hr/>
<div class="btn-toolbar" role="toolbar">
  <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-star"></span> Star</button>
  <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-star"></span> Star</button>
  <button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-star"></span> Star</button>
  <button type="button" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-star"></span> Star</button>
</div>
</body>
</html>