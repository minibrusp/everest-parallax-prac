document.addEventListener('DOMContentLoaded', event => {

   const nav = document.querySelector('nav')

   const controller = new ScrollMagic.Controller()

   const navInHero = result => {
      console.log(result);
      result ? console.log('YES') : console.log('NO');
      result ? nav.classList.remove('in-section') : nav.classList.add('in-section')
   }

   const EverestTimeline = gsap.timeline()

   EverestTimeline
      .to('header .header-text', {
         x: '100%',
         opacity: 0,
      })
      .from('.header-title', {
         y: 700,
         opacity: 0,
      })
      .fromTo('.header-mountain', {
         scale: 1,
         y: 0,
      }, {
         scale: 1.005,
         y: -2,
         duration: 4,
      }, 0)
      .from('.header-background', {
         scale: 1.02,
         y: 2,
         duration: 4,
         onStart: navInHero,
         onStartParams: [true],
         onUpdate: navInHero,
         onUpdateParams: [true],
         onComplete: navInHero,
         onCompleteParams: [false],
      }, 0)

   new ScrollMagic.Scene({
      triggerElement: 'main header',
      duration: '400%',
      triggerHook: 0,
   })
      .setTween(EverestTimeline)
      .setPin('main>header')
      .addTo(controller)

   // kanchenjung

   const kanchenjungTimeline = gsap.timeline()

   kanchenjungTimeline
      .from('.kanchenjung-txt', {
         y: 400,
         opacity: 0,
      })
      .from('.kanchenjung-img-background', {
         x: -5,
         duration: 3,
      }, 0)
      .from('.kanchenjung-img-mountain', {
         scale: 1.01,
         x: -10,
         duration: 3,
         onStart: navInHero,
         onStartParams: [true],
         onUpdate: navInHero,
         onUpdateParams: [true],
         onComplete: navInHero,
         onCompleteParams: [false],
         onReverseComplete: navInHero,
         onReverseCompleteParams: [false],
      }, 0)

   new ScrollMagic.Scene({
      triggerElement: '.kanchenjung',
      duration: '400%',
      triggerHook: 0,
   })
   .setTween(kanchenjungTimeline)
   .setPin('.kanchenjung')
   .addTo(controller)

   // lhotse 

   const lhotseTimeline = gsap.timeline()

   lhotseTimeline
      .from('.lhotse-txt', {
         y: 400,
         opacity: 0,
      })
      .from('.lhotse-img-background', {
         scale: 1.0001,
         x: -5,
         duration: 4
      }, 0)
      .from('.lhotse-img-mountain', {
         scale: 1.0005,
         y: -2,
         duration: 4
      }, 0)
      .from('.lhotse-img-land', {
         scale: 1.005,
         y: -5,
         duration: 4,
         onStart: navInHero,
         onStartParams: [true],
         onUpdate: navInHero,
         onUpdateParams: [true],
         onComplete: navInHero,
         onCompleteParams: [false],
         onReverseComplete: navInHero,
         onReverseCompleteParams: [false],
      }, 0)

   new ScrollMagic.Scene({
      triggerElement: '.lhotse',
      duration: '400%',
      triggerHook: 0
   })
   .setTween(lhotseTimeline)
   .setPin('.lhotse')
   .addTo(controller)

   // makalu 

   const makaluTimeline = gsap.timeline()

   makaluTimeline
      .from('.makalu-txt', {
         x: -400,
         y: 200,
         scale: 0.5,
         rotate: -90,
         opacity: 0,
      })
      .from('.makalu-img-background', {
         x: -20,
         duration: 4,
      }, 0)
      .from('.makalu-img-mountain', {
         x: -10,
         scale: 1.001,
         duration: 4,
      }, 0)
      .from('.makalu-img-land', {
         x: -10,
         scale: 0.99999,
         duration: 4,
         onStart: navInHero,
         onStartParams: [true],
         onUpdate: navInHero,
         onUpdateParams: [true],
         onComplete: navInHero,
         onCompleteParams: [false],
         onReverseComplete: navInHero,
         onReverseCompleteParams: [false],
      }, 0)

   new ScrollMagic.Scene({
      triggerElement: '.makalu',
      duration: '400%',
      triggerHook: 0,
   })
   .setTween(makaluTimeline)
   .setPin('.makalu')
   .addTo(controller)

   // choOyu 

   const choOyuTimeline = gsap.timeline()

   choOyuTimeline
      .from('.choOyu-txt', {
         x: 400, 
         y: 200,
         scale: 0.5,
         rotate: 90,
         opacity: 0,
      })
      .from('.choOyu-img-background', {
         x: 15,
         duration: 4,
      }, 0)
      .from('.choOyu-img-mountain', {
         x: 5,
         duration: 4,
      }, 0)
      .from('.choOyu-img-land', {
         x: -10,
         duration: 4,
         onStart: navInHero,
         onStartParams: [true],
         onUpdate: navInHero,
         onUpdateParams: [true],
         onComplete: navInHero,
         onCompleteParams: [false],
         onReverseComplete: navInHero,
         onReverseCompleteParams: [false],
      }, 0)

   new ScrollMagic.Scene({
      triggerElement: '.choOyu',
      duration: '800%',
      triggerHook: 0,
   })
   .setTween(choOyuTimeline)
   .setPin('.choOyu')
   .addTo(controller)

})






