$(function(){
	var $func_buttn = $(".content .menu-wrapper li"),
		index,
		all_data,
		status;
		function init(){
			$func_buttn.click(function(){
				$func_buttn.removeClass('clicked');
				$(this).addClass('clicked');
				index = $func_buttn.index(this);
				if(index === 0)achievement();
				else if(index === 1)achievement();
				return false;
			})
		}
		function Lab($element){
			$(".content .right .main").html('<ul class="all"><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li></ul>');
			return false;
		};
		function achievement(){
			$(".content .right .main").html('<ul class="achievement"><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li></ul>');
			return false;
		};
		function exchange(){
			$(".content .right .main").html('<ul class="all"><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li></ul>');
			return false;
		};
		function report(){
			$(".content .right .main").html('<ul class="all"><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li></ul>');
			return false;
		};
		function getdata(key){
			$.ajax({
				url: "http://localhost:8080/labmgesys/news_title?KEY=" + key,
				data: {},
				contentType:"application/json", 
				success:function(data){
				   status = 0;
	               all_data = JSON.parse(data);
	            //    console.log(all_data);
	            },
	             error: function(XMLHttpRequest, textStatus, errorThrown) {
				//  alert(XMLHttpRequest.status + ' ' + XMLHttpRequest.readyState + ' ' + textStatus);
				 status = 1;
				}
			});
		};

	init();
})