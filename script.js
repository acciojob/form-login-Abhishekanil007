function getFormvalue() {
    //Write your code here
	let firstname = document.getElementsByName("fname")[0].value;
	let lastname = document.getElementsByName("lname")[0].value;
	alert(firstname+" "+lastname);
}
