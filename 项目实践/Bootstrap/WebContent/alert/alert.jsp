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
<div class="bs-example">
  <div class="alert alert-success" role="alert">
    <strong>Well done!</strong> You successfully read this important alert message.
  </div>
  <div class="alert alert-info" role="alert">
    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
  </div>
  <div class="alert alert-warning" role="alert">
    <strong>Warning!</strong> Better check yourself, you're not looking too good.
  </div>
  <div class="alert alert-danger" role="alert">
    <strong>Oh snap!</strong> Change a few things up and try submitting again.
  </div>
</div>
<hr/>
<div class="alert alert-warning alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</div>
<hr/>
<div class="bs-example">
  <div class="alert alert-success" role="alert">
    <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
  </div>
  <div class="alert alert-info" role="alert">
    <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
  </div>
  <div class="alert alert-warning" role="alert">
    <strong>Warning!</strong> Better check yourself, you're <a href="#" class="alert-link">not looking too good</a>.
  </div>
  <div class="alert alert-danger" role="alert">
    <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
  </div>
</div>
</body>
</html>