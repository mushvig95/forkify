import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

const state = {};

const controlSearch = async () => {
    // 1. get query from view
    // 2. if there is a query create new Search object and add to state
    // 3. Clear previous results and show a loading spinner
    // 4. Search for recepies
    // 5. render results on UI after receiving results
    const query = searchView.getInput();
    console.log(query);
    if(query) {
        state.search = new Search(query);
        searchView.clearResult();
        searchView.clearResultList();
        await state.search.getResults();
        console.log(state.search.result);
        searchView.renderResults(state.search.result);

    }
}

elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
})