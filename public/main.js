// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.innerHTML = `<h3 id='toggleLogo'>&#127769;</h3>`

const moon = "&#127769;"

const sun =  "&#127774;"


const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');

  darkModeToggle.innerHTML = `<h3  id='toggleLogo'>&#127774;</h3>`
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');

  darkModeToggle.innerHTML = `<h3  id='toggleLogo'>&#127769;</h3>`
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
