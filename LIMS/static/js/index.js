$(function(){
	let data_one,data_two;
	function init(){
		getdata('home_labDynamics',1);
		getdata('home_learning',2);
	};
	function getdata(key,dir){
		$.ajax({
			url: "http://localhost:8080/labmgesys/" + key,
			data: {},
			contentType:"application/json", 

			success:function(data){
               console.log(data);
               initdata(data,dir)
            },
             error: function(XMLHttpRequest, textStatus, errorThrown) {
			//  alert(XMLHttpRequest.status + ' ' + XMLHttpRequest.readyState + ' ' + textStatus);
				alert('获取数据失败！');
			}
		});
	};
	function initdata(data,dir){
		let $LabNews = $(".content .news_one ul");
		let $StudyNews = $(".content .news_two ul");
		let datas = JSON.parse(data);
		console.log(datas);
		if(datas !== undefined || datas !== null){
			if(dir === 1){
				for(let i in datas){
					let str = '<li'  + 'key = ' + datas[i].key + '><i><img src="static/img/arrow.png"></i><a href="#"><p>' +datas[i].value + '</p></a></li>';
					$LabNews.append(str);
				}
			}
			else {
				for(let i in datas){
						let str = '<li'  + 'key = ' + datas[i].key + '><i><img src="static/img/arrow.png"></i><a href="#"><p>' +datas[i].value + '</p></a></li>';
						$StudyNews.append(str);
					}
			}
			
		}
	};
	init();
})