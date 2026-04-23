// ЗАВДАННЯ 1
const input = document.querySelector('#bookmarkInput');
const list = document.querySelector('#bookmarkList');

let myBox = JSON.parse(localStorage.getItem("bookmarks") || "[]");

function render() {

  list.innerHTML = myBox.map((url, i) => `
    <li>
      <a href="${url}" target="_blank">${url}</a>
      <button class="delete" onclick="remove(${i})">X</button>
    </li>`).join('');
  

  localStorage.setItem("bookmarks", JSON.stringify(myBox));
}

document.querySelector('#addBookmarkBtn').onclick = () => {
  if (input.value) {
    myBox.push(input.value);
    input.value = "";
    render();
  }
};

window.remove = (index) => {
  myBox.splice(index, 1);
  render();
};

render(); 


//ЗАВДАННЯ 2
import template from './template.hbs'; 
import productsData from './products.json'; 

const userName = document.querySelector("#username");
const pass = document.querySelector("#password");

document.querySelector("#saveBtn").onclick = () => {
  localStorage.setItem("login", userName.value);
  localStorage.setItem("password", pass.value);
  alert("Дані збережено!");
};


userName.value = localStorage.getItem("login") || "";
pass.value = localStorage.getItem("password") || "";


const root = document.querySelector('#formApp'); 
const markup = template(productsData);
root.insertAdjacentHTML('afterend', markup);