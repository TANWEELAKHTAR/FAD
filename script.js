// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.main'),
//   smooth: true
// });


console.log("aaj bhai javaScript likhe ga")
let image = document.querySelector("#image")
let h1 = document.querySelector("h1")
let para = document.querySelector("#card-para")
let images = ['image/slide_2.png', 'image/slide_3.png', 'image/slide_4.png','image/slide_1.png' ]
let h1s = ['Level up with fashion ', 'Unlock coupons & more by Fashion ', 'Become an verified Influencer ','Create Share fashion ']
let paras = [`the users will start at Level 1.gain points based on the likes they receive on their post and profile visits 
you level up ...`, 'At every tier, they will unlock coupons for brands which they can redeem to purchase different products clothes, accessories, etc', `Once you reaches Level 25, you become "Influencer" unlocking monetization 
sponsorships & more `, 'show your funky sense of fashion to people and learn about fashion and do everything fashion without being judged']
let index = 0

function change() {
  image.src = images[index]
  h1.textContent = h1s[index]
  para.textContent = paras[index]
  index = (index + 1) % images.length
  
}
setInterval(change, 2500);



