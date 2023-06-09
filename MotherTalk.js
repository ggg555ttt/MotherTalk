/*代码区*/
	//加载工具
	$("body").on('click',function()
	{
		size = (JSON.stringify(localStorage).length/1024).toFixed(0);
		height = $(".iBfcuf").height().toFixed(0);
		$('#size').text(size);
		$('#height').text(height);
		warning();
	})

	$(".bIcduz").wait(function()
	{
		height = $(".iBfcuf").height().toFixed(0);
		$(".bIcduz").after("<span id='warning'><button class='"+class0+"'><b style='color:red;'>⚠️</b></button></a>※警告提示</span>");
		warning();
	},".bIcduz")
	//加载工具
	$(".frVjsk").wait(function()
	{
		height = $(".iBfcuf").height().toFixed(0);
		$(".frVjsk").append("<span><button id='uphead' class='"+class0+"'><b style='color:black;'>傳</b></button>※手动上传头像，当前角色名：<br><span style='writing-mode:tb-rl;background:rgb(255,255,255);' id='cusname'></span><br>");
		$(".frVjsk").append("<span></button>※本地存档大小：<b id='size' style='color:red;'>"+size+"</b>KB</span><br>");
		$(".frVjsk").append("<span></button>※聊天记录长度：<b id='height' style='color:red;'>"+height+"</b></span><br>");
		$(".frVjsk").append("<span><button id='help' class='"+class0+"'><b style='color:yellow;'>説</b></button>※使用说明</span><br>");
		$(".frVjsk").append("<span><button id='makecus' class='"+class0+"'><b style='color:red;'>創</b></button>※创建自定义角色</span><br>");
		$(".frVjsk").append("<span><button id='delcus' class='"+class0+"'><b style='color:red;'>刪</b></button>※删除自定义角色</span><br>");
		$(".frVjsk").append("<span><button id='changecus' class='"+class0+"'><b style='color:red;'>改</b></button>※更改角色信息※请输入角色ID：↓<input size='6' id='ccus'><br></span><br>");
		$(".frVjsk").append("<span><button id='language' class='"+class0+"'><b style='color:blue;'>語</b></button>※更改语言</span><br>");
		$(".frVjsk").append("<span><button id='send' class='"+class0+"'><b style='color:blue;'>發</b></button>※文字发送方式</span><br>");
		$(".frVjsk").append("<span><button id='head' class='"+class0+"'><b style='color:blue;'>頭</b></button>※右侧添加头像</span><br>");
		$(".frVjsk").append("<span><button id='savecus' class='"+class0+"'><b style='color:green;'>備</b></button>※备份自定义角色存档</span><br>");
		$(".frVjsk").append("<span><button id='loadcus' class='"+class0+"'><b style='color:green;'>讀</b></button>※读取自定义角色存档</span><br>");
		$(".frVjsk").append("<span><button id='fast' class='"+class0+"'><b style='color:black;'>速</b></button>※进入精简极速版</span><br>");
		$(".frVjsk").append("<span><button id='clean' class='"+class0+"'><b style='color:black;'>清</b></button>※清除本地存档</span><br>");
	},".frVjsk")
	//
	$('body').on('click',"#fast",function()
	{
		if(confirm('是否确认进入极速版网页？\n极速版没有学生、没有表情、没有样式布局\n只为最快速访问：https://ggg555ttt.gitee.io/mothertalk/fast.html'))
		{
			window.location.replace('https://ggg555ttt.gitee.io/mothertalk/fast.html')
		}
	})
	$('body').on('click',"#makecus",function()
	{
		
		let id;
		let cus = prompt("请输入角色姓名，创建成功后需刷新页面确认\n"+
			"如果名字中带空格，则聊天界面只显示第一个空格后的文字\n"+
			"例：【砂狼 白子】，聊天界面只显示：【白子】\n"+
			"如果点击确认后未出现文件上传界面，请点击最上方的【傳】字按钮");

		if(cus != null && cus.trim() != '')
		{
			if(cus.trim().indexOf(' ')<0)cus = ' '+cus;
			if(localStorage['custom'])chararr = JSON.parse(localStorage['custom']);
			else//如果没有自定义角色
			{
				chararr.push({
				kr : "自创",
				en : "CUSTOM",
				jp : "自创",
				zh_cn : "自创",
				zh_tw : "自创",
				club : [{
					kr : "自创",
					en : "自创",
					jp : "自创",
					zh_cn : "自创",
					zh_tw : "自创",
					characters : []
					}]
				})
			}
			char = chararr[0]['club'][0]['characters'];

			if(char.length == 0)id = 1000;
			else id = char[char.length-1]['no']+1;

			char.push({
				no : id,
				kr : "(#"+(id-1000)+")"+cus,
				en : "(#"+(id-1000)+")"+cus,
				jp : "(#"+(id-1000)+")"+cus,
				zh_cn : "(#"+(id-1000)+")"+cus,
				zh_tw : "(#"+(id-1000)+")"+cus,
				illust : 0,
				profile : [1],
				momotalk : true,
				open : true
			})
			//console.log(chararr);
			imgindex = id;
			$("#cusname").text(cus);
			$("#custom").click();
		}

	})
	$('body').on('click',"#uphead",function()
	{
		if($('#cusname').text() != '')
		{
			$("#cusname").text('');
			$("#custom").click();
		}		
		else
		{
			alert('此功能为创建自定义角色时出现无法上传头像问题的解决方案\n如无无问题请不要点击');
		}
	})
	$('body').on('click',"#delcus",function()
	{
		let id = prompt("请输入角色ID(#后面的纯数字)\n"+
		"若想批量删除请用空格分隔，例:0 1 2 3 4 5\n"+
		"需刷新页面来确认删除是否成功");
		let arr = JSON.parse(localStorage['custom']);
		if(!isNaN(parseInt(id)))
		{
			$.each(id.trim().split(" "),function(k,cusid)
			{
				cusid = parseInt(cusid)+1000;
				$.each(arr[0]['club'][0]['characters'],function(k,i)
				{
					if($(this)[0]['no'] == cusid)arr[0]['club'][0]['characters'].splice(k,1);
				})
				delhead(cusid)
				sessionStorage.removeItem(cusid);
				localStorage['custom'] = JSON.stringify(arr);
				//console.log(arr[0]['club'][0]['characters']);
			})
		}

	})
	$('body').on('click',"#language",function()
	{
		let lang = prompt("请输入想更改的语言：kr(韩语)、jp(日语)、en(英语)、zh_cn(简体中文)、zh_tw(繁体中文)", "zh_cn");
		if (lang != null)
		{
			alert('更改完成，请刷新页面!');
			localStorage['lang'] = lang;
		}
	})
	$('body').on('click',"#changecus",function()
	{
		let id = parseInt($("#ccus").val());
		if(!isNaN(id))
		{
			chararr = JSON.parse(localStorage['custom'])
			let arr = JSON.parse(localStorage['custom'])[0]['club'][0]['characters'];
			$.each(arr,function(k,i)
			{
				if($(this)[0]['no'] == id+1000)
				{
					let cname = prompt("如果点击确认后未出现文件上传界面，请点击最上方的【傳】字按钮\n当前角色名为：",$(this)[0]['zh_cn'].replace("(#"+id+")",'').trim());
					if(cname != null && cname.trim() != '')
					{
						if(cname.trim().indexOf(' ')<0)cname = ' '+cname;

						$(this)[0]['zh_cn'] = "(#"+id+")"+cname
						chararr[0]['club'][0]['characters'] = arr;
						console.log(chararr[0]['club'][0]['characters'][id]);
					}
					imgindex = arr.indexOf($(this)[0])+1000;
					$("#cusname").text($(this)[0]['zh_cn'].replace("(#"+id+")",'').trim());
					$("#custom").click();
				}
			})
		}
	})
	$('body').on('click',"#head",function()
	{
		let head = prompt("头像以你底下的角色选择框第一个头像为准，请输入人名，不输入即为空");
		let img = "<img src='"+$('.fzOyMd:eq(0)').attr('src')+"'class='common__Profile-sc-1ojome3-6 ekLMv rhead'>";
		$('.dCYmqA').next().remove();$('.dCYmqA').next().remove();
		if(head != null && head != '')
		{
			$('.dCYmqA').after("<span style='writing-mode:tb-rl;background:rgb(76,91,111);line-height:normal;'>"+head+"</span>",img)
		}
		else
		{
			$('.dCYmqA').after(img)
		}
	})
	$('body').on('click','.rhead',function()
	{
		if($(this).prev().is('span'))
		{
			$(this).prev().remove();
			$(this).remove();
		}
	})
	
	$("body").keyup(function(event)
	{
		if(event.keyCode==13 && localStorage['send']=='enter')
		{
			$("[title='send']").click();
		}
	});
	$('body').on('click',"#savecus",function()
	{
		if(!localStorage['custom']) return false;
		alert('建议您确认所有头像都加载完毕再使用本功能，以确保保存的存档文件是完整的')
		let arr = [];
		arr[0] = localStorage['custom'];
		arr[1] = {};
		$.each(JSON.parse(localStorage['custom'])[0]['club'][0]['characters'],function(k,i)
		{
			arr[1][$(this)[0]['no']] = headarr["#"+$(this)[0]['no']];
		})
		let time = new Date().toLocaleString().replaceAll('/','-').replaceAll(' ','_').replaceAll(':','-');
		download_txt('MolluTalk自定义角色存档'+time+'.json',JSON.stringify(arr));//生成专用存档
	})
	$('body').on('click',"#loadcus",function()
	{
		$("#loadcusfile").click()
	})
	$('body').on('click',"#send",function()
	{
		if(!localStorage['send'])
		{
			if(confirm('当前发送方式为点击按钮发送，是否换为回车发送？'))
			{
				localStorage['send'] = 'enter';
				$('.juTGbm:eq(1)').attr('onkeydown',"if(event.keyCode === 13)event.preventDefault();");
			}
		}
		else
		{
			if(confirm('当前发送方式为回车发送，是否换为点击按钮发送？'))
			{
				localStorage.removeItem('send');
				$('.juTGbm:eq(1)').removeAttr('onkeydown');
			}
		}
	})
	$('body').on('change',"#loadcusfile",function()
	{
		let file = this.files[0];
		let reader=new FileReader();
		reader.readAsText(file);
		reader.onload = function(e)
		{
			localStorage['custom'] = JSON.parse(this.result)[0];
			$.each(JSON.parse(this.result)[1],function(k,i)
			{
				savehead(parseInt(k),i)
			})
			alert('需刷新页面确认读取成功')
		}
	});

	$('body').on('click',"#warning",function()
	{
		let wh = '';
		let ws = '';
		let wc = '';
		size = (JSON.stringify(localStorage).length/1024).toFixed(0);
		height = $(".iBfcuf").height().toFixed(0);
		if(height > 10000)wh = "聊天记录长度为"+height+"，超过10000可能会影响到聊天记录图片的生成\n";
		if(size > 3000)ws = "本地存档数据大小为"+size+"KB，超过5120KB会使保存功能崩溃\n";
		if(localStorage['last-viewed-version'])
		{
			if(localStorage['last-chat'])wc += localStorage['last-chat'].length
			if(localStorage['last-viewed-version'])wc += localStorage['last-viewed-version'].length
			if(localStorage['ds_state_ba'])wc += localStorage['ds_state_ba'].length
			if(localStorage['custom-characters'])wc += localStorage['custom-characters'].length
			if(localStorage['ds_state_custom'])wc += localStorage['ds_state_custom'].length
			if(localStorage['ds_state_ak'])wc += localStorage['ds_state_ak'].length
			if(localStorage['renderer'])wc += localStorage['renderer'].length
			if(localStorage['rendererConfigs'])wc += localStorage['rendererConfigs'].length;
			wc = "检测到ClosureTalk存档数据，数据大小为"+(wc/1024).toFixed(0)+"KB";
		}
		alert(wh+ws+wc);

	});//按钮提醒

	$("body").on('click','#clean',function()
	{
		let cl = '';
		if(localStorage['last-viewed-version'])cl = "※检测到ClosureTalk存档数据，如果确认的话你的ClosureTalk存档数据也会一并清除";
		let msg = prompt("此操作会将你的所有存档数据一个不留的全部清除，如果你知道自己在干什么，请输入“确认清除”后点击确定\n"+cl);
		if(msg == '确认清除')
		{

			deleteDBAll('MotherTalk');
			localStorage.clear();
			sessionStorage.clear();
			window.location.reload();//刷新页面
		}
	})
	//添加上传标签
	$("body").append("<input id='custom' hidden type='file' accept='image/*'>");
	$("body").append("<input id='loadcusfile' hidden type='file' accept='application/json'>");

	//#储存头像
	$("body").on('change','#custom',function()
	{
		//文件改变时,获取文件,并转化为base64字符串
		$("#cusname").text('');
		var file = this.files[0]
		$(this).val('')
		var ready = new FileReader()
		ready.readAsDataURL(file);
		ready.onload = function(e)
		{
			var base64Img = e.target.result;
			// console.log(base64Img)
			compress(base64Img)
		}
	})
	$("body").on('click',".bDaxmX",function()
	{
		//console.log($(this).next().children().find('img').attr('src'));
	});
	//修改人名
	$("body").on('click',".jRPwkT .bold",function()
										{
		$(this).attr("hidden","hidden");
		$(this).before("<input value='"+$(this).text()+"'><button class='mingzi'>确定修改</button>");
	});
	$("body").on('click',".mingzi",function()
	{
		text = $(this).siblings("input").val();
		if(jQuery.trim(text) == 0)text = $(this).siblings("span").text();
		$(this).siblings("span").removeAttr('hidden').text(text);
		$(this).siblings("input").remove();
		$(this).remove();

	});
	//修改羁绊事件
	$("body").on('click',".heJhGb .medium",function()
	{
		$(this).attr("hidden","hidden");
		$(this).before("<input value='"+$(this).text()+"'><button class='jiban'>确定修改</button>");
	});
	$("body").on('click',".jiban",function()
	{
		text = $(this).siblings("input").val();
		if(jQuery.trim(text) == 0)text = $(this).siblings("button").text();
		$(this).siblings("button").removeAttr('hidden').text(text);
		$(this).siblings("input").remove();
		$(this).remove();
	});
	$('body').on('click',".jZKzYg",function()
	{
		alert("此为原作者Raun0129开发的MolluTalk的个人改版\n"+
			"MolluTalk的代码取得方式来自浏览器自带的Ctrl+S\n"+
			"对于代码的改的地点均用//#标注");
	});
	$('body').on('click',"#help",function()
	{
		alert("※此为MolluTalk（作者Raun0129）的功能增强改版\n"+
			"※当前版本为4.1，功能如下：\n"+
			"	1.自定义角色的创造、删除、修改功能（理论上没有数量上限，但建议不要超过50人）\n"+
			"	2.与ClosureTalk相同的永久保存功能，退出浏览器时未保存的内容不会消失\n"+
			"	3.自定义角色的存档备份、读取功能\n"+
			"	4.聊天记录长度和数据大小检测功能，到达一定程度会有警告提示\n"+
			"	5.语言、发送方式（可以使用回车键发送信息）的更改功能\n"+
			"	6.为右侧添加头像和名称功能\n"+
			"	7.更改上传的图片为JPG格式，节省了存储空间\n"+
			"	8.添加了精简极速版网页，访问更快速\n"+
			"※如果有其他使用建议和错误请向我反馈");
	});
/*代码区*/
