var operand1,operand2,temp="",result,operator,tempDisplay="";
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
		default:result=NaN;
	}
	document.getElementById("disp").innerHTML=result;
	tempDisplay="";
}
