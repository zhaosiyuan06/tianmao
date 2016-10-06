//兼容问题：IE6-8不支持通过类名方式获取元素
//classname【string】 要获取的元素类名
//range[object]


//判断当前浏览器是否支持
function getClass(classname,range){
	var range=range?range:document;
	if(document.getElementsByClassName){//判断是否可以访问className类
		return range.getElementsByClassName(classname);//如果可以，直接返回该类名；
	}else{
		var biao=range.getElementsByTagName("*");//遍历通用标签，目的是在查找到的这些标签中查找类名(形参中的所提供的类名)
		var arr=[];//查找到的标签，类，id等会以
		for(var i=0;i<biao.length;i++){
			
			if(checkClass(biao[i].className,classname)){
				arr.push(biao[i])
			}
		}
		return arr;

	}
}
// alert(getClass)



//检测当前的元素类名中是否有需要查找的类名；有：true  没有：false
//如果有几个类名<div class="aa inner sss"></div>,需要选择其中一个类名
function checkClass(tagClass,aclass){
	var newarr=tagClass.split(" ");//将class中的类名转换成数组，以空格分开每个元素；
	for(var i=0;i<newarr.length;i++){//遍历数组中的每个元素，这里的元素就是类名；
		if(newarr[i]==aclass){//挑选出我们要的类名
			return true;
		}
	}
	return false;
}
// alert(1)
// alert(getClass)


//兼容获取文本内容
//设置文本
function text(obj,val){

	if(val==undefined){
		if(obj.textContent!=undefined){
			return obj.textContent;
		}else{
			return obj.innerText;
		}
	}else{
		if(obj.textContent!=undefined){
			val= obj.textContent;
		}else{
			val= obj.innerText;
		}
	}

}

//获取通用样式
//获取通用样式

//
function getStyle(obj,atr){
	if(obj.currentStyle){
		return obj.currentStyle[atr]; 
	}else{
		return window.getComputedStyle(obj,null)[atr];
	}
}


//获取页面元素
//获取页面加载
function $(selector,range){

	if(typeof selector=="string"){
		range=range||document;
		if(selector.charAt(0)=="#"){
			return document.getElementById(selector.substr(1));
		}
		if(selector.charAt(0)=="."){
			return getClass(selector.substr(1),range);
		}
		if(/^[a-zA-Z1-6][a-zA-Z1-6]{0,9}$/.test(selector)){
			return range.getElementsByTagName(selector);
		}
	}
	if(typeof selector=="function"){
		window.onload=selector;
	}
	if(/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)){
		return document.createElement(selector.slice(1,-1))
	}

}


//获取子节点
function getChilds(str){
	var childs=str.childNodes;
	var newArr=[];
	//排除注释和换行
	for(var i=0;i<childs.length;i++){
		if(!(childs[i].nodeType==8||
			(childs[i].nodeType==3&&
			trim(childs[i].nodeValue)==""))){
			newArr.push(childs[i]);
		}

	}return newArr;
}
function trim(str){
	return str.replace(/^\s|\s+$/g,"");
}

//获得第一个子节点
function getFirst(parent){
	return getChilds(parent)[0];
}


//获得最后一个子节点
function getLast(parent){
	var child=getChilds(parent);
	return child[child.length-1];
}


//获得任意一个子节点
function getNum(parent,i){
	var child=getChilds(parent);
	return child[i];
}

//获得下一个兄弟节点
//obj
function getNext(obj){
	var obj1=obj.nextSibling;
	if(!obj1){
		return false;
	}
	while(obj1.nodeType==8||(obj1.nodeType==3&&(trim(obj1.nodeValue)==""))){
			obj1=obj1.nextSibling;
		if(!obj1){
			return false}
		}
	
	return obj1;
}



//获得上一个兄弟节点
//obj
function getLastt(obj){
	var obj1=obj.previousSibling;
	if(!obj1){
		return false;
	}
	while(obj1.nodeType==8||(obj1.nodeType==3&&(trim(obj1.nodeValue)==""))){
			obj1=obj1.previousSibling;
		if(!obj1){
			return false}
		}
	
	return obj1;
}

/*省略父元素的插入*/
//在obj2之前插入obj1
function insertBefore(obj1,obj2){
	var parent=obj2.parentNode;
	 parent.insertBefore(obj1,obj2)

}

//在endobj之后插入obj
function insertAfter(obj,endobj){
	var parent=endobj.parentNode;
	var next=getNext(endobj)//得到endobj元素的下一个兄弟节点
	if(next){
		 parent.insertBefore(obj,next)
		}else{
 		parent.appendChild(obj)
		}
	
	}



