/*预定义区*/
	var imgindex;var text;//人物自定义
	var headarr = [];
	var chararr = [];
	var height;
	var heads = 0;
	var size = (JSON.stringify(localStorage).length/1024).toFixed(0);
	$.each(Object.keys(sessionStorage),function(k,i)
	{
		headarr[i] = sessionStorage.getItem(i);
	})
	var class0 = 'common__IconButton-sc-1ojome3-0 Header__QuestionButton-sc-17b1not-3 mvcff kNOatn bold';
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
			objectStore = db.createObjectStore("Custom", {//数据表
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
	//IndexedDB通过主键删除数据
	function deleteDB(db, storeName, id) {
	var request = db
	.transaction([storeName], "readwrite")
	.objectStore(storeName)
	.delete(id);

	request.onsuccess = function () {
	//console.log("数据删除成功");
	};

	request.onerror = function () {
	console.log("数据删除失败");
	};
	}
	//IndexedDB关闭数据库
	function closeDB(db) {
		db.close();
		//console.log("数据库已关闭");
	}
	//IndexedDB删库跑路
	function deleteDBAll(dbName) {
		console.log(dbName);
		let deleteRequest = window.indexedDB.deleteDatabase(dbName);
		deleteRequest.onerror = function (event) {
		console.log("删除失败");
		};
		deleteRequest.onsuccess = function (event) {
		console.log("删除成功");
		};
	}
	//保存头像
	function savehead(headindex,img64)
	{
		let db;
		openDB('MotherTalk').then((db =>
		{
			db = db;
			let data =
			{
				key : headindex,//唯一
				val : img64
			}
			updateDB(db,'Custom', data)
			closeDB(db)//关闭数据库
		}))
	}
	//读取头像
	function loadhead(imgindex)
	{
		let db;
		openDB('MotherTalk').then((db =>
		{
			db = db;
			getDataByKey(db,'Custom',imgindex).then((arr =>
			{
				if((JSON.stringify(sessionStorage).length/1048576).toFixed(2) > 4.9)
				{
					headarr["#"+imgindex] = arr['val'];
				}
				else 
				{
					//console.log((JSON.stringify(sessionStorage).length/1048576).toFixed(2))
					sessionStorage["#"+imgindex] = arr['val'];
					headarr["#"+imgindex] = arr['val'];
				}
				
			}))
			closeDB(db)//关闭数据库
		}))
	}
	//删除头像
	function delhead(imgindex)
	{
		let db;
		openDB('MotherTalk').then((db =>
		{
			deleteDB(db,'Custom',imgindex)
			closeDB(db)//关闭数据库
		}))
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
		img.onload = function()//图片地址加载完后执行操作
		{
			//开始画压缩图
			var canvas = document.createElement("canvas");
			var ctx = canvas.getContext("2d");
			canvas.width = 252;//压缩图的宽度
			canvas.height = 252;//压缩图的高度
			ctx.drawImage(img,0,0,252,252);
			var newBase64 = canvas.toDataURL("image/jpeg");

			localStorage['custom'] = JSON.stringify(chararr);
			savehead(imgindex,newBase64)
			//$($(".eLDbih")[imgindex]).attr('src',newBase64);//改写图片
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

	//警告提示
	function warning()
	{
		if(height > 10000 || size > 3000 || localStorage['last-viewed-version'])//检测聊天框宽度
		{
			$("#warning").removeAttr('hidden');//显示警告
		}
		else
		{
			$("#warning").attr('hidden','hidden');//隐藏警告
		}
	}
/*函数库*/