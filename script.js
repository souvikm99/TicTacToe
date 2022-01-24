var x;
var flag = 0;
const fruits = [5,5,5,5,5,5,5,5,5];

function radioBtn() {
x = document.querySelector('input[name="size"]:checked').value;
console.log(x);
document.getElementById("msg").style.display = "none";
}

function XO() {
	if(x === "X") {
		let block;
		block = document.querySelector('input[name="tile"]:checked').value;
		document.getElementById(block).innerHTML=`
		<img src="X.png" class="grid-item" />
		`;
		console.log(block);
		fruits[block] = 1,
		console.log(fruits);
		winner(fruits);
		flag += 1;
		console.log("flag = "+flag);

	}
	else if(x==="O"){
		let block;
		block = document.querySelector('input[name="tile"]:checked').value;
		document.getElementById(block).innerHTML=`
		<img src="O.png" class="grid-item" />
		`;
		console.log(block);
		fruits[block] = 0,
		console.log(fruits);
		winner(fruits);
		flag += 1;
		console.log("flag = "+flag);
	}
	else{
		document.getElementById("msg").style.display = "block";
		document.getElementById("msg").innerHTML=`
		<b>Select a side</b>
		`;
		console.log('Select a side');

	}
}

function winner(yo) {
	
	if(yo[1]==1 && yo[2]==1 && yo[3]==1) {
	newGame();
	document.getElementById("p").innerHTML=`
		X won
		`;
			document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(0deg);transform: rotate(90deg); margin-top:-165px";
	}
	else if(yo[1]==1 && yo[4]==1 && yo[7]==1) {
	newGame();
		document.getElementById("p").innerHTML=`
		X won
		`;
		document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(0deg);transform: rotate(0deg); margin-left:-165px";
	}
	
	else if(yo[1]==1 && yo[5]==1 && yo[9]==1) {
	newGame();
		document.getElementById("p").innerHTML=`
		X won
		`;
		document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(-48deg);transform: rotate(-42deg);";
	}
	
	else if(yo[2]==1 && yo[5]==1 && yo[8]==1) {
	newGame();
		document.getElementById("p").innerHTML=`
		X won
		`;
	document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(0deg);transform: rotate(0deg);";
	
	}
	
	else if(yo[3]==1 && yo[6]==1 && yo[9]==1) {
	newGame();
		document.getElementById("p").innerHTML=`
		X won
		`;
			document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(0deg);transform: rotate(0deg); margin-left:165px";
	}
	
	else if(yo[4]==1 && yo[5]==1 && yo[6]==1) {
	newGame();
		document.getElementById("p").innerHTML=`
		X won
		`;
			document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(0deg);transform: rotate(90deg);";
	}
	
	else if(yo[7]==1 && yo[8]==1 && yo[9]==1) {
	newGame();
		document.getElementById("p").innerHTML=`
		X won
		`;
		document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(0deg);transform: rotate(90deg); margin-top:165px";
	}
	
	else if(yo[3]==1 && yo[5]==1 && yo[7]==1) {
	newGame();
		document.getElementById("p").innerHTML=`
		X won
		`;
		
	document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(48deg);transform: rotate(42deg);";
	}
	
	//O portion//
	
	if(yo[1]==0 && yo[2]==0 && yo[3]==0) {
	newGame();
		document.getElementById("p").innerHTML=`
		O won
		`;
			document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(0deg);transform: rotate(90deg); margin-top:-165px";
		
	}
	else if(yo[1]==0 && yo[4]==0 && yo[7]==0) {
	newGame();
			document.getElementById("p").innerHTML=`
		O won
		`;
		document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(0deg);transform: rotate(0deg); margin-left:-165px";
	}
	
	else if(yo[1]==0 && yo[5]==0 && yo[9]==0) {
	newGame();
			document.getElementById("p").innerHTML=`
		O won
		`;
	document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(-48deg);transform: rotate(-42deg);";
	}
	
	else if(yo[2]==0 && yo[5]==0 && yo[8]==0) {
	newGame();
			document.getElementById("p").innerHTML=`
		O won
		`;
		
	document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(0deg);transform: rotate(0deg);";
	}
	
	else if(yo[3]==0 && yo[6]==0 && yo[9]==0) {
	newGame();
			document.getElementById("p").innerHTML=`
		O won
		`;
		document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(0deg);transform: rotate(0deg); margin-left:165px";
	}
	
	else if(yo[4]==0 && yo[5]==0 && yo[6]==0) {
	newGame();
			document.getElementById("p").innerHTML=`
		O won
		`;
		document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(0deg);transform: rotate(90deg);";
	}
	
	else if(yo[7]==0 && yo[8]==0 && yo[9]==0) {
	newGame();
			document.getElementById("p").innerHTML=`
		O won
		`;
		document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(0deg);transform: rotate(90deg); margin-top:165px";
		
	
		
	}
	
	else if(yo[3]==0 && yo[5]==0 && yo[7]==0) {
	newGame();
			document.getElementById("p").innerHTML=`
		O won
		`;
		
	document.getElementById("line").style.cssText = "display:block;	-ms-transform: rotate(48deg);transform: rotate(42deg);";
	}
	
	//draw//
	//else if(yo[1] !=5 && yo[2] !=5 && yo[3] !=5 && 
	//yo[4] !=5 && yo[5] !=5 && yo[6] !=5 && yo[7] !=5 && 
	//yo[8] !=5 && yo[9] !=5 && yo[10] !=5 &&){
	//newGame();
	//}
	else if(flag==8){
	newGame();
			document.getElementById("p").innerHTML=`
		It's a draw!
		`;
	}
}

function  newGame() {
	document.getElementById("overlay").style.display = "block";
	console.log("win");
}

function reload(){
	console.log('works');
	window.location.reload();
	
}