const bar=document.getElementById("bar");
const close=document.getElementById("close")
const nav=document.getElementById("navbar");


bar.addEventListener("click",() => {
    nav.classList.add("active");
    // alert("Hello World");
})

close.addEventListener("click",() => {
    nav.classList.remove("active");
})


                     // SPRODUCT PAGE JAVASCRIPT PART

var mainimg=document.getElementById('mainimg')
var smallimg=document.getElementsByClassName("small-img")

smallimg[0].onclick=function(){
    mainimg.src=smallimg[0].src;
}
smallimg[1].onclick=function(){
    mainimg.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
    mainimg.src=smallimg[2].src;
}