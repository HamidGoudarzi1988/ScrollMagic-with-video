const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//end section

const section = document.querySelector('section');
const end = section.querySelector('h1');

//initiate our scrollmagic
const controller = new ScrollMagic.Controller();
// all things that you want animate by a scene, and the another scene
//The system to move and the other scene start to show

//scenes
let scene = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: section,
  triggerHook: 0
});

//video animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e =>{
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);
