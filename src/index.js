import { createStore } from "./redux";
const countElement = document.getElementById("count");
const addBtn = document.getElementById("add");
const minusBtn = document.getElementById("minus");

function reducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);
store.subscribe(render);

function render() {
  countElement.innerHTML = store.getState();
}


addBtn.addEventListener("click", function () {
  store.dispatch({ type: "ADD" });
});

minusBtn.addEventListener("click", function () {
  store.dispatch({ type: "MINUS" });
});
