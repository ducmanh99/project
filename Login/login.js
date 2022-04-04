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
	const findUser = users.find((u) => u.userName === currentUser.userName);
	console.log(currentUser);
	console.log(users);
	console.log(findUser);
});
