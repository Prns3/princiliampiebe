
document.getElementById('form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value.trim();
    let number = document.getElementById('number').value.trim();
    let email = document.getElementById('email').value.trim();
    let raison = document.getElementById('raison').value.trim();
    
    let valid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('numberError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('raisonError').textContent = '';
    document.getElementById('confirmationMessage').innerHTML = ''; // Réinitialiser le message de confirmation

    // Validation des champs
    if (!name) {
        document.getElementById('nameError').textContent = 'Veuillez entrer votre nom complet.';
        valid = false;
    }
    if (!number) {
        document.getElementById('numberError').textContent = 'Veuillez entrer votre numéro de téléphone.';
        valid = false;
    }
    if (!email) {
        document.getElementById('emailError').textContent = 'Veuillez entrer votre adresse mail.';
        valid = false;
    }
    if (!raison) {
        document.getElementById('raisonError').textContent = 'Veuillez indiquer pourquoi vous souhaitez me rencontrer.';
        valid = false;
    }

    // Empêcher la soumission si un champ est invalide
    if (!valid) {
        event.preventDefault();
    } else {
        event.preventDefault(); // Empêche l'envoi immédiat du formulaire
        document.getElementById('confirmationMessage').innerHTML = '<strong>Merci</strong>, votre demande de rendez-vous a bien été envoyée !';
    }
});

