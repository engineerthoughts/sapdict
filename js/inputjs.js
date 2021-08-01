var inputques = [
['ques 1','optiona1','optionb1','optionc1','a'],
['ques 2','optiona2','optionb2','optionc2','a'],
['ques 3','optiona3','optionb3','optionc3','a'],
['ques 4','optiona4','optionb4','optionc4','a'],
['ques 5','optiona5','optionb5','optionc5','a'],
['ques 6','optiona6','optionb6','optionc6','a'],
['ques 7','optiona7','optionb7','optionc7','a'],
['ques 8','optiona8','optionb8','optionc8','a'],
['ques 9','optiona9','optionb9','optionc9','a'],
['ques 10','optiona10','optionb10','optionc10','a'],
['ques 11','optiona11','optionb11','optionc11','a'],
['ques 12','optiona12','optionb12','optionc12','a'],
['ques 13','optiona13','optionb13','optionc13','a'],
['ques 14','optiona14','optionb14','optionc14','a'],
['ques 15','optiona15','optionb15','optionc15','a']
];

correctanswers = [];

var arr = [];
while(arr.length < 10){
    var r = Math.floor(Math.random() * (inputques.length-1));
    if(arr.indexOf(r) === -1) arr.push(r);
}
// console.log(arr);

for (ci=0;ci<10;ci++)
{
	tempci = ci+1;
	var quesci = 'quest'+tempci;
	var optaci = 'optiona'+tempci;
	var optbci = 'optionb'+tempci;
	var optcci = 'optionc'+tempci;
	// console.log(quesci+optaci+optbci+optcci);
	correctanswers[ci] = inputques[arr[ci]][4];
	document.getElementById(quesci).innerHTML = tempci+ '. ' +inputques[arr[ci]][0];
	document.getElementById(optaci).innerHTML = 'a) ' + inputques[arr[ci]][1];
	document.getElementById(optbci).innerHTML = 'b) ' + inputques[arr[ci]][2];
	document.getElementById(optcci).innerHTML = 'c) ' + inputques[arr[ci]][3];
}
console.log(correctanswers);