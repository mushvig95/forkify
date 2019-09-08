import { elements } from './base';

export const getInput = () => elements.searchInput.value;

const renderRecipe = recipe => {
    const markup = `
    <li class="recipe">
        <div class="text">
            <p>ID: ${recipe.recipe_id}</p>
            <p>Title: ${recipe.title}</p>
            <p>Author: ${recipe.publisher} </p>
        </div>
        <div class="pic">
            <img src="${recipe.image_url}" alt="a">
        </div> 
    </li>
    `;
    elements.searchResultList.insertAdjacentHTML('beforeend',markup);
};

export const renderResults = (recipes) => {
    recipes.map(e => renderRecipe(e));
};

export const clearResult = () => elements.searchInput.value = '';
export const clearResultList = () => elements.searchResultList.innerHTML = '';
