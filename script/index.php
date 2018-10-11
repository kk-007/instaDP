<!DOCTYPE html>
<html>
<head>
	<title></title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
<div class="temp-container"></div>
<script type="text/javascript">
function call(id){
	$.ajax({
		type:'POST',
		url:"https://instadp.org/index.php",
		dataType:'text',
		data:{
			username : id
		},
		success:function(data){
			$('.temp-container').append(data);
			var op = $('img:last').attr('src');
			$('.temp-container').empty();
			var status = 0
			if(op != "img/logo.png"){
				status = 1;
			}
			var data = {
				'status' : status,
				'url' : op
			}
			console.clear();
			var api = JSON.stringify(data);
			$('.temp-container').append(api);
		}
	});
}
</script>
<?php
	$link = "<script>call(\"".$_GET['id']."\");</script>";
	echo $link;
	// print_r(json_encode($link));
?>
</body>
</html>