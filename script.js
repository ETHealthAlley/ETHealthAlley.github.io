function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  // script.js
const dots = document.querySelectorAll('.dot');
const scrollImages = document.querySelector('.scroll-images');
const childWidth = 610; // Adjust this value based on your image width and margin

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        scrollToIndex(index);
    });
});

function scrollToIndex(index) {
    const scrollAmount = index * childWidth;
    scrollImages.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}

function updateActiveDot() {
    const currentIndex = Math.round(scrollImages.scrollLeft / childWidth);
    dots.forEach((dot) => {
        dot.classList.remove('active-dot');
    });
    dots[currentIndex].classList.add('active-dot');
}

// Add left and right buttons for scrolling
document.querySelector('.scroll-left').addEventListener('click', () => {
    scrollGallery(-childWidth);
});

document.querySelector('.scroll-right').addEventListener('click', () => {
    scrollGallery(childWidth);
});

function scrollGallery(amount) {
    scrollImages.scrollBy({ left: amount, behavior: 'smooth' });
}

// Initial active dot setup
updateActiveDot();
