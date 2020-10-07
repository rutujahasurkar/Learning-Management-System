function loginClick()
{
	window.location.href = "question1.html";
}

function q1Submit()
{
	sessionStorage.removeItem('mathsCorrect');
	sessionStorage.removeItem('mathsNoAnswer');
	if(document.getElementById('4').checked){
		sessionStorage.setItem('mathsCorrect', '1');
  	}
  	else if(document.getElementById('3').checked || document.getElementById('2').checked
  		|| document.getElementById('1').checked) {
  	}
	  else
	  {
		sessionStorage.setItem('mathsNoAnswer', '1');
  	}
	window.location.href = "question2.html";	  	
}

function q1Clear()
{
	sessionStorage.removeItem('mathsCorrect');
	sessionStorage.removeItem('mathsNoAnswer');
	document.getElementById('4').checked=false;
	document.getElementById('3').checked=false;
	document.getElementById('2').checked=false;
	document.getElementById('1').checked=false;
}

function q2Submit(){

	if(document.getElementById('6').checked) {
  		if(sessionStorage.getItem('mathsCorrect') != null){
			sessionStorage.setItem('mathsCorrect', '2');
  		}
  		else 	sessionStorage.setItem('mathsCorrect', '1');
  	}
  	else if(document.getElementById('5').checked || document.getElementById('7').checked
  		|| document.getElementById('8').checked) {
  	}
  	else{
  		if(sessionStorage.getItem('mathsNoAnswer') != null){
			sessionStorage.setItem('mathsNoAnswer', '2');
  		}
  		else sessionStorage.setItem('mathsNoAnswer', '1');
  	}
	window.location.href = "question3.html";	  	
}

function q2Clear(){
	document.getElementById('5').checked=false;
	document.getElementById('6').checked=false;
	document.getElementById('7').checked=false;
	document.getElementById('8').checked=false;
}

function mark1(id)
{
	document.getElementById('price').innerHTML='$'+document.getElementById(id).value;
}

function mark2(id)
{
	document.getElementById('company').innerHTML=document.getElementById(id).value;
}

function q3Submit(){
	sessionStorage.removeItem('englishCorrect');
	sessionStorage.removeItem('englishNoAnswer');
	if(document.getElementById('10').checked && document.getElementById('13').checked)
	{
  		sessionStorage.setItem('englishCorrect', '1');
  	}
	else
	{
  		sessionStorage.setItem('englishNoAnswer', '1');
  	}
	window.location.href = "question4.html";	  	
}

function clearMarks()
{
	document.getElementById('price').innerHTML="$______";
	document.getElementById('company').innerHTML="_____________";
}

function q3Clear()
{
	sessionStorage.removeItem('englishCorrect');
	sessionStorage.removeItem('englishNoAnswer');
	document.getElementById('9').checked=false;
	document.getElementById('10').checked=false;
	document.getElementById('11').checked=false;
	document.getElementById('12').checked=false;
	document.getElementById('13').checked=false;
    document.getElementById('14').checked=false;
    clearMarks();
}

function q4Submit()
{
	sessionStorage.removeItem('audioCorrect');
	sessionStorage.removeItem('audioNoAnswer');
	if(document.getElementById('15').checked) 
	{
  		sessionStorage.setItem('audioCorrect', '1');
  	}	
	else
	{
  		sessionStorage.setItem('audioNoAnswer', '1');
  	}
	window.location.href = "surveypage.html";	  	
}

function q4Clear()
{
	sessionStorage.removeItem('audioCorrect');
	sessionStorage.removeItem('audioNoAnswer');
	document.getElementById('15').checked=false;
	document.getElementById('16').checked=false;
	document.getElementById('17').checked=false;
	document.getElementById('18').checked=false;
}

function surveySubmit()
{
	window.location.href = "scorecard.html";
}

function findResults()
{
	if(sessionStorage.getItem('mathsNoAnswer') == null)
	{
		document.getElementById('mathsAnswered').innerHTML='<b>Number of Questions Answered:</b> '+2;
	}
	else if(sessionStorage.getItem('mathsNoAnswer') == "1")
	{
		document.getElementById('mathsAnswered').innerHTML='</b>Number of Questions Answered:</b> '+1;
	}
	else
	{
		document.getElementById('mathsAnswered').innerHTML='<b>Number of Questions Answered:</b> '+0;
	} 	
	if(sessionStorage.getItem('mathsCorrect') == null)
	{
		document.getElementById('mathsCorrect').innerHTML='<b>Number of Questions Correct:</b> '+0;
		document.getElementById('mathsScore').innerHTML='<b>Score:</b> '+0;
	}
	else if(sessionStorage.getItem('mathsCorrect') == "1")
	{
		document.getElementById('mathsCorrect').innerHTML='<b>Number of Questions Correct:</b> '+1;
		document.getElementById('mathsScore').innerHTML='<b>Score:</b> '+50;
	}
	else
	{
		document.getElementById('mathsCorrect').innerHTML='<b>Number of Questions Correct:</b> '+2;
		document.getElementById('mathsScore').innerHTML='<b>Score:</b> '+100;
	}

	if(sessionStorage.getItem('englishNoAnswer') == null)
	{
		document.getElementById('readingAnswered').innerHTML='<b>Number of Questions Answered</b>: '+1;
	}
	else 	
	{
		document.getElementById('readingAnswered').innerHTML='<b>Number of Questions Answered</b>: '+0;
	}
	if(sessionStorage.getItem('englishCorrect') == null)
	{
		document.getElementById('readingCorrect').innerHTML='<b>Number of Questions Correct:</b> '+0;
		document.getElementById('readingScore').innerHTML='<b>Score:</b> '+0;
	}
	else
	{
		document.getElementById('readingCorrect').innerHTML='<b>Number of Questions Correct:</b> '+1;
		document.getElementById('readingScore').innerHTML='<b>Score:</b> '+100;
	}

	if(sessionStorage.getItem('audioNoAnswer') == null)
	{
		document.getElementById('audioAnswered').innerHTML='<b>Number of Questions Answered:</b> '+1;
	}
	else
	{
		document.getElementById('audioAnswered').innerHTML='<b>Number of Questions Answered:</b> '+0;
	} 	
	if(sessionStorage.getItem('audioCorrect') == null)
	{
		document.getElementById('audioCorrect').innerHTML='<b>Number of Questions Correct:</b> '+0;
		document.getElementById('audioScore').innerHTML='<b>Score:</b> '+0;
	}
	else
	{
		document.getElementById('audioCorrect').innerHTML='<b>Number of Questions Correct:</b> '+1;
		document.getElementById('audioScore').innerHTML='<b>Score:</b> '+100;
	}

}

function finish()
{
	window.location.href = "login.html";
}