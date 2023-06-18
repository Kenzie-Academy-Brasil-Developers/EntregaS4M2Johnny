
/* Desenvolva sua lógica aqui ... */
const darkModeButton = document.querySelector('.darkModeButton')
const html = document.querySelector('html')

//toggle dark mode
function toggleDarkMode(){
  html.classList.toggle('dark')
}

// load light or dark mode
function loadTheme(){
  const darkMode = localStorage.getItem('dark')
  if(darkMode){
    toggleDarkMode();
  }
}
darkModeButton.addEventListener('click', function(){
    toggleDarkMode()

    // save or remove dark mode when user clicks
    localStorage.removeItem('dark');
    if(html.classList.contains('dark')){
      localStorage.setItem('dark',1);
    }
})



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