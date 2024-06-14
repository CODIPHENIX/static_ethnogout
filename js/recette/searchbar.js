document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchFormR = document.getElementById('searchFormR');
    const searchQueryInput = document.getElementById('search_bar');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const searchQuery = searchQueryInput.value.trim();

        if (searchQuery.length > 0) {
            fetch(`/project_ethnogout/api/recette/searchrecette.php?search=${encodeURIComponent(searchQuery)}`)
                .then(response => response.json())
                .then(data => {
                    sessionStorage.setItem('searchResults', JSON.stringify(data));
                    window.location.href = `search.php?search=${encodeURIComponent(searchQuery)}`;
                })
                .catch(error => console.error('Erreur lors de la requête :', error));
        } else {
            alert('Veuillez entrer un terme de recherche.');
        }
    });
});