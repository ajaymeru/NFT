// hamburger

// function toggleMenu(element) {
//     const menuIcon = element.querySelector('h2');
//     menuIcon.textContent = menuIcon.textContent === '☰' ? '✕' : '☰';

//     const links = document.querySelectorAll('.navbar-right');
//     links.forEach(link => {
//         if (link.style.display === 'none' || link.style.display === '') {
//             link.style.display = 'flex';
//             link.style.flexDirection = 'column';
//         } else {
//             link.style.display = 'none';
//         }
//     });
// }

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
