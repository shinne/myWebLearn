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
		$('#myModal').modal('toggle');
	}
	
	function openDialog2(){
		$('#myModal').modal('show');
	}
	
	function hide(){
		$('#myModal').modal('hide');
	}


</script>
<style type="text/css">

</style>
</head>
<body style="padding: 20px">

<button type="button" class="btn btn-primary btn-lg" onclick="openDialog()">
  toggle
</button>

<button type="button" class="btn btn-primary btn-lg" onclick="openDialog2()">
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
        <button type="button" class="btn btn-primary" onclick="hide()">Hide</button>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
	$('#myModal').on('show.bs.modal', function (e) {
	 	alert("show.bs.modal");
	});
	
	$('#myModal').on('shown.bs.modal', function (e) {
	 	alert("shown.bs.modal");
	});
	
	$('#myModal').on('hide.bs.modal', function (e) {
	 	alert("hide.bs.modal");
	});
	
	$('#myModal').on('hidden.bs.modal', function (e) {
	 	alert("hidden.bs.modal");
	});
</script>

</body>
</html>