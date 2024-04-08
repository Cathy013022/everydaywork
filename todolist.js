




// var check = document.querySelector(".check");







var addinput = document.getElementById("addinput");
var addupload = document.getElementById("addupload");

addupload.style.display= 'none';

addinput.addEventListener('focus',function() {
    addinput.style.display='none';
    addupload.style.display= 'block';
});




var cancel = document.querySelector(".cancel");

cancel.addEventListener('click',function() {
    addupload.style.display='none';
    addinput.style.display= 'block';
});


var star = document.getElementsByClassName("star");
var fillstar = document.getElementsByClassName("fillstar");
console.log(star,fillstar)

console.log(Array.from('star'));
console.log(Array.from('fillstar'));
Array.from(star).forEach(function(star,index) {
    console.log(star,fillstar);
    star.addEventListener('click',function() {
        star.style.display="none";        
        // fillstar.style.display='block';
        fillstar[index].style.display='block';
    });
  });
Array.from(fillstar).forEach(function(fillstar,index) {
    console.log(star,fillstar);
    fillstar.addEventListener('click',function() {
        fillstar.style.display="none";
        // fillstar.style.display='block';
        star[index].style.display='block'
    });

});

// if (star.style.display='none'){
//     fillstar.style.display='block';
// }
// else{
//     star.style.display='block';
// }

// function star(){
//     if (star.addEventListener='click'){
//         star.style.display="none";
//         fillstar.style.display='block';
//     }
// }