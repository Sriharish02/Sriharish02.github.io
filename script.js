// Store project images in an array
const projects = {
    1: ["v6 engine/Screenshot 2024-11-25 182701.png", "v6 engine/Screenshot 2024-11-25 182830.png", "v6 engine/Screenshot 2024-11-25 183004.png","v6 engine/Screenshot 2024-11-25 183117.png","v6 engine/Screenshot 2024-11-25 183221.png","v6 engine/Screenshot 2024-11-25 183345.png","v6 engine/Screenshot 2024-11-25 183452.png","v6 engine/Screenshot 2024-11-25 184305.png"],
    2: ["slding mesh gearbox/Screenshot 2024-11-24 123223.png", "slding mesh gearbox/Screenshot 2024-11-24 123310.png", "slding mesh gearbox/Screenshot 2024-11-24 123334.png","slding mesh gearbox/Screenshot 2024-11-24 123354.png","slding mesh gearbox/Screenshot 2024-11-24 123411.png","slding mesh gearbox/Screenshot 2024-11-24 124051.png"],
    3: ["ocean cleanup bot/Screenshot 2024-11-24 122719.png", "ocean cleanup bot/Screenshot 2024-11-24 124528.png", "ocean cleanup bot/Screenshot 2024-11-24 124551.png","ocean cleanup bot/Screenshot 2024-11-24 124618.png","ocean cleanup bot/Screenshot 2024-11-24 124646.png"],
    4: ["train coach/Screenshot 2024-11-24 130028.png", "train coach/Screenshot 2024-11-24 130048.png", "train coach/Screenshot 2024-11-24 130102.png", "train coach/Screenshot 2024-11-24 130111.png", "train coach/Screenshot 2024-11-24 130118.png", "train coach/Screenshot 2024-11-24 130124.png", "train coach/Screenshot 2024-11-24 130525.png"]
  };

  const closeCarouselButton = document.getElementById('closeCarousel');
  
  let currentProject = 0;
  let currentSlide = 0;
  
  function openCarousel(projectId) {
    currentProject = projectId;
    currentSlide = 0;
  
    const carousel = document.getElementById("carousel");
    const carouselImg = document.getElementById("carousel-image");
  
    carousel.style.display = "flex";
    carouselImg.src = projects[projectId][currentSlide];
    updateCaption();
  }
  
  function closeCarousel() {
    const carousel = document.getElementById("carousel");
    carousel.style.display = "none";
  }
  
  function changeSlide(direction) {
    currentSlide += direction;
  
    if (currentSlide < 0) {
      currentSlide = projects[currentProject].length - 1;
    } else if (currentSlide >= projects[currentProject].length) {
      currentSlide = 0;
    }
  
    const carouselImg = document.getElementById("carousel-image");
    carouselImg.src = projects[currentProject][currentSlide];
    updateCaption();
  }
  
  function updateCaption() {
    const caption = document.getElementById("carousel-caption");
    caption.textContent = `Project ${currentProject} - Image ${currentSlide + 1}`;
  }
  
  closeCarouselButton.addEventListener('click', closeCarousel);
  
  document.addEventListener("keydown", (event) => {
    const carousel = document.getElementById("carousel");
    if (carousel.style.display === "flex") {
      if (event.key === "ArrowLeft") {
        changeSlide(-1);
      } else if (event.key === "ArrowRight") {
        changeSlide(1);
      } else if (event.key === "Escape") {
        closeCarousel();
      }
    }
  });