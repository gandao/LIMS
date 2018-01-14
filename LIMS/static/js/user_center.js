$(function(){
	var $func_buttn = $(".content .menu-wrapper li"),
		index;
	// alert($func_buttn);
		function init(){
			$func_buttn.click(function(){
				$func_buttn.removeClass('clicked');
				$(this).addClass('clicked');
				index = $func_buttn.index(this);
				if(index === 0)user_formation(this);
				else if(index === 1)my_project();
				else if(index === 2)new_project();
				return false;
			})
		}
		function user_formation($element){
			$(".content .right .main").html('<div class="user_information"><div class="name-wrapper">学号/工号： <span class="name">5120152333</span></div><div class="name-wrapper">姓名： <span class="name">小明</span></div><div class="name-wrapper">性别： <span class="name">男</span></div><div class="name-wrapper">班级： <span class="name">计科1501</span></div><div class="name-wrapper">手机号： <span class="name">18281572999</span></div></div>');
			return false;
		};
		//我的项目-逻辑
		function my_project(){
			$(".content .right .main").html('<div class="my_project"><div class="title_1">我发起的项目</div><ul><li><span class="name">水井挖掘过程</span><br><div class="wrappre"><div class="bar-wrapper"><div class="bar"></div><div class="precess"></div></div><div class="fun out"><a href="#">移出</a></div><div class="fun more"><a href="#">详情</a></div></div></li><li><span class="name">水井挖掘过程</span><br><div class="wrappre"><div class="bar-wrapper"><div class="bar"></div><div class="precess"></div></div><div class="fun out"><a href="#">移出</a></div><div class="fun more"><a href="#">详情</a></div></div></li></ul><div class="title_1">我参与的项目</div><ul><li><span class="name">水井挖掘过程</span><br><div class="wrappre"><div class="bar-wrapper"><div class="bar"></div><div class="precess"></div></div><div class="fun out"><a href="#">退出</a></div><div class="fun more"><a href="#">详情</a></div></div></li></ul></div>');
			var $detaile_btn = $('.content .right .main .my_project .more');
			$detaile_btn.click(function(){
				$(".content .right .main").html('<div class="project_detail"><div class="name-wrapper">项目名称： <span class="name">水井挖掘过程</span></div><div class="time-wrapper">项目开始时间： <span class="begin-time">2017.09.12</span>项目结束时间： <span class="finish-time">2017.12.30</span></div><div class="detail-wrapper"><div class="name">项目简介: </div><P class="detail">根据《建筑设计防火规范》（GBJ16-87）2001年版，《低倍数泡沫灭火系统设计规范》（GB50151-92），本项目设计水消防系统。其中消防水量为45L/S，持续时间为2小时。  室外最大消防流量45L/S，全厂消防采用低压制，厂内设加压泵房一座，为加强厂内火灾时自救的能力，全厂设5座室外地上式消火栓。厂内备DN19水枪6支，DN65水龙头360米。  库房室内消防流量10L/S，该DN65消火栓，保证火灾时二股水枪同时到达着火点。  车间、库房除设置以上消防系统外，设有磷酸铵盐干粉灭火器若干，用于扑救初期火灾</P></div><div class="member-wrapper"><div class="name">项目成员: </div><table><tr><th>姓名</th><th>职责</th></tr><tr><td>小明</td><td>数据库设计</td></tr><tr><td>小红</td><td>UI设计</td></tr><tr><td>小张</td><td>前端实现</td></tr></table></div></div>');
				return false;
			});

		};
		//新建一个项目-逻辑
		function new_project(){
			$(".content .right .main").html('<div class="new_project"><div class="name-wrapper"><span class="name">项目名称：</span><input type="text" class="name"></input></div><div class="time-wrapper"><span class="name">项目开始时间：</span><input  type="text" class="begin-time"></input></div><div class="time-wrapper"><span class="name">项目结束时间：</span><input type="text" class="finish-time"></input></div><div class="detail-wrapper"><span class="name">项目简介：</span><textarea class="detail" rows="5"></textarea></input></div><div class="member-wrapper"><span class="name">项目成员：</span><table><tr><th>姓名</th><th>职责</th></tr></table><a  class="add" href="#"><i class="fa fa-plus-circle"></i></a><a  class="minus" href="#"><i class="fa fa-minus-circle"></i></a><ul><li><input type="text" name="name"><input  class="fun" type="text" name="fun"></li></ul></div><div class="submit"><a href="#">提交</a></div></div>');

			//给表加添加功能
			$(".content .right .main .member-wrapper .add").click(function() {
				$('.content .right .main .member-wrapper ul').append('<li><input type="text" name="name"><input  class="fun" type="text" name="fun"><a href="#"><i class="fa fa-plus-circle"></i></a></li>');
				return false;
			});

			//给表减添加功能
			$(".content .right .main .member-wrapper .minus").click(function() {
				// alert("1");
				let index = $('.content .right .main .member-wrapper ul li').length;
				if(index >= 2)
				{
					$('.content .right .main .member-wrapper ul li:last').remove();
				}
				return false;
			});
			submit_fun();

			return false;
		};
		//提交项目信息-逻辑
		function submit_fun(){
			let $btn = $(".content .right .main .submit");
			$btn.click(function(){
				
				let index = 0;
				let newProject = {};
				let membres = {};
				membres.name = [];
				membres.duty = [];
				let name = $(".content .right .main .new_project .name-wrapper input");
				let beginTime = $(".content .right .main .new_project .begin-time");
				let endTime = $(".content .right .main .new_project .finish-time");
				let introduce = $(".content .right .main .new_project .detail-wrapper textarea");
				let member = $(".content .right .main .new_project .member-wrapper li");

				newProject.name = name.val();
				newProject.beginTime = beginTime.val();
				newProject.finishTime = endTime.val();
				newProject.introduce = introduce.val();
				if(newProject.name === '' ||newProject.beginTime === '' || newProject.finishTime === '' || newProject.introduce === '')index = 1;
				for(let i = 0 ;i < member.length;i++){
					let value = member.eq(i).find('input').eq(0).val();
					let value1 = member.eq(i).find('input').eq(1).val();
					if(value === '' || value1 === ''){
						index = 1;
						break;
					}
					membres.name.push(value);
					membres.duty.push(value1);
				}
				newProject.members = membres;
				if(index === 1){
					// alert("项目信息不完整，请核查后再提交！");
				}
				else {
					let Is_submit = confirm("确认要提交吗？");
					// alert("提交成功!");
				}
				return false;
			});
		}
	init();
})