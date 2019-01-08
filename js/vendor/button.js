const list = document.querySelector('#list-one');
const add = document.querySelector('.button-one');
const remove = document.querySelector('.button-two');

add.addEventListener("click" , click)

function click(){
  let li = document.createElement('li');
  x=li.textContent="E";
  list.appendChild(li);
}


remove.addEventListener("click" , clickRemove)

function clickRemove(){
  let y = document.querySelector('li');
  y.remove();
  
}

  