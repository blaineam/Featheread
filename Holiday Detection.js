function Easter(Y) {
    var C = Math.floor(Y/100);
    var N = Y - 19*Math.floor(Y/19);
    var K = Math.floor((C - 17)/25);
    var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
    I = I - 30*Math.floor((I/30));
    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
    var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
    J = J - 7*Math.floor(J/7);
    var L = I - J;
    var M = 3 + Math.floor((L + 40)/44);
    var D = L + 28 - 31*Math.floor(M/4);

    return M + '.' + D;
}



function checkholiday(){
	var currentdate = new Date();
	var currentyear = currentdate.getFullYear();
	var currentmonth = currentdate.getMonth();
	var currentday = currentdate.getDate();
	var currentweekday = currentdate.getDay();
	var currenthour = currentdate.getHours();
	var currentminutes = currentdate.getMinutes();
	var weeknumber = 0 | currentdate.getDate() / 7;
	var monthstartweekday = new Date(currentyear, currentmonth, 1).getDay();
	var eastersunday = Easter(currentyear);
	var eastersundaymonth = eastersunday.split(".")[0]-1;
	var eastersundayday = eastersunday.split(".")[1];
	
	
	
	//temporaryoverides
	if(currentyear==2015&&currentmonth==10&&currentday<=20){
		
	return "-paris";
	}
	
	
	
	
	//check for veterans day
	if(currentmonth==10&&currentday==11){
		return "veterans";
	}
	
	//check for valantines day
	if(currentmonth==1&&currentday==14){
		return "valentines";
	}
	
	//check for halloween
	if(currentmonth==9&&currentday==31){
		return "halloween";
	}
	
	//check for independenceday
	if(currentmonth==3&&currentday==4){
		return "fourthofjuly";
	}
	
	//check for stpatricksday
	if(currentmonth==2&&currentday==17){
		return "stpatricks";
	}
	
	//check for easter
	if(currentmonth==eastersundaymonth&&currentday==eastersundayday){
		return "easter";
	}
	
	//check for newyears
	if(currentmonth==0&&currentday==1){
		return "newyears";
	}
	
	//check for christmas
	if((currentmonth==10&&currentday>=30)||(currentmonth==11&&currentday<26)){
		return "christmas";
	}
	
	//checkforthanksgiving
	if(((weeknumber==3&&monthstartweekday<=4)||(weeknumber==4&&monthstartweekday>4))&&currentweekday==4){
		return "thanksgiving";
	}
	
	
	
	
	return "";
}

console.log(checkholiday());
	  //change content to reflect the holiday
	//$(".logo").attr("src", "Featheread Header logo"+checkholiday()+".png");