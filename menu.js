const showMenu = function (){
  const menu = document.querySelector('.menu')
  const burger = document.querySelector('.burger-wrap')

  burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
  })

}
showMenu()
