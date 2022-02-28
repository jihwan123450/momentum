const loginInput = document.querySelector(".form input");
const loginForm = document.querySelector(".form ");
const header = document.querySelector(".formbox h1");
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
    header.innerText = `不患人之不己知 患己不能也`;

}
function greetings(username) {

    loginForm
        .classList
        .add(HIDDEN_CLASSNAME)
    header
        .classList
        .remove(HIDDEN_CLASSNAME);
    header.innerText = `不患人之不己知 患己不能也`;
}

if (savedUsername === null) {
    loginForm.addEventListener("submit", loginSubmit);

} else {
    greetings(savedUsername);
    
}
 