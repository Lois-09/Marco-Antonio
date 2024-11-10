document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const secretInput = document.getElementById('password').value;
        const feedbackMessage = document.getElementById('error-message');
        const validationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=(.*\d){4,})(?=.*[@#$%^&+=!]).{8,}$/;

        if (validationRegex.test(secretInput)) {
            feedbackMessage.textContent = "Ingreso válido";
            feedbackMessage.className = "success";
            window.location.href = "config.html";
        } else {
            feedbackMessage.textContent = "No vas a entrar mano";
            feedbackMessage.className = "error";
        }

        console.log("Entrada ingresada:", secretInput);
        console.log("¿Entrada válida?", validationRegex.test(secretInput));
    });
});
