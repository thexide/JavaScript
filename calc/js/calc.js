var firstNumber=document.getElementById('calc-firstnum');
var znak=document.getElementById('calc-znak');
var secondNumber=document.getElementById('calc-secondnum');
var result=document.getElementById('calc-equal');
var number = 0;
result.value = '';
znak.value = '',

document.getElementById('btn0').onclick=function(event) { if(number== 0) { firstNumber.value+= '0'; }
	if(number== 1){secondNumber.value+= '0'; }}
document.getElementById('btn1').onclick=function(event) { if(number== 0) { firstNumber.value+= '1'; }
	if(number== 1){secondNumber.value+= '1'; }}
document.getElementById('btn2').onclick=function(event) { if(number== 0) { firstNumber.value+= '2'; }
	if(number== 1){secondNumber.value+= '2'; }}
document.getElementById('btn3').onclick=function(event) { if(number== 0) { firstNumber.value+= '3'; }
	if(number== 1){secondNumber.value+= '3'; }}
document.getElementById('btn4').onclick=function(event) { if(number== 0) { firstNumber.value+= '4'; }
	if(number== 1){secondNumber.value+= '4'; }}
document.getElementById('btn5').onclick=function(event) { if(number== 0) { firstNumber.value+= '5'; }
	if(number== 1){secondNumber.value+= '5'; }}
document.getElementById('btn6').onclick=function(event) { if(number== 0) { firstNumber.value+= '6'; }
	if(number== 1){secondNumber.value+= '6'; }}
document.getElementById('btn7').onclick=function(event) { if(number== 0) { firstNumber.value+= '7'; }
	if(number== 1){secondNumber.value+= '7'; }}
document.getElementById('btn8').onclick=function(event) { if(number== 0) { firstNumber.value+= '8'; }
	if(number== 1){secondNumber.value+= '8'; }}
document.getElementById('btn9').onclick=function(event) { if(number== 0) { firstNumber.value+= '9'; }
	if(number== 1){secondNumber.value+= '9'; }}
 
document.getElementById('btnC').onclick=function(event){ firstNumber.value = ''; secondNumber.value = ''; znak.value = ''; number = 0; result.value = ''; }
document.getElementById('btnPlus').onclick=function(event){number = 1; znak.value= '+';} 
document.getElementById('btnMinus').onclick=function(event){ number='1'; znak.value='-'; }
document.getElementById('btnMultiply').onclick=function(event){ number='1'; znak.value='*'; }
document.getElementById('btnDevide').onclick=function(event){ number='1'; znak.value='/'; }
document.getElementById('btnEquals').onclick=function(event) { 
if (znak.value == '+') {
	result.value = Number(firstNumber.value)+Number(secondNumber.value)}
else if (znak.value=='-') {
	result.value = Number(firstNumber.value)-Number(secondNumber.value)}
else if (znak.value=='*') {
	result.value = Number(firstNumber.value)*Number(secondNumber.value)}
else if (znak.value=='/') {
	result.value = Number(firstNumber.value)/Number(secondNumber.value)}
	return false;
}