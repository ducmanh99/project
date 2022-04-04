const form = document.querySelector(".form");
const usernameInput = document.querySelector(".user");
const passwordInput = document.querySelector(".password");
const confirmInput = document.querySelector(".confirmpass");
const button = document.querySelector(".btn");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const use = usernameInput.value;
	const pass = passwordInput.value;
	const confirm = confirmInput.value;

	if (pass !== confirm) {
		alert("incorrect confirm password");
		return;
	}
	const users = localStorage.getItem("users")
		? JSON.parse(localStorage.getItem("users"))
		: [];
	users.push({
		username: use,
		password: pass,
	});
	localStorage.setItem("users", JSON.stringify(users));
	alert("Đăng kí thành công");
	usernameInput.value = "";
	passwordInput.value = "";
	confirmInput.value = "";
});
