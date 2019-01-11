// document.querySelector('.add-task').addEventListener("click", function () {
//     let list = document.getElementById('list');
//     let input = document.getElementById('task');
//     let newli = document.createElement('li');
//     let newchild = document.createElement('a');
//     newchild.className = "delete-item secondary-content";
//     let childtwo = document.createElement('i');
//     childtwo.className = "fa fa-remove";
//     newli.className = "collection-item";
//     newchild.appendChild(childtwo);
//     newli.appendChild(newchild);
//     list.appendChild(document.createTextNode(input.value));
//     list.appendChild(newli);
// });

document.querySelector('.add-task').addEventListener("click",function (e) {
  if (input.value === "") {
    alert("Enter Task First")
   }else{
  let list =document.getElementById('list');
  let newli = document.createElement('li');
  let newchild = document.createElement("a");
  let childtwo = document.createElement("i");
  let input = document.getElementById("input");
  childtwo.className = "fa fa-remove";
  newchild.className ="delete-item secondary-content";
  newchild.appendChild(childtwo);
  newli.append(document.createTextNode(input.value));
  newli.append(newchild);
  list.append(newli);
    newli.className = "collection-item";
    e.preventDefault()
  }
  // Console.log("list");

})

// document.querySelector(".clear-tasks").addEventListener("click", onclick1);
// function onclick1() {
//   const ul = document.querySelector("ul");
//   ul.remove();
// }

// document.querySelector(".fa-remove").addEventListener("click" ,function () {
//   const remove = document.querySelector("li");
//   remove.remove('input.value');
  
// } )

document.body.addEventListener('click', remove);
function remove(e) {
  if(e.target.classList.contains("fa-remove")){
    e.target.parentElement.parentElement.remove();
  }
}


document.body.addEventListener("click",cleartask);
function cleartask(e) {
  if (e.target.classList.contains("clear-tasks")) {
    let list = e.target.previousElementSibling.childern;
    let i = 0;
    while (i<list.lenght) {
      e.target.previousElementSibling.childern[i].remove();
      
    }
  }
}
// ulElem.removeChild(ulElem.childNodes[i]
// document.body.addEventListener('click', function (e) {
//   if (e.target.classList.contains("fa-remove")) {
//     e.target.parentElement.parentElement.remove();
//   };



// document.body.addEventListener('click',function (e) {
//   if (e.target.className === 'clear-tasks') {
//     e.target.previousElementSibling.contains.remove();
//   } 
// }


// document.querySelector(".one").addEventListener('click' ,function () 
// {
//   console.log("one");
// },true);

// document.querySelector('.two').addEventListener("click",function () {
//   console.log("two");  
// },true);
// document.querySelector('.three').addEventListener("click",function () {
//   console.log("tree");  
// },true);