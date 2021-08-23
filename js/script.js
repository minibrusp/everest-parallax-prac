document.addEventListener('DOMContentLoaded', event => {

   let controller = new ScrollMagic.Controller()

   let headerTextTween = new TimelineMax().from('header .header-text', {
      x: '100%',
      opacity: 0,
   })
   .to('header .header-text', {
      opacity: 1
   })
   .to('header .header-text', {
      x: '-100%',
      opacity: 0
   })
   .to('header .header-text', {
      x: '-100%',
      opacity: 0
   })


   new ScrollMagic.Scene({
      triggerElement: 'main header',
      duration: '350%',
      triggerHook: 0,
   })
   .setClassToggle('nav', '.in-body')
   .setTween(headerTextTween)
   .setPin('main>header')
   // .addIndicators({name: 'Headers'})
   .addTo(controller)

   let articleHeaderTxtTween = new TimelineMax().from('.header-title', {
      y: 700,
      opacity: 0,
   })


   new ScrollMagic.Scene({
      triggerElement: 'main header',
      duration: '400%',
      triggerHook: 0,
   })
   .setTween(articleHeaderTxtTween)
   .setPin('article')
   // .addIndicators({name: 'header title'})
   .addTo(controller)

   let mountainTween = new TimelineMax().fromTo('.header-mountain', {
      scale: 1,
      y: 0,
   }, {
      scaleY: 1.001,
      y: -1
   })

   new ScrollMagic.Scene({
      triggerElement: 'main header',
      duration: '500%',
      triggerHook: 0,
   })
   .setTween(mountainTween)
   // .addIndicators({name: 'header mountain'})
   .addTo(controller)

   let mountainBgTween = new TimelineMax().fromTo('.header-background', {
      scale: 1,
   }, {
      scale: 1.1,
      y: 20,
   })

   new ScrollMagic.Scene({
      triggerElement: 'main header',
      duration: '600%',
      triggerHook: 0,
   })
   .setTween(mountainBgTween)
   .setPin('main>header')
   // .addIndicators({name: 'background mountain'})
   .addTo(controller)

   // kanchenjung

   let kanchenjungTxtTween = new TimelineMax().from('.kanchenjung-txt', {
      y: 400,
      opacity: 0,
   })

   new ScrollMagic.Scene({
      triggerElement: '.kanchenjung',
      duration: '200%',
      triggerHook: 0,
   })
   .setTween(kanchenjungTxtTween)
   // .addIndicators({name: 'kanchenjung-txt'})
   .addTo(controller)

   let kanchenjungMtBgTween = new TimelineMax().from('.kanchenjung-img-background', {
      x: -5,
   })

   new ScrollMagic.Scene({
      triggerElement: '.kanchenjung',
      duration: '400%',
      triggerHook: 0,
   })
   .setTween(kanchenjungMtBgTween)
   // .setPin('.kanchenjung')
   // .addIndicators({name: 'kanchenjung-img-background'})
   .addTo(controller)

   let kanchenjungMtTween = new TimelineMax().from('.kanchenjung-img-mountain', {
      scale: 1.01,
      x: -10,
   })

   new ScrollMagic.Scene({
      triggerElement: '.kanchenjung',
      duration: '400%',
      triggerHook: 0,
   })
   .setTween(kanchenjungMtTween)
   .setPin('.kanchenjung')
   // .addIndicators({name: 'kanchenjung-img-mountain'})
   .addTo(controller)

   // lhotse 

   let lhotseTxtTween = new TimelineMax().from('.lhotse-txt', {
      y: 400,
      opacity: 0
   })

   new ScrollMagic.Scene({
      triggerElement: '.lhotse',
      duration: '400%',
      triggerHook: 0
   })
   .setTween(lhotseTxtTween)
   .addTo(controller)

   let lhotseBgTween = new TimelineMax().from('.lhotse-img-background', {
      scale: 1.0001,
      x: -5,
   })

   new ScrollMagic.Scene({
      triggerElement: '.lhotse',
      duration: '400%',
      triggerHook: 0
   })
   .setTween(lhotseBgTween)
   .addTo(controller)

   let lhotseMtTween = new TimelineMax().from('.lhotse-img-mountain', {
      scale: 1.0005,
      y: -2,
   })

   new ScrollMagic.Scene({
      triggerElement: '.lhotse',
      duration: '400%',
      triggerHook: 0
   })
   .setTween(lhotseMtTween)
   .setPin('.lhotse')
   .addTo(controller)

   let lhotseLandTween = new TimelineMax().from('.lhotse-img-land', {
      scale: 1.005,
      y: -5,
   })

   new ScrollMagic.Scene({
      triggerElement: '.lhotse',
      duration: '400%',
      triggerHook: 0
   })
   .setTween(lhotseLandTween)
   .addTo(controller)
   

   // makalu 

   let makaluTxtTween = new TimelineMax().from('.makalu-txt', {
      x: -400,
      y: 200,
      scale: 0.5,
      rotate: -90,
      opacity: 0,
   })

   new ScrollMagic.Scene({
      triggerElement: '.makalu',
      duration: '400%',
      triggerHook: 0
   })
   .setTween(makaluTxtTween)
   // .setPin('.makalu')
   .addTo(controller)


   let makaluBGTween = new TimelineMax().from('.makalu-img-background', {
      x: -20,
   })

   new ScrollMagic.Scene({
      triggerElement: '.makalu',
      duration: '400%',
      triggerHook: 0,
   })
   .setTween(makaluBGTween)
   // .setPin('.makalu')
   .addTo(controller)

   let makaluMtTween = new TimelineMax().from('.makalu-img-mountain', {
      x: -10,
      scale: 1.001,
   })

   new ScrollMagic.Scene({
      triggerElement: '.makalu',
      duration: '400%',
      triggerHook: 0,
   })
   .setTween(makaluMtTween)
   // .setPin('.makalu')
   .addTo(controller)

   let makaluLandTween = new TimelineMax().from('.makalu-img-land', {
      // y: -2,
      x: -10,
      scale: 0.99999
   })

   new ScrollMagic.Scene({
      triggerElement: '.makalu',
      duration: '400%',
      triggerHook: 0,
   })
   .setTween(makaluLandTween)
   .setPin('.makalu')
   .addTo(controller)



   // asdasdasd

   const sectionLoremEverest = document.querySelector('.lorem-everest')
   const sectionKanchenjung = document.querySelector('.kanchenjung')
   const sectionLoremKanchenjung = document.querySelector('.lorem-kanchenjung')
   const sectionLhotse = document.querySelector('.lhotse')
   const sectionLoremLhotse = document.querySelector('.lorem-lhotse')
   const sectionMakalu = document.querySelector('.makalu')
   const sectionLoremMakalu = document.querySelector('.lorem-makalu')
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

      if(top > 0) nav.classList.remove('in-section')
      
      if(top < 0) nav.classList.add('in-section')

      if(top2 < 0) nav.classList.remove('in-section')

      if(top3 < 0) nav.classList.add('in-section')

      if(top4 < 0) nav.classList.remove('in-section')

      if(top5 < 0) nav.classList.add('in-section')

      if(top6 < 0) nav.classList.remove('in-section')

      if(top7 < 0) nav.classList.add('in-section')

      window.requestAnimationFrame(onScroll)
   }

   window.requestAnimationFrame(onScroll)


})






