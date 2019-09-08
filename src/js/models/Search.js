import axios from 'axios';

export default class Search {
    constructor(searchValue) {
        this.searchValue = searchValue;        
    }
    async getResults() {
        // const forkifyKey = 'a2afc4c9a896f43c1295277f940952fb';
        const forkifyKey = '5ff3581619381807a187fde28a7b4a7a'
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${forkifyKey}&q=${this.searchValue}`);
            this.result =  res.data.recipes;
        } catch {
            alert('ERROR OCCURED')
        }
    }
}
