$(document).ready(function(){
    $('img').remove();
    $('.loader').hide();
    $('.search').on('click',function(){
        $('.op-img').empty();
        $('.loader').show();
        var id = $('.id').val();
        console.log('clicked : '+id);
        call(id);
    });
});
function call(id){
    $.ajax({
        url: './script/count.php',
        type: 'get',
        data: {
            'id' : id
        }
    });
	$.ajax({
		type:'POST',
		url:"https://instadp.org/index.php",
		dataType:'text',
		data:{
			username : id
		},
		success:function(data){
			$('.temp-container').append(data);
            $('.op-img').empty();
            var op = $('img:last').attr('src');
            $('.temp-container').empty();
            // $('.temp-container').append(op);
			if(op != "img/logo.png"){
                $('.op-img').append("<img src=\""+op+"\" alt=\"Instagram DP\" class=\"dp_img\"></br>");
                $('.op-img').append("<a class=\"btn btn-primary\" href=\""+op+"\" style=\"margin-top:15px;\">Download</a>");
            }else{
                alert("Enter correct username");
            }
            $('.loader').hide();
		}
	});
}