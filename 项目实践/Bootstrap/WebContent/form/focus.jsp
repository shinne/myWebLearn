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
	#focusedInput {
	border-color: #ccc;
	border-color: rgba(82,168,236,.8);
	outline: 0;
	outline: thin dotted \9;
	-webkit-box-shadow: 0 0 8px rgba(82,168,236,.6);
	box-shadow: 0 0 8px rgba(82,168,236,.6);
	}
</style>
</head>
<body style="padding: 20px">
<input class="form-control" id="focusedInput" type="text" value="Demonstrative focus state">
<hr/>
<input class="form-control" id="focusedInput2" type="text" value="Demonstrative focus state2">
</body>
</html>