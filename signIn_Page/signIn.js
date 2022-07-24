/** @format */

let data = JSON.parse(localStorage.getItem("signUp-data")) || [];
let is_signed_inData = JSON.parse(localStorage.getItem("is_signed_in")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();

	let obj = {
		email: form.email.value,
		pass: form.pass.value
	};

	let is_true = false;
	data.forEach((ele) => {
		if (ele.email === obj.email && ele.pass === obj.pass) {
			is_true = true;
			obj["name"] = ele.name;
		}
	});
	if (is_true) {
		alert("sign in successful");
		is_signed_inData = [];
		is_signed_inData.push(obj);
		localStorage.setItem("is_signed_in", JSON.stringify(is_signed_inData));
		window.location.href = "../index.html";
	} else {
		alert("No such data found please sign up first!!");
		return;
	}
});

function signInEnable() {
	if (form.email.value !== "" && form.pass.value !== "") {
		document.getElementById("submitbtn").disabled = false;
	} else {
		document.getElementById("submitbtn").disabled = true;
	}
}
