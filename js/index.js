$(function(){

//banner轮播
var container=$(".banner_neikuang")[0];
var imgBox=$(".img_box",container)[0];
var imgs=$("img",imgBox);
var dian=$(".dian",container)[0]; 
var lis=$("li",dian);
var hots=$(".hot",dian)[0]
var iw=parseInt(getStyle(imgs[0],"width"));
// imgBox.style.width=iw*imgs.length+'px';
var index=0;
var next=0;
imgs[0].style.left=0;
var t=setInterval(wheel,2000)
	function wheel(){
		next++;
		if(next==imgs.length){next=0}
		imgs[next].style.left=iw+"px";
		animate(imgs[index],{left:-iw},500)
		animate(imgs[next],{left:0},500)
		for(var i=0;i<lis.length;i++){
			lis[i].className=""
		}
			lis[next].className="hot"
		index=next;
}

	container.onmouseover=function(){
		clearInterval(t);
	}
	container.onmouseout=function(){
		t=setInterval(wheel,2000);
	}


	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			if(this.index===index){return}
			imgs[this.index].style.left=iw+"px";
			animate(imgs[index],{left:-iw},500)
			animate(imgs[this.index],{left:0},500)

			for(var i=0;i<lis.length;i++){
				lis[i].className=""
			}
			lis[this.index].className="hot"
			index=this.index;
		}
	}

//顶部下拉
var baobei=$('.baobei')[0]
// console.log(baobei)
var ull=$('ul',baobei)[0]
var bao=$('.baobei1')[0]
// console.log(ull)

	
		hover(baobei,function(){
		ull.style.display='block'
		bao.style.background="#fff"
	},function(){
		ull.style.display='none'
		bao.style.background=""
	})
	

var you4=$('.you4')[0]
var ulx=$('ul',you4)[0]
var cla=$('cla')[0]
hover(you4,function(){
	ulx.style.display='block'
	cla.style.background='#fff'
},function(){
	ulx.style.display='none'
	cla.style.background=''
})


var yy=$('.yy')[0]
var sjzc=$('.sjzc')[0]
var xiakuang=$('.xiakuang',yy)[0]
hover(yy,function(){
	xiakuang.style.display='block';
	sjzc.style.background="#fff"
},function(){
	xiakuang.style.display='none';
	sjzc.style.background=""
})

var you7=$('.you7')[0]
var wzdh=$('.wzdh')[0]
var wangzhan=$('.wangzhan')[0]
hover(you7,function(){
	wangzhan.style.display="block"
	wzdh.style.background="#fff"
},function(){
	wangzhan.style.display="none"
	wzdh.style.background=""
})




//banner
var i1=document.getElementsByClassName('i1')
console.log(i1)
var xiang=document.getElementsByClassName('xiang')
for(var b=0;b<i1.length;b++){
	i1[b].index=b;
	hover(i1[b],function(){
		xiang[this.index].style.display='block';
	},function(){
		xiang[this.index].style.display='none';
	})
	}


//遮罩
	var box1=$('.box1');
	var zhezhao=$('.zhezhao');
	// console.log(zhezhao[0])
	var spana=$('.spana')

	

	for(var i=0;i<box1.length;i++){
		box1[i].index=i;
		box1[i].onmouseover=function(){
			zhezhao[this.index].style.display='block'
			spana[this.index].style.display='block'
		
		}
		box1[i].onmouseout=function(){
			zhezhao[this.index].style.display='none'
			spana[this.index].style.display='none'

		}
	}
//
	var daohang=$('.xiaodaohang2')[0]
	
		daohang.onmouseover=function(){
			daohang.style.opacity='0.7';
	}
		daohang.onmouseout=function(){
			daohang.style.opacity='0.3';
	}
	
	//放大
	var box=$(".chao_box1");
	for(var i=0;i<box.length;i++){
		fang(box[i])
	}

	function fang(box){
		var k=$(".k1",box);
		for(var i=0;i<k.length;i++){
			k[i].onmouseover=function(){
				var img=$("img",this)[0]
				animate(img,{width:130,bottom:10},300);
			}
			k[i].onmouseout=function(){
				var img=$('img',this)[0]
				animate(img,{width:120,bottom:20},300)
			}
				}
	}

//右侧
var tebox=document.getElementsByClassName('te_box');
for(var i=0;i<tebox.length;i++){
	right(tebox[i])
}

function right(tebox){
	
	var te=tebox.getElementsByClassName('te')[0];
	var tuimg=tebox.getElementsByTagName('img')[0];
	// console.log(tuimg)
	tuimg.onmouseover=function(){
		te.style.display='block';
		animate(te,{right:-65},500)
	}
	tuimg.onmouseout=function(){
		te.style.display='none';
		animate(te,{right:-30},500)
	}
}
// var tebox1=document.getElementsByClassName('te_box')[0];
var te1=document.getElementsByClassName('te1')[0]
console.log(te1)
var immgs=te1.getElementsByTagName('img')[0]
te1.onmouseover=function(){
	immgs.style.display='block';
}
te1.onmouseout=function(){
	immgs.style.display='none';
}

//亲子左图遮罩
		var qin=$('.qinzi_box1');
		
		for(var i=0;i<qin.length;i++){
			qin[i].index=i;
			qin[i].onmouseover=function(){
				var img=$('img',this)[0]
			img.style.opacity='0.8';
		}
			qin[i].onmouseout=function(){
				var img=$('img',this)[0]
				img.style.opacity='1';
		}
		}
		


		
		//移动
	var qinzi1=$('.qinzi1');
	for(var i=0;i<qinzi1.length;i++){
			qinzi1[i].onmouseover=function(){
				
				var imgsa=$('img',this)[0];
				// imgsa[i].style.marginLeft='10';
				animate(imgsa,{marginRight:10},500)
			}
			qinzi1[i].onmouseout=function(){
				var imgsa=$('img',this)[0];
				// imgsa[i].style.marginLeft='0';
				animate(imgsa,{marginRight:0},500)
			}
		}

		var qinzi4=$('.qinzi4');
	for(var i=0;i<qinzi4.length;i++){
			qinzi4[i].onmouseover=function(){
				
				var imgsa=$('img',this)[0];
				// imgsa[i].style.marginLeft='10';
				animate(imgsa,{marginRight:10},500)
			}
			qinzi4[i].onmouseout=function(){
				var imgsa=$('img',this)[0];
				// imgsa[i].style.marginLeft='0';
				animate(imgsa,{marginRight:0},500)
			}
		}


//亲子左图遮罩
		var qin=$('.qinzi_box1')[0];
		var img=$('img',qin)[0]
		qin.onmouseover=function(){
			img.style.opacity='0.8';
		}
		qin.onmouseout=function(){
			img.style.opacity='1';
		}



		var imga=$('.new1')[0]
		imga.onmouseover=function(){
			imga.style.opacity='0.9';
		}
		imga.onmouseout=function(){
			imga.style.opacity='1';
		}

// 下边透明度
var xi=document.getElementsByClassName('xi1')
for(var i=0;i<xi.length;i++){
	xia(xi[i])
}
function xia(xi){
	var xibox=xi.getElementsByClassName('xi1_box')[0]
// console.log(xibox)
var imgsa=xibox.getElementsByTagName('img')[0]
// console.log(imgsa)
	xi.onmouseover=function(){
			imgsa.style.opacity='0.8';
			xi.style.border="1px solid red"
		}
	xi.onmouseout=function(){
			imgsa.style.opacity='1';
			xi.style.border=""
		}
}



//checkbox
// var flag2=true;
// var checkBox2=document.getElementsByClassName("check_box1")[0]
// // console.log(checkBox2)
// window.onscroll=function(){	
// 	var stop2=document.body.scrollTop;
// 	console.log(stop2)
// 		if(stop2>300){
// 			if(flag2){
// 				alert(1)
// 				flag2=false;
// 				animate(checkBox2,{top:20},200)
// 					}
					
// 		}else{
// 			if(!flag2){
// 				flag2=true;
// 				animate(checkBox2,{top:-50},200)
// 					}
					
// 				}	

// 		}


			


	




//猫头
			var nk=document.getElementsByClassName("neikuang3")[0];

			var imgg=nk.getElementsByTagName('img')
			var ass=nk.getElementsByTagName('a')
			// console.log(ass)
			for(var i=0;i<ass.length;i++){
				ass[i].index=i;
				ass[i].onmouseover=function(){
					for(var j=0;j<ass.length;j++){
					imgg[j].style.display='none';	
					}
					imgg[this.index].style.display='block';
				}
				ass[i].onmouseout=function(){
					imgg[this.index].style.display='none';
				}
			}



//banner 下边5张图的透明度
var zheng=document.getElementsByClassName('zheng1')[0]
var imgsa=zheng.getElementsByTagName('img')
	for(var i=0;i<imgsa.length;i++){
		imgsa.index=i;
		imgsa[i].onmouseover=function(){
			this.style.opacity='0.8';
		}
		imgsa[i].onmouseout=function(){
			this.style.opacity='1';
		}
	}	



var flag2=true;
var checkBox2=document.getElementsByClassName("check_box1")[0]
	var zuo=document.getElementsByClassName('zuofukuang')[0];
	var divs=zuo.getElementsByTagName('div');
	var floor=document.getElementsByClassName('floor');
	var arr=[];
	for(var i=0;i<floor.length;i++){
		arr.push(floor[i].offsetTop);

	}


	//优化加载
	var jiabox=document.getElementsByClassName('jia_box');
	// console.log(jiabox)
	var arrj=[]
	var topj;
	var hj=document.documentElement.clientHeight;
	// console.log(hj)
	for(var j=0;j<jiabox.length;j++){
		topj=jiabox[j].offsetTop;		
		arrj.push(topj)
	}
	window.onscroll=function(){
	//优化加载
	var stop2=document.body.scrollTop||document.documentElement.scrollTop;
	// console.log(stopj)
	for(var d=1;d<arrj.length;d++){
			// alert(1)
			if(arrj[d]+200<stop2+hj){
				var imgj=jiabox[d].getElementsByTagName('img')
				console.log(imgj.length)
				for(var i=0;i<imgj.length;i++){
					imgj[i].src=imgj[i].getAttribute('asrc')
				}
			}
		}



		if(stop2>300){
			if(flag2){
				flag2=false;
				animate(checkBox2,{top:0},200)
					}
					
		}else{
			if(!flag2){
				flag2=true;
				animate(checkBox2,{top:-50},200)
					}
					
				}	


		for(var j=0;j<arr.length;j++){
			var stop=document.body.scrollTop;
			if(stop+500>arr[j]){
				for(var x=0;x<arr.length;x++){
				divs[x].style.background='';
					}
				divs[j].style.background="blue";
			}
		}
	}
		for(var i=0;i<divs.length;i++){
			divs[i].index=i;
			divs[i].onclick=function(){
				animate(document.body,{scrollTop:arr[this.index]},300)
			}
		}

})