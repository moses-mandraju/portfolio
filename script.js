// ================= SECTION REVEAL =================

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },
  {
    threshold: 0.15
  }
);

sections.forEach((section) => {

  sectionObserver.observe(section);

});


// ================= CARD REVEAL =================

const cards = document.querySelectorAll(".card");

const cardObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.animate(
          [
            {
              opacity: 0,
              transform: "translateY(40px)"
            },

            {
              opacity: 1,
              transform: "translateY(0)"
            }
          ],
          {
            duration: 700,
            easing: "ease-out",
            fill: "forwards"
          }
        );

        cardObserver.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.2
  }
);

cards.forEach((card) => {

  cardObserver.observe(card);

});


// ================= PROFILE IMAGE FLOAT =================

const profilePic = document.querySelector(".profile-pic");

if (profilePic) {

  let direction = 1;

  setInterval(() => {

    profilePic.style.transform =
      direction === 1
        ? "translateY(-4px)"
        : "translateY(0px)";

    direction *= -1;

  }, 1500);

}
```
