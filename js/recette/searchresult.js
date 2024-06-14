document.addEventListener('DOMContentLoaded', function() {
    const resultsDiv = document.querySelector('.grid_myr');
    const searchResults = JSON.parse(sessionStorage.getItem('searchResults'));

    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');

    const searchQueryElement = document.getElementById('searchQuery');
    searchQueryElement.textContent = searchTerm;

    if (searchResults && !searchResults.error) {
        searchResults.message.forEach(recipe => {
            const recipeDiv = document.createElement('ul');
            recipeDiv.classList.add('user_rct');
            recipeDiv.innerHTML = `<li class="img_myrct">
                                    <a href="./recette?id=${recipe.idrecette}" >
                                    <img src="${recipe.image_recette}" alt="image recette">
                                     </a>
                                    </li>
                                    <li class="title">${recipe.titrerecette}</li>
                                `;
            resultsDiv.appendChild(recipeDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>Aucun résultat trouvé.</p>';
    }
});