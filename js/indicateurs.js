// Fonction pour afficher l'alerte de confirmation
function showAlert(button) {
    const alertContainer = document.getElementById("alertContainer");
    const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
    const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");

    // Afficher l'alerte
    alertContainer.style.display = 'block';

    // Récupérer la ligne à supprimer
    const row = button.closest("tr");

    // Quand on clique sur "Supprimer", on supprime la ligne
    confirmDeleteBtn.onclick = function() {
        row.remove();
        alertContainer.style.display = 'none'; // Masquer l'alerte après la suppression
    };

    // Quand on clique sur "Annuler", on cache simplement l'alerte
    cancelDeleteBtn.onclick = function() {
        alertContainer.style.display = 'none';
    };
}

// Fonction de suppression (modifiée pour afficher l'alerte)
function deleteRow(button) {
    showAlert(button);
}
