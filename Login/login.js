const form = document.querySelector(".form");
const usenamesignup = document.querySelector(".user");
const passwordsignup = document.querySelector(".pass");
const button = document.querySelector(".btn");

form.addEventListener("submit", (m) => {
	m.preventDefault();
	const user = usenamesignup.value;
	const password = passwordsignup.value;
	const users = localStorage.getItem("users")
		? JSON.parse(localStorage.getItem("users"))
		: [];

	const currentUser = {
		userName: user,
		pass: password,
	};
	const findUser = users.find(
		(u) =>
			u.username === currentUser.userName &&
			u.password === currentUser.pass
	);
	if (findUser) {
		localStorage.setItem("currentUser", JSON.stringify(findUser));
		window.location.href = "/project/home/Home.html";
	} else {
		alert("Mật khẩu không đúng hoặc chưa có tài khoản");
	}
});
