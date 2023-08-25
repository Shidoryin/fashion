// var button = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count -= 1;
//   button.innerHTML = "clickme: " - count;
// };

function search() {
    let input = document.getElementById("search-icon").value
    input = input.toLowerCase();
    let x = document.getElementsByClassName("items");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else{
            x[i].style.display="list-item"
        }

  g} 
}
function show(){
  let input=document.querySelector(".search-icon")
  if (input.style.display === 'none') {
    input.style.display = 'flex'
  } else {
    input.style.display = 'none'
  }
}


//initialising a variable name data
 
let data = 0;
 
//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;
 
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
    if (data > 10) {
      data = 0;
      document.getElementById("counting").innerText = data;
    }
}
//creation of decrement function
function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
    if (data <= 0) {
      data = 0;
      document.getElementById("counting").innerText = data;
    }
}











// let hamburger = document.querySelector(".hamburger");
// let menu = document.querySelector(".menu");
// let isActive = false;\

// function toggleMenu() {
//   isActive = isActive; // toggle the active state

//   hamburger.classList.toggle('active');
//   menu.classList.toggle('active');

//   if (active) {
//     document.addEventListener('click', closeMenu);
//   }
//   else{
//     document.addEventListener('click', closeMenu)
//   }
// }
// function closeMenu(event) {
//   if(!menu.contains(event.target) && !hamburger.contains(event.target))
//   isActive = false;
//   hamburger.classList.remove('active');
//   menu.classList.remove('active');
//   document.removeEventListener('click', closeMenu)
// }