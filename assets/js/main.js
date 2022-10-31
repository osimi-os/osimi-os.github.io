/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

<<<<<<< HEAD
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

=======
/*=============== SHOW SCROLL UP ===============*/
>>>>>>> 0084aa5fe0107bc33a4285100d51d0aff1b8b106

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay:400,
})

<<<<<<< HEAD
sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card` , {interval: 100})
sr.reveal(`.choose__img, .calculate__content `, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img `, {origin: 'right'})

=======
>>>>>>> 0084aa5fe0107bc33a4285100d51d0aff1b8b106
/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate-form"),
  calculateCm = document.getElementById("calculate-cm"),
  calculateKg = document.getElementById("calculate-kg"),
  calculateMessage = document.getElementById("calculate-message");

function calculateBmi() {
  if (calculateCm.value === "" || calculateKg.value === "") {
    //add and remove color
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    //show message
    calculateMessage.textContent = "Fill in the Height and Weight 👨‍💻";

    //Timeout
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      bmi = Math.round(kg / (cm * cm));

    if (bmi < 18.5) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`;
    } else if (bmi < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`;
    } else {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`;
    }

    calculateCm.value = "";
    calculateKg.value = "";

    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 7000);
  }
}

// calculateMessage.addEventListener("button", calculateBmi);
/*=============== EMAIL JS ===============*/
const contactFrom = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUser = document.getElementById("contact-user");

function sendEmail() {
  if (contactUser.value === "") {
    //add and remove color
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");
    //show message
    contactMessage.textContent = "you must enter your email 📧";

    //Timeout
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 3000);
  } else {
    // serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
        "service_gdqzoxj",
        "template_mwarzxl",
        "#contact-form",
        "9qyE6KNdWfdY29Iik"
      )
      .then(
        () => {
          //show message and add color
          contactMessage.classList.add("color-green");
          contactMessage.textContent = "you registered successfully ✅";

          //remove mesage after seven seconds
          setTimeout(() => {
            contactMessage.textContent = "";
<<<<<<< HEAD
        }, 3000)
    }else{
        // serviceID - templateID - #form - publickey
        emailjs.sendForm('service_gdqzoxj','template_mwarzxl','#contact-form','9qyE6KNdWfdY29Iik')
            .then(() =>{
                //show message and add color
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'you registered successfully ✅'

                //remove mesage after seven seconds
                setTimeout(() =>{
                    contactMessage.textContent = ''
                },7000)

            },(error) => {
                //mail sending error
                alert('oops! something has failed...', error)
            })
    }
=======
          }, 7000);
        },
        (error) => {
          //mail sending error
          alert("oops! something has failed...", error);
        }
      );
  }
>>>>>>> 0084aa5fe0107bc33a4285100d51d0aff1b8b106
}
