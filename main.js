var operand1="",operand2="",temp="",result="",operator="",tempDisplay="";
function add2str(a){
	temp=temp+a;
	tempDisplay=tempDisplay+a;
	document.getElementById("disp").innerHTML=tempDisplay;
	
}
function changeOperand(op){
	operand1=temp;
	temp="";
	operator=op;
	tempDisplay=tempDisplay+op;
	document.getElementById("disp").innerHTML=tempDisplay;
}
function calculate(){
	operand2=temp;
	temp="";
	operand2=Number(operand2);
	operand1=Number(operand1);
	switch (operator){
		case "+":result=operand1+operand2;
				break;
		case "-":result=operand1-operand2;
				break;
		case "X":result=operand1*operand2;
				break;
		case "/":result=operand1/operand2;
				break;
		default:result=operand2;
	}
	document.getElementById("disp").innerHTML=result;
	tempDisplay="";
}
function C() {
	temp="";
	tempDisplay="";
	document.getElementById('disp').innerHTML=tempDisplay;
}
function CE() {
	tempDisplay=operand1+operator;
	temp="";
	document.getElementById('disp').innerHTML=tempDisplay;
}
function backSpace() {
	tempDisplay=tempDisplay.substring(0,tempDisplay.length-1);
	if(temp.length>0){
		temp=temp.substring(0,temp.length-1);
	}
	else if(operand1.length>0){
		temp=operand1;
	}
	document.getElementById('disp').innerHTML=tempDisplay;
}