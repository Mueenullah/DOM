document.querySelector('.add-task').addEventListener("click", function () {
  let list = document.getElementById('list');
  let input = document.getElementById('task');
  let newli = document.createElement('li');
  let newchild = document.createElement('a');
  newchild.className ="delete-item secondary-content";
  let childtwo = document.createElement('i');
  childtwo.className = "fa fa-remove";
  newli.className ="collection-item";
  newchild.appendChild(childtwo);
  newli.appendChild(newchild);
  list.appendChild(document.createTextNode(input.value));
  list.appendChild(newli);
} );



document.querySelector(".clear-tasks").addEventListener("click", onclick1);
function onclick1() {
  const ul = document.querySelector("ul");
  ul.remove();
}

document.querySelector(".fa-remove").addEventListener("click" ,function () {
  const remove = document.querySelector("li");
  remove.remove('input.value');
  
} )