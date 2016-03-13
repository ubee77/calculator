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
	/*switch (operator){
		case '+':
	}*/
	result=temp;
	document.getElementById("disp").innerHTML=result;
	tempDisplay="";
}