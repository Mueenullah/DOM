document.querySelector('.one').addEventListener("click",function (e) {
  document.getElementById("one").style.backgroundColor = "#07456f";
  console.log("box-one");
  
})


document.querySelector('.two').addEventListener("click",function (e) {
  document.getElementById("two").style.backgroundColor ="#3a0088";
  console.log("box-two");
  
})


document.querySelector('.three').addEventListener("click",function (e) {
  document.getElementById("three").style.backgroundColor ="#ca2374";
  console.log("box-three");
  // e.stopPropagation();
  e.stopImmediatePropagation();
});