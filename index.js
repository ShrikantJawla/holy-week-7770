
let is_sign_inData = JSON.parse(localStorage.getItem("is_signed_in")) || [];

let signInBtn = document.querySelector("#SignIn");
if (is_sign_inData.length !== 0) {
    signInBtn.innerText = "Hi " + is_sign_inData[0].name;
    signInBtn.style.color = "red";
    let aTag=document.createElement("a");
    aTag.innerText = "Sign Out";
    aTag.style.color = "red";
    aTag.style.cursor = "pointer";
    aTag.addEventListener("click", () => {
        is_sign_inData = [];
        localStorage.setItem("is_signed_in", JSON.stringify(is_sign_inData));
        window.location.href = "index.html";
    })
    document.querySelector("#navItems").append(aTag);
}

let nav = document.querySelector("#navItems");

let clickBtn = document.getElementById("homeBtn");
clickBtn.addEventListener("click", () => {
    if (nav.className === "menus") {
        nav.className += "_anmol";
    } else {
        nav.className = "menus";
    }
})
