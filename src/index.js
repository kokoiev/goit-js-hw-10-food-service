import './styles.css';
import theme from "./theme"
import itemsTemplates from "./items-templates.hbs"
import menuList from "./menu.json"
console.log(menuList)
console.log(itemsTemplates)
const markUp = itemsTemplates(menuList);
console.log(markUp)
const refs = {
    theme: document.querySelector('.theme-switch'),
    input: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
    menu: document.querySelector('.js-menu')
};
 
refs.menu.insertAdjacentHTML('beforeend', markUp)
refs.theme.addEventListener('change', event => { console.log(event); console.dir(event.target) });
refs.theme.addEventListener('change', changeTheme)

function saveUserTheme() { refs.body.classList.add(localStorage.getItem('theme'));
    if (refs.body.classList.contains("dark-theme"))
    { refs.input.checked = true };
}
function changeTheme(event) {
    if (event.target.checked) {
        refs.body.classList.add(`${theme.DARK}`);
        refs.body.classList.remove(`${theme.LIGHT}`);
        localStorage.setItem('theme',`${theme.DARK}`)
    } else {
        refs.body.classList.add(`${theme.LIGHT}`);
        refs.body.classList.remove(`${theme.DARK}`);
        localStorage.setItem('theme',`${theme.LIGHT}`)
    }
};
saveUserTheme()

