/*预定义区*/
	var newWidth = 252;//压缩后图片的宽度
	var newHeight = 252;//压缩后图片的高度
	var quality = 1;//压缩后图片的质量,数字越小图片越模糊
	var imgindex;var text;//人物自定义
	
	var isr = false;var time = true;//自动执行
	var sav = 'no';

	var ssc = sessionStorage.getItem('chats');//获取会话存储
	var lsc = localStorage.getItem('chats');//获取本地存储
	if(ssc === null)ssc = '[]';//定义空会话存储
	if(lsc === null)lsc = ssc;//定义空本地存储
	localStorage.removeItem('html');
/*预定义区*/

/*函数库*/
	//IndexedDB打开数据库
	function openDB(dbName, version = 1) {
		return new Promise((resolve, reject) => {
		//	兼容浏览器
		var indexedDB =
			window.indexedDB ||
			window.mozIndexedDB ||
			window.webkitIndexedDB ||
			window.msIndexedDB;
		let db;
		// 打开数据库，若没有则会创建
		const request = indexedDB.open(dbName, version);
		// 数据库打开成功回调
		request.onsuccess = function (event) {
			db = event.target.result; // 数据库对象
			//console.log("数据库打开成功");
			resolve(db);
		};
		// 数据库打开失败的回调
		request.onerror = function (event) {
			console.log("数据库打开报错");
		};
		// 数据库有更新时候的回调
		request.onupgradeneeded = function (event) {
			// 数据库创建或升级的时候会触发
			console.log("数据库已更新");
			db = event.target.result; // 数据库对象
			var objectStore;
			// 创建存储库
			objectStore = db.createObjectStore("自定义数据", {//数据表
			keyPath: "key", // 这是主键
			// autoIncrement: true // 实现自增
			});
			// 创建索引，在后面查询数据的时候可以根据索引查
			
			objectStore.createIndex("key", "key", { unique: false });//主键
			objectStore.createIndex("val", "val", { unique: false });//数据
		};
		});
	}
	//IndexedDB通过主键读取数据
	function getDataByKey(db, storeName, key) {
		return new Promise((resolve, reject) => {
		var transaction = db.transaction([storeName]); // 事务
		var objectStore = transaction.objectStore(storeName); // 仓库对象
		var request = objectStore.get(key); // 通过主键获取数据

		request.onerror = function (event) {
			console.log("事务失败");
		};

		request.onsuccess = function (event) {
			//console.log("主键查询结果: ", request.result);
			resolve(request.result);
		};
		});
	}
	//IndexedDB更新数据
	function updateDB(db, storeName, data) {
		var request = db
		.transaction([storeName], "readwrite") // 事务对象
		.objectStore(storeName) // 仓库对象
		.put(data);

		request.onsuccess = function () {
		//console.log("数据更新成功");
		};

		request.onerror = function () {
		console.log("数据更新失败");
		};
	}
	//IndexedDB关闭数据库
	function closeDB(db) {
		db.close();
		//console.log("数据库已关闭");
	}

	//保存自定义数据
	function savedb()
	{
		let db;
		let html = new Array();//自定义内容
		$('.eLDbih').each(function(i)
		{
			html[i] = {};
			html[i]['src'] = $('.eLDbih')[i].src;//头像
			html[i]['name'] = $('.jRPwkT .bold')[i].innerText;//人名
		});
		if($('.heJhGb .medium').length)
		{
			html[$('.eLDbih').length] = {};
			$('.heJhGb .medium').each(function(i)
			{
				html[$('.eLDbih').length][i] = {};
				html[$('.eLDbih').length][i]['heart'] = $('.heJhGb .medium')[i].innerText;//羁绊
			});
		}
		openDB('MolluTalkChange数据库').then((db =>
		{
			db = db;
			//console.log(db);
			let data =
			{
				key : 'custom',//唯一
				val : JSON.stringify(html)
			}
			updateDB(db,'自定义数据', data)
			closeDB(db)//关闭数据库
		}))
	}

	//读取自定义数据
	function loaddb()
	{
		let db;
		openDB('MolluTalkChange数据库').then((db =>
		{
			db = db;
			getDataByKey(db,'自定义数据','custom').then((arr =>
			{
				$('.eLDbih').each(function(i)
				{
					if(JSON.parse(arr['val'])[i]['src'].indexOf("data:image") !== -1)$('.eLDbih')[i].src = JSON.parse(arr['val'])[i]['src'];
					$('.jRPwkT .bold')[i].innerText = JSON.parse(arr['val'])[i]['name'];
				});
				if($('.heJhGb .medium').length)
				{
					$('.heJhGb .medium').each(function(i)
					{
						$('.heJhGb .medium')[i].innerText = JSON.parse(arr['val'])[$('.eLDbih').length][i]['heart'];
					});
				}
				sav = 'yes';//允许保存自定义数据
			}))
			closeDB(db)//关闭数据库
		}))
	}

	//保存通用数据
	function savedata()
	{
		localStorage['chats'] = sessionStorage['chats'];
		localStorage['replyNo'] = sessionStorage['replyNo'];
		localStorage['replyGroup'] = sessionStorage['replyGroup'];
		if(sav == 'yes')savedb();
		// console.log(sav);
	}

	//元素出现后执行代码
	jQuery.fn.wait = function (func,cls,times,interval) {
		var _times = times || -1, //100次
			_interval = interval || 2000, //20毫秒每次
			_self = this,
			_selector = this.selector, //选择器
			_iIntervalID; //定时器id
		if( $(cls).length ){ //如果已经获取到了，就直接执行函数
			func && func.call($(cls));
		} else {
			_iIntervalID = setInterval(function() {
				if(!_times) { //是0就退出
					clearInterval(_iIntervalID);
				}
				_times <= 0 || _times--; //如果是正数就 --
				_self = $(cls); //再次选择
				if( $(cls).length ) { //判断是否取到
					func && func.call($(cls));
					clearInterval(_iIntervalID);
				}
			}, _interval);
		}
		return this;
	}

	//图片压缩
	function compress(base64Img)
	{
		var img = new Image();//创建一个空白图片对象
		img.src = base64Img;//图片对象添加图片地址
		img.onload = function ()//图片地址加载完后执行操作
		{
			//开始画压缩图
			var canvas = document.createElement("canvas");
			var ctx = canvas.getContext("2d");
			canvas.width = newWidth;//压缩图的宽度
			canvas.height = newHeight;//压缩图的高度
			ctx.drawImage(img,0,0,newWidth,newHeight);
			var newBase64 = canvas.toDataURL("image/jpeg",quality);
			$($(".eLDbih")[imgindex]).attr('src',newBase64);//改写图片
		}
	}

	//文件下载
	function download_txt(filename,content,contentType)
	{
		if (!contentType) contentType = 'application/octet-stream';
		var a = document.createElement('a');
		var blob = new Blob([content],{ 'type': contentType });
		a.href = window.URL.createObjectURL(blob);
		a.download = filename;
		a.click();
	}
/*函数库*/

/*代码区*/
	//自动回档
	if(ssc.length < lsc.length)
	{
		sessionStorage['chats'] = localStorage['chats'];
		sessionStorage['replyNo'] = localStorage['replyNo'];
		sessionStorage['replyGroup'] = localStorage['replyGroup'];
		window.location.reload();//刷新页面
	}

	//自动保存
	$("body").bind("mousedown",function()//鼠标点击后执行
	{
		if($(".iBfcuf").height() > 10000 || (JSON.stringify(localStorage).length/1048576).toFixed(2) > 4)//检测聊天框宽度
		{
			$("#warning").removeAttr('hidden');//显示警告
		}
		else
		{
			$("#warning").attr('hidden','hidden');//隐藏警告
		}
		if(isr){clearTimeout(time);}else{isr = true;}
		time = setTimeout(function(){savedata();},500)//延时保存
	});
	$('body').on('change',"input[type='file']",function()
	{
		if(isr){clearTimeout(time);}else{isr = true;}
		time = setTimeout(function(){savedata();},500)//延时保存
	});

	//加载工具
	$(".bIcduz").wait(function()
	{
		$(".bIcduz").after("<button style='color:red;' id='opentool'>打开工具</button>");
		$(".bIcduz").after("<button hidden style='color:red;' id='closetool'>隐藏工具</button>");
		$(".bIcduz").after("<span hidden id='load'><button class='common__IconButton-sc-1ojome3-0 Header__QuestionButton-sc-17b1not-3 mvcff kNOatn bold'><b style='color:blue;'>讀</b></button>※读取插件存档</span>");
		$(".bIcduz").after("<span hidden id='save'><button class='common__IconButton-sc-1ojome3-0 Header__QuestionButton-sc-17b1not-3 mvcff kNOatn bold'><b style='color:blue;'>存</b></button></a>※生成插件存档");
		$(".bIcduz").after("<span hidden id='help'><button class='common__IconButton-sc-1ojome3-0 Header__QuestionButton-sc-17b1not-3 mvcff kNOatn bold'><b style='color:blue;'>説</b></button>※使用说明</span>");
		$(".bIcduz").after("<span hidden id='warning'><button class='common__IconButton-sc-1ojome3-0 Header__QuestionButton-sc-17b1not-3 mvcff kNOatn bold'><b style='color:red;'>⚠️</b></button></a>※警告提示</span>");
		loaddb();//读取自定义数据
		if($(".iBfcuf").height() > 10000 || (JSON.stringify(localStorage).length/1048576).toFixed(2) > 4)//检测聊天框宽度
		{
			$("#warning").removeAttr('hidden');//显示警告
		}
	},".bIcduz")
	$('body').on('click',"#opentool",function()
	{
		$(".bIcduz").attr('hidden','hidden');
		$("#opentool").attr('hidden','hidden');
		$("#closetool").removeAttr('hidden');

		$("#load").removeAttr('hidden');
		$("#save").removeAttr('hidden');
		$("#help").removeAttr('hidden');
	})
	$('body').on('click',"#closetool",function()
	{
		$(".bIcduz").removeAttr('hidden');
		$("#opentool").removeAttr('hidden');
		$("#closetool").attr('hidden','hidden');

		$("#load").attr('hidden','hidden');
		$("#save").attr('hidden','hidden');
		$("#help").attr('hidden','hidden');
	})
	$('body').on('click',"#help button",function()
	{
		alert("※此插件版本为3.0正式版，支持功能如下：\n"+
			"	1.人物的名称、头像、羁绊事件的自定义修改功能\n"+
			"	2.自动保存功能，退出浏览器未保存的内容不会消失\n"+
			"	3.插件专用存档的生成和读取功能\n"+
			"	4.聊天记录长度和数据大小检测功能，到达一定程度会有警告提示\n"+
			"※预计4.0版本加入创建自定义人物功能，另有其它使用建议麻烦向我反馈");
	});
	$('body').on('click',"#warning",function()
	{
		if($(".iBfcuf").height() > 10000)alert("聊天记录长度为"+$(".iBfcuf").height()+"，超过10000可能会影响到聊天记录图片的生成");
		if((JSON.stringify(localStorage).length/1048576).toFixed(2) > 4)alert("聊天数据大小为"+(JSON.stringify(localStorage).length/1048576).toFixed(2)+"MB，超过5MB会出现错误");
	});//按钮提醒

	//添加上传标签
	$("body").append("<input id='upimg' hidden type='file' accept='image/*'>");
	$("body").append("<input id='savefile' hidden type='file' accept='application/json'>");

	//修改头像
	$("#upimg").on('change',function()
	{
		//文件改变时,获取文件,并转化为base64字符串
		var file = this.files[0]
		var ready = new FileReader()
		ready.readAsDataURL(file);
		ready.onload = function(e)
		{
			var base64Img = e.target.result;
			// console.log(base64Img)
			compress(base64Img)
		}
	})
	$("body").on('click',".eLDbih",function()
	{
		imgindex = $(".eLDbih").index($(this));
		$("#upimg").click()
	});

	//修改人名
	$("body").on('click',".jRPwkT span:not(.fWynih)",function()
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

	//生成专用存档
	$('body').on('click',"#save button",function()
	{
		let db;
		let save = new Array();
		openDB('MolluTalkChange数据库').then((db =>
		{
			db = db;
			getDataByKey(db,'自定义数据','custom').then((arr =>
			{
				save[0] = arr['val'];
				save[1] = localStorage['chats'];
				save[2] = localStorage['replyNo'];
				save[3] = localStorage['replyGroup'];
				let time = new Date().toLocaleString().replaceAll('/','-').replaceAll(' ','_').replaceAll(':','-');
				download_txt('MolluTalkChange'+time+'.json',JSON.stringify(save));//生成专用存档
			}))
			closeDB(db)//关闭数据库
		}))
	});

	//读取专用存档
	$('body').on('click',"#load button",function(){$("#savefile").click()});
	$('body').on('change',"#savefile",function()
	{
		var file = this.files[0];
		var reader=new FileReader();
		reader.readAsText(file);
		reader.onload = function(e)
		{
			let db;
			openDB('MolluTalkChange数据库').then((db =>
			{
				db = db;
				let data =
				{
					key : 'custom',//唯一
					val : JSON.parse(this.result)[0]
				}
				//console.log(JSON.parse(this.result)[0])
				updateDB(db,'自定义数据',data)
				closeDB(db)//关闭数据库
			}))
			localStorage['chats'] = sessionStorage['chats'] = JSON.parse(this.result)[1];
			localStorage['replyNo'] = sessionStorage['replyNo'] = JSON.parse(this.result)[2];
			localStorage['replyGroup'] = sessionStorage['replyGroup'] = JSON.parse(this.result)[3];
			sav = 'no';//禁止保存自定义数据
			alert("读取完毕，将屏蔽页面所有操作，请刷新页面");
			document.addEventListener("click",handler,true);function handler(e){e.stopPropagation();e.preventDefault();}
		}
	});

	//屏蔽选项跳转操作
	document.addEventListener("click", handler, true);
	function handler(e)
	{
		let class1 = "ReplyButtonBox__Span-sc-15gyqnr-2 dyLBbx medium";
		let class2 = "common__Button-sc-1ojome3-8 common__SubmitButton-sc-1ojome3-9 talk__ReplyButton-sc-eq7cqw-11 cVRiXh eIEKpg evqKja";
		if(e.target.className == class1 || e.target.className == class2){e.stopPropagation();e.preventDefault();}
	}
/*代码区*/
