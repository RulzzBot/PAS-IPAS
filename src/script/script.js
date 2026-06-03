function toggleSideNav() {
    const sideNav = document.getElementById('sideNav');
    sideNav.classList.toggle('active');
}

const testiYuta = [
    {
        nama : "Rizky",
        komentar : "“YutaCraft membuat website untuk company profile untuk bisnis kami dengan hasil yang memuaskan, design nya yang modern dan mudah digunakan”",
        profilUrl : "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",
        rating : "⭐⭐⭐⭐⭐",
        title : "CEO PT. Rizky Jaya"
    },
    {
        nama : "Yusuf Akbar",
        komentar : "“YutaCraft membuat website untuk company profile untuk bisnis kami dengan hasil yang memuaskan, design nya yang modern dan mudah digunakan”",
        profilUrl : "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",
        rating : "⭐⭐⭐⭐⭐",
        title : "CEO PT. Yusuf Akbar"
    },
    {
        nama : "Rizky",
        komentar : "“YutaCraft membuat website untuk company profile untuk bisnis kami dengan hasil yang memuaskan, design nya yang modern dan mudah digunakan”",
        profilUrl : "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",
        rating : "⭐⭐⭐⭐⭐",
        title : "CEO PT. Rizky Jaya"
    },
]

const testiYutaContainer = document.querySelector('.testi-t');

// style testimonial
const testiTCard = document.querySelector('.testi-t-card');
const testiTRating = document.querySelector('.testi-rating');
const testiTKomentar = document.querySelector('.testi-komentar');
const testiTProfil = document.querySelector('.testi-profil');

testiYuta.forEach(testi =>{
    testiYutaContainer.innerHTML += `
        <div class="${testiTCard ? testiTCard.className : 'testi-t-card'}">
            <div class="${testiTRating ? testiTRating.className : 'testi-rating'}">
                ${testi.rating}
            </div>
            <div class="testi-komentar">
                ${testi.komentar}
            </div>
            <div class="testi-profil">
                <img src="${testi.profilUrl}" alt="Profil ${testi.nama} "class="testi-profil-img">
                <div class="testi-kel">
                    <strong>${testi.nama}</strong>
                    <span>${testi.title}</span>
                </div>
            </div>
        </div>
    `
})

const slider = document.getElementById('slider');

let index = 0;

const totalSlide = testiYuta.length;

let autoSlide = setInterval(nextSlide, 3000);

function nextSlide() {
    index = (index + 1) % totalSlide
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlide) % totalSlide;
    updateSlide();
}

function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Layanan
document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("click", ()=> {
        const service = card.dataset.service;
        const message = `Halo YutaCraft, saya tertarik dengan layanan anda ${service}`
        window.open(
            `https://wa.me/62882005835557?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    })
})