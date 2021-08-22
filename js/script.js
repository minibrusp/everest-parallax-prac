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
   duration: '330%',
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
   scaleY: 1.02,
   y: -1
})

new ScrollMagic.Scene({
   triggerElement: 'main header',
   duration: '350%',
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
   duration: '400%',
   triggerHook: 0,
})
.setTween(mountainBgTween)
// .addIndicators({name: 'background mountain'})
.addTo(controller)

// kanchenjung

let kanchenjungTxtTween = new TimelineMax().from('.kanchenjung-txt', {
   y: 400,
   opacity: 0,
})

new ScrollMagic.Scene({
   triggerElement: '.kanchenjung',
   duration: '100%',
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
   duration: '200%',
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
   duration: '200%',
   triggerHook: 0,
})
.setTween(kanchenjungMtTween)
.setPin('.kanchenjung')
// .addIndicators({name: 'kanchenjung-img-mountain'})
.addTo(controller)



// asdasdasd

const sectionLoremEverest = document.querySelector('.lorem-everest')
const sectionLoremKanchenjung = document.querySelector('.lorem-kanchenjung')
const sectionKanchenjung = document.querySelector('.kanchenjung')
const nav = document.querySelector('nav')
const navHeight = nav.scrollHeight

// lorem everest

const onScroll = () => {

   let top = sectionLoremEverest.getBoundingClientRect().top - navHeight
   let top2 = sectionKanchenjung.getBoundingClientRect().top - navHeight
   let top3 = sectionLoremKanchenjung.getBoundingClientRect().top - navHeight

   if(top > 0) nav.classList.remove('in-section')
   
   if(top < 0) nav.classList.add('in-section')

   if(top2 < 0) nav.classList.remove('in-section')

   if(top3 < 0) nav.classList.add('in-section')

   window.requestAnimationFrame(onScroll)
}

window.requestAnimationFrame(onScroll)




