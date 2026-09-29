```javascript
/* =========================================
   GLOMING CALL ASSISTANCE
   INTERACTION & ANIMATION
========================================= */


/* -----------------------------------------
   MOUSE PARALLAX
----------------------------------------- */

const visual = document.querySelector(".visual");

document.addEventListener("mousemove", function(event){

    if(window.innerWidth < 800) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (centerX - event.clientX) / 45;
    const moveY = (centerY - event.clientY) / 45;

    visual.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

});


/* -----------------------------------------
   SCROLL REVE
```
