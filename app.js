

// hamburger
function toggleMenu() {
    const navbarRight = document.querySelector('.navbar-right');
    const hamburger = document.querySelector('.hamburger h2');
    const isVisible = navbarRight.style.display === 'flex';


    if (isVisible) {
        navbarRight.style.display = 'none';
        hamburger.innerText = '☰';
    } else {
        navbarRight.style.display = 'flex';
        hamburger.innerText = 'X';
    }
}
// ................signup.............

document.getElementById('signup-button').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted!');
    closePopup();
});

// ....................................................

function updateCountdown() {
    const now = new Date();
    const target = new Date();
    target.setHours(24, 0, 0, 0);

    const difference = target - now;

    const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0');

    document.getElementById('hours').textContent = hours + " " + ":";
    document.getElementById('minutes').textContent = minutes + " " + ":";
    document.getElementById('seconds').textContent = seconds;
}


updateCountdown();
setInterval(updateCountdown, 1000);

// Vieew ranking  
document.addEventListener('DOMContentLoaded', () => {
    const viewRankingsButton = document.getElementById('viewRankingsButton');
    viewRankingsButton.innerHTML = '<i class="fa fa-rocket"></i> View Rankings';
});

function cardopenclose() {
    const hiddenCards = document.querySelectorAll('.hidden-card');
    const viewRankingsButton = document.getElementById('viewRankingsButton');

    hiddenCards.forEach(card => {
        card.style.display = (card.style.display === 'none' || card.style.display === '') ? 'flex' : 'none';
    });

    viewRankingsButton.innerHTML = viewRankingsButton.textContent.includes('View Rankings') ?
        '<i class="fa fa-rocket"></i> Hide Rankings' :
        '<i class="fa fa-rocket"></i> View Rankings';
}




// Get all elements with class .tc-b-card
const tcBCards = document.querySelectorAll('.tc-b-card');

tcBCards.forEach(card => {
    const cardStyles = card.querySelector('.tc-card-parent-styles');
    const parentImage = card.querySelector('.tc-card-parent img');

    cardStyles.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            parentImage.src = img.src;
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.tc-b-card');

    cards.forEach(card => {
        const image = card.querySelector('.tc-card-parent img');

        image.addEventListener('click', function () {
            const fullscreenContainer = document.createElement('div');
            fullscreenContainer.classList.add('fullscreen-image');

            const fullscreenImage = document.createElement('img');
            fullscreenImage.src = image.src;

            fullscreenContainer.appendChild(fullscreenImage);

            document.body.appendChild(fullscreenContainer);

            fullscreenContainer.addEventListener('click', function () {
                fullscreenContainer.remove();
            });

            fullscreenContainer.style.display = 'flex';
        });
    });
});


function playVideo() {
    var img = document.querySelector('.hs-highleted-NFT img');
    var video = document.getElementById('videoPlayer');

    img.style.display = 'none';
    video.style.display = 'block';

    video.play();
}




// Path to your JSON file
var api = 'data.json';

// Fetch the JSON file and log the response
fetch(api)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const imageContainer = document.getElementById('image-container');
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'image-card';

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title;

            const priceOverlay = document.createElement('div');
            priceOverlay.className = 'price-overlay';
            priceOverlay.textContent = `${item.price} $`;

            card.appendChild(img);
            card.appendChild(priceOverlay);
            imageContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

function toggleFetchData() {
    var fetchDataSection = document.querySelector('.fetching-data');
    fetchDataSection.style.display = fetchDataSection.style.display === 'none' || fetchDataSection.style.display === '' ? 'flex' : 'none';
}