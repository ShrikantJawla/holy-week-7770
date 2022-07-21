/** @format */

let nav = document.querySelector("#navItems");

let clickBtn = document.getElementById("homeBtn");
clickBtn.addEventListener("click", () => {
	if (nav.className === "menus") {
		nav.className += "_anmol";
	} else {
		nav.className = "menus";
	}
});
