var listMenu = [
   'menu1',
   'menu2',
   'menu3',
]
// Selector
// loop
// render
const menuElement = document.querySelector("#menu")
if(menuElement){
      for(let i=0; i< listMenu.length; i++){
        menuElement.innerHTML += `<li>${listMenu[i]}</li>`
    }
}