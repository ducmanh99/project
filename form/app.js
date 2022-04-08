const form = document.querySelector(".block");
const inputName = document.querySelector(".input-name");
const inputDate = document.querySelector(".input-date");
const inputAddress = document.querySelector(".input-address");
const inputEmail = document.querySelector(".input-email");
const inputPhone = document.querySelector(".input-phone");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	alert("Đăng kí khóc học thành công");
	inputName.value = "";
	inputDate.value = "";
	inputAddress.value = "";
	inputEmail.value = "";
	inputPhone.value = "";
	window.location.href = "/project/home/Home.html";
});
