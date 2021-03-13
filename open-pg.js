const openPage = function (){
  const bubble = document.querySelector('.bubble')
  const bg = document.querySelector('.bg')

  bubble.addEventListener('click', () => {
    bg.style.opacity = 1
    bubble.style.opacity = 0

  })
}

openPage()