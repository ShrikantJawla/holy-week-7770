/** @format */

let data = JSON.parse(localStorage.getItem("signUp-data")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();

	let obj = {
		name: form.name.value,
		email: form.email.value,
		pass: form.pass.value
	};

	let is_true = false;
	data.forEach((ele) => {
		if (ele.email === obj.email || ele.name === obj.name) {
			is_true = true;
		}
	});
	if (is_true) {
		alert("This User already exist!!");
		return;
	}
	data.push(obj);
	localStorage.setItem("signUp-data", JSON.stringify(data));
	window.location.href = "../signIn_Page/signIn.html";
});

function submitEnable() {
	if (
		form.name.value !== "" &&
		form.email.value !== "" &&
		form.pass.value !== ""
	) {
		document.getElementById("submitbtn").disabled= false;
	}else{
		document.getElementById("submitbtn").disabled = true;
	}
}
