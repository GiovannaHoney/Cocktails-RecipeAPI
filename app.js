import showDrinks from './src/showDrinks.js';
import './src/searchForm.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=o';

window.addEventListener('DOMContentLoaded', () => {
  showDrinks(URL);
});
