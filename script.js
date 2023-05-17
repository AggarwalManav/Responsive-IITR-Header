// const hamburger=document.querySelector("hamburger");
// const sidelist=document.querySelector("sidelist");

// hamburger.addEventListener("click",()=>{
//     sidelist.getElementsByClassName(sidelist).di
// })
let isClicked = true;
function myfunc() {
    if (isClicked) {
        document.getElementById("sidelist").style.display = "block";
        isClicked = false;
    } else {
        document.getElementById("sidelist").style.display = "none";
        isClicked = true;
    }

}
