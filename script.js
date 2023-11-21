/* responsive navbar*/

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/*form validation*/

function validateTextField() {
			let name=document.myform.name.value;
			if (name.length<=1) {
				alert('Name too short.'); return false;
			}
			if (name==null || name=='') { 
				alert('Please, fill the name field'); return false;
		}

	}

function validateNumber(){
	let num = document.myform.number.value;
	if (isNaN(num)){ alert('Invalid Password');
	return false;
}else {
	return true;
	}
}



