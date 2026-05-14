const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let valid = true;
        success.textContent = "";

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const fields = [name, email, message];

        fields.forEach(field => {
            const error = field.parentElement.querySelector(".error");
            if (!field.value.trim()) {
                error.textContent = "Ce champ est obligatoire.";
                valid = false;
            } else {
                error.textContent = "";
            }
        });

        const emailError = email.parentElement.querySelector(".error");
        if (email.value && !email.value.includes("@")) {
            emailError.textContent = "Adresse email invalide.";
            valid = false;
        }

        if (valid) {
            success.textContent = "Message envoyé . Merci pour ton contact !";
            form.reset();
        }
    });
}
