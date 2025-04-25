console.log("JS chargé !");

// =====================
// 1. MENU BURGER RESPONSIVE
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  toggle.onclick = () => {
    navLinks.classList.toggle("active");
    toggle.classList.toggle("active");
  };
});

// =====================
// 2. BANNIÈRE DYNAMIQUE
// =====================
const banners = [
  {
    title: "Fanon",
    genres: ["Biopic", "Historique"],
    description: "Le destin du célèbre psychiatre et penseur anticolonialiste Frantz Fanon, de la Martinique à l’Algérie.",
    background: "images/Fanon/fanon_grande_image.jpg",
    stars: "★★★★☆"
  },
  {
    title: "Ma mère, Dieu et Sylvie Vartan",
    genres: ["Comédie", "Drame"],
    description: "Une comédie douce-amère où les croyances et les idoles se mêlent dans une joyeuse cacophonie.",
    background: "images/Ma mère/ma_mere_dieu_sylvie_vartan_grande_affiche.jpg",
    stars: "★★★☆☆"
  },
  {
    title: "The Gentlemen",
    genres: ["Action", "Crime"],
    description: "Une série stylée sur la pègre britannique signée Guy Ritchie.",
    background: "images/the gentlemen/the_gentlemen_grande_affiche.jpeg",
    stars: "★★★★☆"
  }
];

let bannerIndex = 0;
const bannerEl = document.querySelector(".banner");
const bannerContent = document.querySelector(".banner-content");

function updateBanner() {
  const b = banners[bannerIndex];
  bannerEl.style.background = `url('${b.background}') no-repeat center center/cover`;
  bannerContent.innerHTML = `
    <h1>${b.title}</h1>
    <div class="stars">${b.stars}</div>
    <div class="genres">${b.genres.map(g => `<span>${g}</span>`).join(" ")}</div>
    <p>${b.description}</p>
    <div class="buttons">
      <button>▶ 📝 Lire la critique</button>
      <button>＋ Ajouter</button>
    </div>
  `;
  bannerIndex = (bannerIndex + 1) % banners.length;
}

setInterval(updateBanner, 4000);
updateBanner();

// =====================
// 3. NAVBAR DISPARAÎT AU SCROLL
// =====================
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }
  lastScroll = currentScroll;
});

// =====================
// 4. CARROUSEL MODERNE
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const scrollAmount = 220;

  nextBtn?.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevBtn?.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});
