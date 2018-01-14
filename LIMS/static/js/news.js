$(function(){
	var $func_buttn = $(".content .menu-wrapper li"),
		index,
		status = 0,
		all_data;
		function init(){
			getdata("实验室动态");
			init_data();
			init_more();
			$func_buttn.click(function(){
				$func_buttn.removeClass('clicked');
				$(this).addClass('clicked');
				index = $func_buttn.index(this);
				if(index === 0)getdata('实验室动态');
				else if(index === 1)getdata('学术会议');
				else if(index === 2)getdata('学术交流');
				else if(index === 3)getdata('学术报告');
				init_data();
				return false;
			})
		}
		function Lab($element){
			$(".content .right .main").html('<ul class="all"><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li></ul>');
			return false;
		};
		function meeting(){
			$(".content .right .main").html('<ul class="all"><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li><li><i><img src="static/img/arrow.png"></i><a href="#"><p>大声大声大声的撒的撒的大三上党</p></a></li></ul>');
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
				url: "http://localhost:8080/labmgesys/news_title?KEY" + key,
				data: {},
				contentType:"application/json", 
				success:function(data){
				   status = 0;
	               all_data = JSON.parse(data);
	               console.log(all_data);
	            },
	             error: function(XMLHttpRequest, textStatus, errorThrown) {
				 alert(XMLHttpRequest.status + ' ' + XMLHttpRequest.readyState + ' ' + textStatus);
				 status = 1;
				}
			});
		}
		function init_data(){
			if(all_data === undefined){
				let $all_ul = $(".content .right .main ul");
				// console.log($all_ul);
			}
		}
		function init_more(){
			if(all_data === undefined){
				let $more_ul = $(".content .left .content-recommend ul");
				// console.log($more_ul);
			}
		}
	init();
})