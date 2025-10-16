const eventDate = new Date("Nov 29, 2025 00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".timer").innerHTML = "🎊 The event has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days + "d";
  document.getElementById("hours").textContent = hours + "h";
  document.getElementById("minutes").textContent = minutes + "m";
  document.getElementById("seconds").textContent = seconds + "s";
}, 1000);

const carouselImages = [
  { src: "images/event-imgs/img-1.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-2.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-3.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-4.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-5.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-6.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-7.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-8.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-9.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-10.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-11.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-12.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-13.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-14.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-15.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-16.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-17.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-18.jpg", alt: "TEDxUniOsun event image" },
  { src: "images/event-imgs/img-19.jpg", alt: "TEDxUniOsun event image" },
];

// 2️⃣ Get the wrapper element
const wrapper = document.getElementById("carousel-wrapper");

// 3️⃣ Dynamically create slides
carouselImages.forEach((item) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;

  slide.appendChild(img);
  wrapper.appendChild(slide);
});

// 4️⃣ Initialize Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    1024: { slidesPerView: 2 },
  },
});
