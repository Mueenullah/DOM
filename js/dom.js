// creting a div //
let div = document.createElement('div');

// creating a textnode //
let textNode = document.createTextNode('my name is mueen'); 
console.log(textNode);

// assing class name to div //
div.className ='header btn';
console.log(div);

// creating a img tag //
let img = document.createElement('img');
console.log(img);

//setting attributes , id and class name to img //
img.src ='#';
img.id ='wallpaper';
img.className ='images';

// creating a section and setting attributes classname and id//

let section = document.createElement('section');
section.className='first-section';
section.id='developer';
console.log(section);
let text = document.createTextNode('my name is khann');
console.log(text);


// setting html content to section  and appending a h2 tag by appending property
section.innerHTML="<h2>my name is khan</h2> I mean Mueen khan";
div.innerHTML = "<pra>what up  how you doing today</pra>";
let h2 = document.createElement('h2');
h2.innerHTML = "<h2>heading 2</h2>";
section.appendChild(h2);


// appending new li to ol
let item = document.createElement('li');
item.innerHTML='wellcome';
lists.appendChild(item);

let lastitem = document.createElement('li');
lastitem.innerHTML ='last-one';
lists.appendChild(lastitem);
// appending new li before index 1

let beforeitem = document.createElement('li');
beforeitem.innerHTML ='before-item';
lists.insertBefore(beforeitem, lists.children[1]);


// append
// let newli = document.createElement('li');
// newli.innerHTML = 'permenent address';
// list.append(newli);
// 

// prepend //

let newli = document.createElement('li');
newli.innerHTML = 'permenent address';
list.prepend(newli);

// before ol and after ol//

// list.before('heading');
// list.after('thats the end');

// html before and after any element//

list.insertAdjacentHTML("beforebegin", "<h2>mueen</h2>");
list.insertAdjacentHTML("afterbegin", "<h2>mueen</h2>");
list.insertAdjacentHTML("beforeend", "<h2>mueen</h2>");
list.insertAdjacentHTML("afterend", "<h2>mueen</h2>");


/// makeing clone
let lists2 = lists.cloneNode(true);
lists.after(lists2);
lists2.querySelector('li').innerHTML='my-new address';
lists2.querySelector('li').innerHTML='my-new address';


// making clone while passing the argument flase 
let list2 = list.cloneNode(false);
list.after(list2);
// // lists2.querySelector('li').innerHTML='my-new address';
// // lists2.querySelector('li').innerHTML='my-new address';
let li = document.createElement('li');
li.innerHTML='hello-pakistan';
list2.append(li);
li.setAttribute('id','first-one');

console.log(li);
let li2 = document.createElement('li');
li2.innerHTML = "wellcome-to-paksitan";
list2.prepend(li2);




