// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};
//Current state of the ingredients in the burger
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll(event) {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  renderIngredientsBoard(event);
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let tomato = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  let onion = document.querySelector("#onion");
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function (event) {
  state.Patty = !state.Patty;
  changeStatePatty()
  renderAll(event);
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function (event) {
  state.Cheese = !state.Cheese;
  changeStateCheese();
  renderAll(event);
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function (event) {
  state.Tomatoes = !state.Tomatoes;
  changeStateTomato();
  renderAll(event);
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function (event) {
  state.Onions = !state.Onions;
  changeStateOnion();
  renderAll(event);
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function (event) {
  state.Lettuce = !state.Lettuce;
  changeStateLettuce();
  renderAll(event);
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function changeStatePatty(){
  let btnPatty = document.querySelector('.btn-patty')
  if (!state.Patty){
    btnPatty.classList.remove('active')
  }
  else{
    btnPatty.classList.add('active')
  }
}
function changeStateCheese(){
  let btnCheese = document.querySelector('.btn-cheese')
  if (!state.Cheese){
    btnCheese.classList.remove('active')
  }
  else{
    btnCheese.classList.add('active')
  }
}
function changeStateTomato(){
  let btnTomato = document.querySelector('.btn-tomatoes')
  if (!state.Tomatoes){
    btnTomato.classList.remove('active')
  }
  else{
    btnTomato.classList.add('active')
  }
}
function changeStateOnion(){
  let btnOnion = document.querySelector('.btn-onions')
  if (!state.Onions){
    btnOnion.classList.remove('active')
  }
  else{
    btnOnion.classList.add('active')
  }
}
function changeStateLettuce(){
  let btnLettuce = document.querySelector('.btn-lettuce')
  if (!state.Lettuce){
    btnLettuce.classList.remove('active')
  }
  else{
    btnLettuce.classList.add('active')
  }
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(event){
  let button = document.querySelector(`.${event.target.classList[1]}`)
  if (button.classList[2]=='active'){
      document.querySelector('.menu-container').innerHTML+=`<p class="items" id=${button.textContent}>${button.textContent}</p>`
    }
  else{
        let item = document.getElementById(`${button.textContent}`)
        document.querySelector('.menu-container').removeChild(item)
    }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice(){
  let price = document.querySelector('.price-details')
  let items = document.querySelectorAll('.items')
  let total = wholeWheatBun
  items.forEach(item => {
    total = total + ingredients[`${item.textContent}`]
  })
  price.innerText = `INR ${total}`
}
