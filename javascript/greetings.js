const loginInput = document.querySelector(".form input");
const loginForm = document.querySelector(".form ");
const header = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";
const savedUsername = localStorage.getItem("username");

function loginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm
        .classList
        .add(HIDDEN_CLASSNAME)
    header
        .classList
        .remove(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    header.innerText = `Hello ${username}`;

}
function greetings(username) {

    loginForm
        .classList
        .add(HIDDEN_CLASSNAME)
    header
        .classList
        .remove(HIDDEN_CLASSNAME);
    header.innerText = `Hello ${username}`;
}

if (savedUsername === null) {
    loginForm.addEventListener("submit", loginSubmit);

} else {
    greetings(savedUsername);
    
}
 