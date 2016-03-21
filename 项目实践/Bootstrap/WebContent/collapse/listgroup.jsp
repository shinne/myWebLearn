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
<div class="panel-group" role="tablist">
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="collapseListGroupHeading1">
        <h4 class="panel-title">
          <a class="" data-toggle="collapse" href="#collapseListGroup1" aria-expanded="true" aria-controls="collapseListGroup1">
            Collapsible list group
          </a>
        </h4>
      </div>
      <div id="collapseListGroup1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading1" aria-expanded="true">
        <ul class="list-group">
          <li class="list-group-item">Bootply</li>
          <li class="list-group-item">One itmus ac facilin</li>
          <li class="list-group-item">Second eros</li>
        </ul>
        <div class="panel-footer">Footer</div>
      </div>
    </div>
  </div>
</body>
</html>