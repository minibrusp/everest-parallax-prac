document.addEventListener('DOMContentLoaded', event => {

   const controller = new ScrollMagic.Controller()

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
      }, 0)

   new ScrollMagic.Scene({
      triggerElement: '.kanchenjung',
      duration: '800%',
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
         duration: 4
      }, 0)

   new ScrollMagic.Scene({
      triggerElement: '.lhotse',
      duration: '700%',
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
      }, 0)

   new ScrollMagic.Scene({
      triggerElement: '.makalu',
      duration: '800%',
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
      }, 0)

   new ScrollMagic.Scene({
      triggerElement: '.choOyu',
      duration: '800%',
      triggerHook: 0,
   })
   .setTween(choOyuTimeline)
   .setPin('.choOyu')
   .addTo(controller)



   // asdasdasd

   const sectionLoremEverest = document.querySelector('.lorem-everest')
   const sectionKanchenjung = document.querySelector('.kanchenjung')
   const sectionLoremKanchenjung = document.querySelector('.lorem-kanchenjung')
   const sectionLhotse = document.querySelector('.lhotse')
   const sectionLoremLhotse = document.querySelector('.lorem-lhotse')
   const sectionMakalu = document.querySelector('.makalu')
   const sectionLoremMakalu = document.querySelector('.lorem-makalu')
   const sectionChoOyu = document.querySelector('.choOyu')
   const sectionLoremChoOyu = document.querySelector('.lorem-choOyu')
   const nav = document.querySelector('nav')
   const navHeight = nav.scrollHeight

   const onScroll = () => {

      let top = sectionLoremEverest.getBoundingClientRect().top - navHeight
      let top2 = sectionKanchenjung.getBoundingClientRect().top - navHeight
      let top3 = sectionLoremKanchenjung.getBoundingClientRect().top - navHeight
      let top4 = sectionLhotse.getBoundingClientRect().top - navHeight
      let top5 = sectionLoremLhotse.getBoundingClientRect().top - navHeight
      let top6 = sectionMakalu.getBoundingClientRect().top - navHeight
      let top7 = sectionLoremMakalu.getBoundingClientRect().top - navHeight
      let top8 = sectionChoOyu.getBoundingClientRect().top - navHeight
      let top9 = sectionLoremChoOyu.getBoundingClientRect().top - navHeight

      let tops = [top, top2, top3, top4, top5, top6, top7, top8, top9]

      tops.forEach(top => {
         let index = tops.indexOf(top)

         if(index === 0) {
            top > 0 
               ? nav.classList.remove('in-section')
               : nav.classList.add('in-section')

               return
         }

         if(top < 0) {
            index % 2 === 0 
            ? nav.classList.add('in-section')
            : nav.classList.remove('in-section')
         }

      })

      window.requestAnimationFrame(onScroll)
   }

   window.requestAnimationFrame(onScroll)


})






