$(function(){
	var $func_buttn = $(".content .menu-wrapper li"),
		index,
		all_data,
		status = 0;

		function init(){
			getdata(0);
			teacher_member();
			$func_buttn.click(function(){
				$func_buttn.removeClass('clicked');
				$(this).addClass('clicked');
				index = $func_buttn.index(this);
				if(index === 0){
					getdata(0);
					teacher_member();
				}
				else if(index === 1){
					getdata(1);
					student_member(1);
				}
				else if(index === 2){
					getdata(2);
					student_member(2);
				}
				else if(index === 3)getdata(3);
				return false;
			})
		}

		function student(){
			$(".content .right .main").html('<div class="student"><div class="title_1">实验室研究生</div><ul><li><div class="name">2016级</div><table><tr><th>序号</th><th>姓名</th><th>学号</th><th>专业</th><th>研究方向</th><th class="job">毕业去向</th></tr><tr><td>1</td><td>小明</td><td>5120152566</td><td>软件过程</td><td>视觉处理</td><td class="job</tr><tr><td >1</td><td>小明</td><td>5120152566</td><td>软件过程</td><td>视觉处理</td><td class="job">微软中国</td></tr><tr><td>1</td><td>小明</td><td>5120152566</td><td>软件过程</td><td>视觉处理</td><td class="job">微软中国</td></tr></table></li><li><div class="name">2016级</div><table><tr><th class="small">序号</th><th>姓名</th><th>学号</th><th>专业</th><th>研究方向</th><th class="job">毕业去向</th></tr><tr><td small>1</td><td>小明</td><td>5120152566</td><td>软件过程</td><td>视觉处理</td><td class="job">微软中国</td></tr><tr><td small>1</td><td>小明</td><td>5120152566</td><td>软件过程</td><td>视觉处理</td><td class="job">微软中国</td></tr><tr><td small>1</td><td>小明</td><td>5120152566</td><td>软件过程</td><td>视觉处理</td><td class="job">微软中国</td></tr></table></li></ul></div>');
			return false;
		};

		function teacher(){
			$(".content .right .main").html('<div class="teacher"><div class="title_1">实验室主要成员</div><ul><li><div class="img-wrapper"><img src="static/img/user.jpg"></div><p>虽然被狂喜冲得有些晕乎乎的，但毕竟林动要早熟一些，因此半晌后也是恢复了冷静，紧皱着小脸，开始回忆着事情的始末，不过山洞中并没有奇怪的，所以他的目光在转了一圈后，便是停在了石池上。“这个石池，难道真的有古怪？”林动一脸的愕然，旋即又是自顾自地摇了摇头，这个石池，从小到大，他不知道泡过多少次，可类似今天这种情况，却是第一次发生！这究竟是怎么回事？总不可能是赤参的作用，一株一品灵药而已，让他能够在十日中达到淬体第三重，已是顶了天的效果了。“总是有什么不一样的地方。”林动紧紧地抿着嘴，小脸上倒是涌上了一股执拗，他明白这事的重要性，如果真的能够发现其中奥妙的话，这对他，将会无比的重要。</p></li><li><div class="img-wrapper"><img src="static/img/user.jpg"></div><p>虽然被狂喜冲得有些晕乎乎的，但毕竟林动要早熟一些，因此半晌后也是恢复了冷静，紧皱着小脸，开始回忆着事情的始末，不过山洞中并没有奇怪的，所以他的目光在转了一圈后，便是停在了石池上。“这个石池，难道真的有古怪？”林动一脸的愕然，旋即又是自顾自地摇了摇头，这个石池，从小到大，他不知道泡过多少次，可类似今天这种情况，却是第一次发生！这究竟是怎么回事？总不可能是赤参的作用，一株一品灵药而已，让他能够在十日中达到淬体第三重，已是顶了天的效果了。“总是有什么不一样的地方。”林动紧紧地抿着嘴，小脸上倒是涌上了一股执拗，他明白这事的重要性，如果真的能够发现其中奥妙的话，这对他，将会无比的重要。</p></li></ul></div>');
			return false;
		};

		function new_project(){
			$(".content .right .main").html('<div class="new_project"><div class="name-wrapper">项目名称： <input type="text" class="name"></input></div><div class="time-wrapper">项目开始时间： <input  type="text" class="begin-time"></input>项目结束时间： <input type="text" class="finish-time"></input></div><div class="detail-wrapper"><div class="name">项目简介: </div><textarea class="detail" rows="5"></textarea></input></div><div class="member-wrapper"><div class="name">项目成员: </div><table><tr><th>姓名</th><th>职责</th></tr></table></div></div>');
		};

		function getdata(key){
			$.ajax({
				url: "http://localhost:8080/labmgesys/news_title?KEY=" + key,
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
		};

		function teacher_member(){
			if(all_data === undefined){
				$(".content .right .main").html('<div class="teacher"><div class="title_1">实验室主要成员</div><ul></ul></div>');
				let $teacher_ul = $(".content .right .teacher ul");
				// console.log($teacher_ul);
			}
		};

		function student_member(key){
			$(".content .right .main").html('<div class="student"><div class="title_1">实验室研究生</div><ul></ul></div>');
			if(all_data === undefined){
				let $student_ul = $(".content .right .main .student ul");
				let $title = $(".content .right .main .student .title_1");
				if(key === 1){
					$title.html('实验室研究生');
				}else {
					$title.html('实验室本科生');
				}
			}
		};
		
	init();
})