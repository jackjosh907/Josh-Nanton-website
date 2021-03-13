const float = function (){
  const container = document.querySelector('.skills')
  const javscript = document.querySelector('.javascript')
  const css = document.querySelector('.css')
  const sass = document.querySelector('.sass')
  const git = document.querySelector('.git')
  const boot = document.querySelector('.boot')
  const html = document.querySelector('.html')
  const wp = document.querySelector('.wp')




  container.addEventListener('mouseenter', () => {
    javscript.classList.add('active')
    css.classList.add('active')
    sass.classList.add('active')
    git.classList.add('active')
    boot.classList.add('active')
    html.classList.add('active')
    wp.classList.add('active')


  })

}

float()