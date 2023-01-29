const yearEl = document.querySelector(".year");
const btnNavEl = document.querySelector(".btn__mobile__nav");
const headerEl = document.querySelector(".header");
const sectionHeroEl = document.querySelector(".section__hero");

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/* Make mobile navigation work */
const pushNavEl = () => {
  headerEl.classList.toggle("nav__open");
};

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);

btnNavEl.addEventListener("click", pushNavEl);
