// const menuLinks = document.querySelectorAll.apply(".button[data-goto]");
// if (menuLinks.length > 0) {
//   menuLinks.forEach((menuLink) => {
//     menuLink.addEventListener("click", onMenuClickLink);
//   });

//   function onMenuClickLink(e) {
//     const menuLink = e.target;
//     if (
//       menuLink.dataset.goto &&
//       document.querySelector(menuLink.dataset.goto)
//     ) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue =
//         gotoBlock.getBoundingClientRect().top +
//         pageYOffsetv -
//         document.querySelector(".header").offsetHeight;

//       window.scrollTo({
//         top: gotoBlock,
//         behavior: "smooth",
//       });
//       e.preventDefault();
//     }
//   }
// }

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const nav = document.querySelector(".header__menu");
const burger = document.querySelector(".menu__icon");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

let form = document.querySelector('.contact__form')
let fields = form.querySelectorAll('.input')

form.addEventListener('submit', event => {
  event.preventDefault()
  let errors = form.querySelectorAll('.error')
  errors.forEach(e => e.remove())

  for (let i = 0; i < fields.length; i++) {
    if (fields[0].value && fields[1].value.includes('@') && fields[2].value) {
      form.remove()
      let success = document.createElement('div')
      success.style.fontSize = "40px"
      success.style.color = "#39A0ED"
      success.innerHTML = "Thanks for your message!"
      document.getElementById('contact').after(success)
      break;
    }
    else if (!fields[i].value) checkFields(i, 'Cannot be blank')
    else if (i == 1 && !fields[i].value.includes('@')) checkFields(i, 'Incorrect email')
  }
})

let checkFields = (i, message) => {
  let error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = message
  form[i].parentElement.insertBefore(error, fields[i])
}