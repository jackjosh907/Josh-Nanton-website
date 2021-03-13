const slideshowImages = document.querySelectorAll('.img')

// Defining the picture delay. 3000 seconds
const nextImageDelay = 800;


// Defining the image counter. Using let variable since the value will be changed.
let currentImageCounter = 0;

// Setting the first slideshow image element setting the opacity.
// slideshowImages[currentImageCounter].style.display = "block"

slideshowImages[currentImageCounter].style.opacity= 1


setInterval(nextImage, nextImageDelay);


function nextImage(){
//  hiding the currently displayed image
  slideshowImages[currentImageCounter].style.opacity = 0
  
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length

  // showing the displayed img through the counter
  // slideshowImages[currentImageCounter].style.display = "block"
  slideshowImages[currentImageCounter].style.opacity = 1



}