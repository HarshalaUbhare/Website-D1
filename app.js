const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


const elemC = document.querySelector(".ele-container");
const fix= document.querySelector("#fixed-img");

elemC.addEventListener("mouseenter",function(){
   fix.style.display="block";
})

elemC.addEventListener("mouseleave",function(){
    fix.style.display="none";
 })

var eleImg= document.querySelectorAll(".elem1")
  eleImg.forEach((e)=>{
    e.addEventListener("mouseenter",function(){
       var img= e.getAttribute("data-img");
       fix.style.backgroundImage= `url(${img})`;
     })
  })

  var swiper = new Swiper(".mySwiper", {
   slidesPerView: "auto",
   centeredSlides: true,
   spaceBetween: 20,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });
 
function menuFunction(){

  var menu= document.querySelector("nav h3");
  var full= document.querySelector("#full-scr");
  var navimg= document.querySelector("nav img");
  var flag=0;
  menu.addEventListener("click",function(){
   if(flag == 0){
     full.style.top=0
     navimg.style.opacity=0
     flag=1
 
   }else{
     full.style.top="-100%"
     navimg.style.opacity=1
     flag = 0
   }
 
 
  })
}
menuFunction()


var loder= document.querySelector("#loader")
setTimeout(function(){
  loder.style.top="-100%";
},4000)