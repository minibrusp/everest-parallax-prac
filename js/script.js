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
.setTween(headerTextTween)
.setPin('main>header')
.addIndicators({name: 'Headers'})
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
.addIndicators({name: 'header title'})
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
.addIndicators({name: 'header mountain'})
.addTo(controller)

let mountainBgTween = new TimelineMax().fromTo('.header-background', {
   scale: 1,
}, {
   scale: 1.2,
   y: 50,
})

new ScrollMagic.Scene({
   triggerElement: 'main header',
   duration: '400%',
   triggerHook: 0,
})
.setTween(mountainBgTween)
.addIndicators({name: 'background mountain'})
.addTo(controller)


// asdasdasd

const sectionLorem = document.querySelector('.lorems')
const nav = document.querySelector('nav')
const navHeight = nav.scrollHeight



const onScroll = () => {

   let sectionLoremTopPos = sectionLorem.getBoundingClientRect().top - navHeight

   console.log(sectionLoremTopPos);

   sectionLoremTopPos < 0
      ? nav.classList.add('in-section')
      : nav.classList.remove('in-section')



   window.requestAnimationFrame(onScroll)
}

window.requestAnimationFrame(onScroll)
