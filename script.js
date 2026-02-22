const senha = document.getElementById("senha");
const toggle = document.getElementById("toggle-senha");

toggle.addEventListener("click", () => {
    if (senha.type === "password") {
        senha.type = "text";
        toggle.classList.replace("bx-hide", "bx-show");
} else {
    senha.type = "password";
    toggle.classList.replace("bx-show", "bx-hide");
}
});
