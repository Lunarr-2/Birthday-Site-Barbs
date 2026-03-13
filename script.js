
/* HERO SCROLL ZOOM */

window.addEventListener("scroll",()=>{

const scroll = window.scrollY
const hero = document.getElementById("heroImages")

hero.style.transform = `scale(${1.3 - scroll/2000})`

})


/* MUSIC PLAY */

document.body.addEventListener("click",()=>{

const music=document.getElementById("music")
music.play()

},{once:true})


/* QA TOGGLE */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

const ans=card.querySelector(".answer")

if(ans.style.maxHeight){
ans.style.maxHeight=null
}else{
ans.style.maxHeight=ans.scrollHeight+"px"
}

})

})


/* FLOATING HEARTS */

setInterval(()=>{

const heart=document.createElement("div")
heart.className="heart"
heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"
heart.style.animationDuration=4+Math.random()*4+"s"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),6000)

},500)

