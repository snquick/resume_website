const navTrigger=document.querySelector(".nav-trigger");
const nav=document.querySelector(".stetchy-nav");

navTrigger.addEventListener("click",function (argument) {
    console.log("hi")
    nav.classList.toggle("nav-is-visible");
})

const ahref=document.querySelector(".links").children;

for(let i=0; i<ahref.length; i++) {
    const a=ahref[i].querySelector("a");
    a.addEventListener("click", function() {
        for(let j=0; j<ahref.length; j++) {
            ahref[j].querySelector('a').classList.remove("active");
        }
        this.classList.add("active");
    })
}
