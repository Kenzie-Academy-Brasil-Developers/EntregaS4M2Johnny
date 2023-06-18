
/* Desenvolva sua lógica aqui ... */
const darkModeButton = document.querySelector('.darkModeButton')
const html = document.querySelector('html')
let dark = false;

//toggle dark mode
function toggleDarkMode(){
  dark = !dark;
  html.classList.toggle('dark')
  localStorage.setItem("theme",JSON.stringify(dark));
}

// load light or dark mode
// function loadTheme(){
//   const darkMode = localStorage.getItem('dark')
//   if(darkMode){
//     toggleDarkMode();
//   }
// }
darkModeButton.addEventListener('click', function(){
    toggleDarkMode()

    // save or remove dark mode when user clicks

})

function themeAnalasys(){
  dark = JSON.parse(localStorage.getItem("theme"));
  if(dark){
    html.classList.add('dark');
  } else {
    html.classList.remove('dark')
  }
}
themeAnalasys()
// html.classList.add('dark')

































// const img = document.querySelector('.darkMode')
// const headerTitle = document.querySelector('.filter_manager-element')



// function themeChange() {
//   const buttonDark = document.querySelector('.darkModeButton')
//   const body = document.querySelector('body')
//   const darkMode = JSON.parse(localStorage.getItem("dark-mode"));
  

//   buttonDark.addEventListener('click', ()=>{
//     body.classList.toggle("dark-mode")
//     if(body.classList.contains('dark-mode')){
//       darkMode.add('dark-mode', true)
//     } else {
//       darkMode.remove('dark-mode', false)
//     } 
//   })
// }

// // buttonDark.addEventListener("click", themeChange);


// themeChange()
// // if(darkMode.contains('dark-mode')){
// //   headerTitle.classList.add('.dark-mode-titleHeader-ON')
// // } else {
// //   headerTitle.classList.remove('.dark-mode-titleHeader-ON')

// // }