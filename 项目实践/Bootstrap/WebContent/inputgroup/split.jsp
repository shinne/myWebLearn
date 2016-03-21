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
	.dropdown-toggle{
	  	height: 34px;
	 }
</style>
</head>
<body style="padding: 20px">
    <div class="row">
      <div class="col-lg-6">
        <div class="input-group">
          <div class="input-group-btn open">
            <button type="button" class="btn btn-default" tabindex="-1">Action</button>
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" tabindex="-1" aria-expanded="true">
              <span class="caret"></span>
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
          <input type="text" class="form-control">
        </div><!-- /.input-group -->
      </div><!-- /.col-lg-6 -->
      <div class="col-lg-6">
        <div class="input-group">
          <input type="text" class="form-control">
          <div class="input-group-btn">
            <button type="button" class="btn btn-default" tabindex="-1">Action</button>
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" tabindex="-1">
              <span class="caret"></span>
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-right" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </div><!-- /.input-group -->
      </div><!-- /.col-lg-6 -->
    </div><!-- /.row -->
</body>
</html>