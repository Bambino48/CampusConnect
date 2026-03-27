document.addEventListener("DOMContentLoaded", function initForm() {
    const form = document.getElementById("registrationForm");
    const formMessage = document.getElementById("formMessage");

    if (!form || !formMessage) {
        return;
    }

    const storageKey = "campusconnect-registrations";

    function setError(field, message) {
        const wrapper = field.closest(".form-field");
        const errorNode = wrapper ? wrapper.querySelector(".error-message") : null;

        if (!wrapper || !errorNode) {
            return;
        }

        wrapper.classList.add("has-error");
        errorNode.textContent = message;
    }

    function clearError(field) {
        const wrapper = field.closest(".form-field");
        const errorNode = wrapper ? wrapper.querySelector(".error-message") : null;

        if (!wrapper || !errorNode) {
            return;
        }

        wrapper.classList.remove("has-error");
        errorNode.textContent = "";
    }

    function validateField(field) {
        const value = field.value.trim();

        if (field.name === "fullname" && value.length < 3) {
            setError(field, "Entre un nom complet valide.");
            return false;
        }

        if (field.name === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(value)) {
                setError(field, "Entre une adresse email valide.");
                return false;
            }
        }

        if (field.name === "department" && value.length < 2) {
            setError(field, "Précise ta filière.");
            return false;
        }

        if (field.name === "event" && !value) {
            setError(field, "Choisis un événement.");
            return false;
        }

        if (field.name === "message" && value.length < 12) {
            setError(field, "Ajoute une motivation un peu plus précise.");
            return false;
        }

        clearError(field);
        return true;
    }

    Array.from(form.elements).forEach(function bindLiveValidation(element) {
        if (!(element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement)) {
            return;
        }

        element.addEventListener("input", function onInput() {
            validateField(element);
        });
    });

    form.addEventListener("submit", function onSubmit(event) {
        event.preventDefault();

        const fields = Array.from(form.querySelectorAll("input, select, textarea"));
        const isFormValid = fields.every(function validate(element) {
            return validateField(element);
        });

        if (!isFormValid) {
            formMessage.textContent = "Le formulaire contient encore des erreurs.";
            formMessage.className = "form-feedback";
            return;
        }

        const payload = {
            fullname: form.fullname.value.trim(),
            email: form.email.value.trim(),
            department: form.department.value.trim(),
            event: form.event.value,
            message: form.message.value.trim(),
            submittedAt: new Date().toISOString()
        };

        const existingEntries = JSON.parse(localStorage.getItem(storageKey) || "[]");
        existingEntries.push(payload);
        localStorage.setItem(storageKey, JSON.stringify(existingEntries));

        form.reset();
        fields.forEach(clearError);
        formMessage.textContent = "Inscription enregistrée localement. Tu peux maintenant relier le formulaire à un backend.";
        formMessage.className = "form-feedback success";
    });
});
