/* eslint-disable no-unused-vars */
import "./App.css";

const number_element = document.querySelector(".counternum");

function increment() {
  const number = parseInt(number_element.innerHTML);
  number_element.innerHTML = number + 1;
}

function decrement() {
  const number = parseInt(number_element.innerHTML);
  number_element.innerHTML = number - 1;
}

function multi_increment() {
  const number = parseInt(number_element.innerHTML);
  const input = window.prompt("Please enter a number to add to the counter:");
  number_element.innerHTML = parseInt(number) + parseInt(input);
}

function multi_decrement() {
  const number = parseInt(number_element.innerHTML);
  const input = window.prompt("Please enter a number to subtract to the counter:");
  number_element.innerHTML = parseInt(number) - parseInt(input);
}

function reset_number() {
  number_element.innerHTML = 0;
}

function App() {
  return (
    <div id="counter" className="center">
      <input type="button" onClick={reset_number} value="Reset" />
      <p className="note">Click on the button to increment the number</p>
      <div id="counternum" className="counternum">0</div>
      <button className="btn" onClick={increment}>
        Increment
      </button>
      <button className="btn" onClick={decrement}>
        Decrement
      </button>
      <form className="form form-1">
        <p>Want to add multiple numbers click the button below:</p>
        <input
          type="button"
          onClick={multi_increment}
          value="Multi Increment"
        />
      </form>
      <form className="form form-2">
        <p>Want to subtract multiple numbers click the button below:</p>
        <input
          type="button"
          onClick={multi_decrement}
          value="Multi Decrement"
        />
      </form>
    </div>
  );
}

export default App;
