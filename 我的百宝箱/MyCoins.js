var roll=document.querySelector(".roll");
var roll2=document.querySelector(".roll .roll2");
var div=roll2.getElementsByClassName("a");

var index=0;
var timer=null;
roll2.style.width=div[0].offsetWidth*div.length+"px";

function move(){
	index++;
	if (index>div.length-1) {
		index=0
	}
    roll2.style.left=-index*div[0].offsetWidth+"px"

    for (var i = 0; i < btn.length; i++){
				btn[i].className=""
			}
			btn[index].className="active"
}

function timerFn(){
	clearInterval(timer);
	timer=setInterval( function(){
	move();
},2000)
}
timerFn();
var button=document.querySelector(".button");
var left=document.getElementById('x');
var right=document.getElementById('y');
var btn=document.querySelectorAll(".btn div");
left.onclick=function(){

		index--;
		if (index<0) {
			index=div.length-1;
		}
		clearInterval(timer);
		roll2.style.left=-index*div[0].offsetWidth+"px"
		for (var i = 0; i < btn.length; i++) {
			btn[i].className="";
		}
		btn[index].className="active";
	}
right.onclick=function(){
		index++;
		if (index>div.length-1) {
			index=0;
		}
		roll2.style.left=-index*div[0].offsetWidth+"px"
		for (var i = 0; i < btn.length; i++) {
			btn[i].className="";
		}
		btn[index].className="active";
	}


	for (var i = 0; i < btn.length; i++) {

		btn[i].index=i;
		btn[i].onclick=function(){
			for (var i = 0; i < btn.length; i++){
				btn[i].className=""
			}

			this.className="active";
			index=this.index;	
			roll2.style.left=-index*div[0].offsetWidth+"px"
		}
	
	}
	roll.onmouseenter=function(){
		clearInterval(timer)
	}
	roll.onmouseleave=function(){
		timerFn();
	}
	var arr0=["images/j1.png","images/j2.png","images/j3.png","images/j4.png","images/j5.png","images/j6.png","images/j2.png","images/j5.png","images/j3.png"];
	var arr=["images/1.gif","images/2.gif","images/3.gif","images/4.gif","images/5.gif","images/6.gif","images/2.gif","images/5.gif","images/3.gif"];
	var img=div[0].getElementsByTagName("img");
	var img1=div[1].getElementsByTagName("img");
	var img2=div[2].getElementsByTagName("img");

	for (var i = 0; i < img.length; i++) {

		img[i].index=i;
		img[i].onclick=function(){
			for (var i = 0; i < img.length; i++){
				img[i].src=arr0[i];
			}
            
			this.src=arr[index];
			
		}
	
	}
	for (var i = 0; i < img1.length; i++) {

		img1[i].index=i;
		img1[i].onclick=function(){
			for (var i = 0; i < img1.length; i++){
				img1[i].src=arr0[i+3];
			}
            
			this.src=arr[index+3];
			
		}
	
	}
	for (var i = 0; i < img2.length; i++) {

		img2[i].index=i;
		img2[i].onclick=function(){
			for (var i = 0; i < img2.length; i++){
				img2[i].src=arr0[i+6];
			}
            
			this.src=arr[index+6];
			
		}
	
	}













