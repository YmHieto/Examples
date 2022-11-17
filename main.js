console.log("main.js!!");

// カルーセルをJavaScriptで操作する

window.onload = ()=>{
	console.log("Onload!!");

	// Carouselオブジェクト
	const carouselObj = new bootstrap.Carousel("#carouselExample",{
		interval: 1000,//スライドする間隔
		ride: false
	});
	carouselObj.pause();//停止

	//開始
	document.querySelector(".start-slide").onclick = ()=>{
		carouselObj.cycle();//開始
	};

	document.querySelector(".pause-slide").onclick = ()=>{
		carouselObj.pause();//停止
	};
	//前へ
	document.querySelector(".prev-slide").onclick = function(){
		carouselObj.prev();
	};

	//次へ
	document.querySelector(".next-slide").onclick = function(){
		carouselObj.next();
	};

	//第1
	document.querySelector(".slide-first").onclick = function(){
		carouselObj.to(0);
	};
	//第2
	document.querySelector(".slide-second").onclick = function(){
		carouselObj.to(1);
	};
	//第3
	document.querySelector(".slide-third").onclick = function(){
		carouselObj.to(2);
	};
}