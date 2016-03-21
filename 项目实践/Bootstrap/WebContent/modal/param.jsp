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
	function openDialog(){
		// 默认是true
		$('#myModal').modal({
			backdrop: false
		});
	}
	
	function openDialog2(){
		// 默认是true
		$('#myModal').modal({
			keyboard: true
		});
	}
	
	function openDialog3(){
		// 默认是true
		$('#myModal').modal({
			show: false
		});
	}
	

</script>
<style type="text/css">

</style>
</head>
<body style="padding: 20px">
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  通过 data 属性打开模态框
</button>

<button type="button" class="btn btn-primary btn-lg" onclick="openDialog()">
  backdrop
</button>

<button type="button" class="btn btn-primary btn-lg" onclick="openDialog2()">
  keyboard
</button>

<button type="button" class="btn btn-primary btn-lg" onclick="openDialog3()">
  show
</button>




<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



</body>
</html>