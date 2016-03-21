<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh-CN">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap3/css/bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap3/css/bootstrap-theme.min.css">
<script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap3/js/bootstrap.min.js"></script>
<script type="text/javascript">
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});
</script>
</head>
<body style="padding: 120px">
<div class="bs-example tooltip-demo">
  <div class="bs-example-tooltips">
    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="" data-original-title="Tooltip on left">Tooltip on left</button>
    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top">Tooltip on top</button>
    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Tooltip on bottom">Tooltip on bottom</button>
    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
  </div>
</div>
<hr/>
<div class="bs-example tooltip-demo">
    <p>Tight pants next level keffiyeh <a href="#" data-toggle="tooltip" title="" data-original-title="Default tooltip">you probably</a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <a href="#" data-toggle="tooltip" title="" data-original-title="Another tooltip">have a</a> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan <a href="#" data-toggle="tooltip" title="" data-original-title="Another one here too">whatever keytar</a>, scenester farm-to-table banksy Austin <a href="#" data-toggle="tooltip" title="" data-original-title="The last tip!">twitter handle</a> freegan cred raw denim single-origin coffee viral.</p>
  </div>
</body>
</html>