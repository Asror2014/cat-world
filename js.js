// ===============================
// CAT WORLD - JAVASCRIPT
// ===============================


// ---------- ELEMENTS ----------

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

const playBtn = document.getElementById("playBtn");
const feedBtn = document.getElementById("feedBtn");

const notificationBtn =
  document.getElementById("notificationBtn");

const searchInput =
  document.getElementById("searchInput");

const toast =
  document.getElementById("toast");

const toastTitle =
  document.getElementById("toastTitle");

const toastMessage =
  document.getElementById("toastMessage");


// ---------- TOAST ----------

let toastTimer;

function showToast(title, message) {

  toastTitle.textContent = title;
  toastMessage.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


// ---------- THEME ----------

const savedTheme =
  localStorage.getItem("catWorldTheme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeIcon.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const isDark =
    document.body.classList.contains("dark");

  localStorage.setItem(
    "catWorldTheme",
    isDark ? "dark" : "light"
  );

  themeIcon.textContent =
    isDark ? "☀️" : "🌙";

  themeBtn.querySelector("span:last-child")
    .textContent =
    isDark ? "Light mode" : "Dark mode";

  showToast(
    isDark ? "Dark mode" : "Light mode",
    isDark
      ? "Tungi rejim yoqildi 🌙"
      : "Yorug‘ rejim yoqildi ☀️"
  );

});


// ---------- PLAY ----------

playBtn.addEventListener("click", () => {

  showToast(
    "Let's play! 🎾",
    "Luna o‘ynashga tayyor! 🐱"
  );

  playBtn.textContent = "🎾 Playing...";

  setTimeout(() => {
    playBtn.textContent = "🎾 Play with Luna";
  }, 1800);

});


// ---------- FEED ----------

feedBtn.addEventListener("click", () => {

  showToast(
    "Yummy! 🍗",
    "Lunaga ovqat berildi."
  );

});


// ---------- NOTIFICATION ----------

notificationBtn.addEventListener("click", () => {

  showToast(
    "Notifications 🔔",
    "Hozircha yangi bildirishnomalar yo‘q."
  );

});


// ---------- NAVIGATION ----------

const navItems =
  document.querySelectorAll(".nav-item");

navItems.forEach(item => {

  item.addEventListener("click", () => {

    navItems.forEach(nav =>
      nav.classList.remove("active")
    );

    item.classList.add("active");

  });

});


// ---------- SEARCH ----------

searchInput.addEventListener("input", () => {

  const value =
    searchInput.value.toLowerCase().trim();

  if (!value) return;

  const cards =
    document.querySelectorAll(".card");

  cards.forEach(card => {

    const text =
      card.textContent.toLowerCase();

    if (text.includes(value)) {

      card.style.outline =
        "2px solid #7567f8";

      card.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    } else {

      card.style.outline = "none";

    }

  });

});


// ---------- ADD MEAL ----------

const addMealBtn =
  document.querySelector(".small-btn");

addMealBtn.addEventListener("click", () => {

  addMealBtn.textContent = "✓ Added";

  addMealBtn.style.background = "#52bd89";

  showToast(
    "Dinner added 🍗",
    "Kechki ovqat rejalashtirildi."
  );

});


// ---------- GALLERY ----------

const photos =
  document.querySelectorAll(".photo");

photos.forEach((photo, index) => {

  photo.addEventListener("click", () => {

    const names = [
      "Cute Luna 😻",
      "Sleepy Luna 😴",
      "Happy Luna 😺",
      "Surprised Luna 🙀"
    ];

    showToast(
      "Photo opened 📸",
      names[index]
    );

  });

});


// ---------- MORE BUTTON ----------

const moreBtn =
  document.querySelector(".more-btn");

moreBtn.addEventListener("click", () => {

  showToast(
    "Luna profile 🐱",
    "Profile editing 2-bosqichda qo‘shiladi."
  );

});


// ---------- HEALTH LINKS ----------

document.querySelectorAll(".link-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      showToast(
        "Coming soon 🚀",
        "Bu funksiya keyingi bosqichda."
      );

    });

  });


// ---------- DAILY GREETING ----------

function updateGreeting() {

  const hour =
    new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good morning ☀️";
  } else if (hour < 18) {
    greeting = "Good afternoon 🌤️";
  } else {
    greeting = "Good evening 🌙";
  }

  console.log(greeting);

}

updateGreeting();


// ---------- SAVE VISIT ----------

let visits =
  Number(localStorage.getItem("catWorldVisits")) || 0;

visits++;

localStorage.setItem(
  "catWorldVisits",
  visits
);

console.log(
  `Cat World opened ${visits} times.`
);


// ---------- CONSOLE ----------

console.log(
  "%c🐱 CAT WORLD",
  "font-size:25px;font-weight:bold;color:#7567f8;"
);

console.log(
  "Welcome to your Cat World!"
);
