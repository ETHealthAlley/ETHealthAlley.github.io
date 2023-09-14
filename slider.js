// JavaScript for the slider
const slider = document.querySelector('.slider');
const newsItems = document.querySelectorAll('.news-item');
let currentIndex = 0;

function showNewsItem(index) {
    newsItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

function rotateNews() {
    currentIndex = (currentIndex + 1) % newsItems.length;
    showNewsItem(currentIndex);
}

setInterval(rotateNews, 4000); // Rotate news items every 3 seconds

// Initial display
showNewsItem(currentIndex);
