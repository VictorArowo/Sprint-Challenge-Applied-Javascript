/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

carouselCreator = () => {
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const rightButton = document.createElement("div");

  img1.setAttribute("src", "./assets/carousel/mountains.jpeg");
  img2.setAttribute("src", "./assets/carousel/computer.jpeg");
  img3.setAttribute("src", "./assets/carousel/trees.jpeg");
  img4.setAttribute("src", "./assets/carousel/turntable.jpeg" );

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  carousel.append(leftButton);
  carousel.append(img1);
  carousel.append(img2);
  carousel.append(img3);
  carousel.append(img4);
  carousel.append(rightButton);

  let images = [img1, img2, img3, img4]
  let index = 0;

  rightButton.addEventListener("click", () => {
    debugger;
    images.forEach(img => img.style.display = "none");
    let currentIndex = (index++) % 4;
    images[currentIndex].style.display = "block";
  })


  return carousel;
}

document.querySelector(".carousel-container").append(carouselCreator());