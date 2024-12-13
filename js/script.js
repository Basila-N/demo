

// about  and feature and food section



const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : true,
  })

  sr.reveal('.img-fluid',{ delay:350, origin:'left' })
  sr.reveal('.abt_cnt',{ delay:350, origin:'right' })
  sr.reveal('.cad1',{ delay:350, origin:'top' })
  sr.reveal('.food-main-content',{ delay:350, origin:'bottom' })
  sr.reveal('.footer',{ delay:350, origin:'top' })


// menu section


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
  });

//    COUNTER SECTION 

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.number');

    const runCounter = (counter) => {
        const target = +counter.getAttribute('data-number');
        const speed = 100;
        const updateCount = () => {
            const current = +counter.innerText;
            const increment = Math.ceil(target / speed);
            if (current < target) {
                counter.innerText = current + increment;
                setTimeout(updateCount, 50); // Controls counting speed
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                observer.unobserve(entry.target); // Stops after counting once
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
