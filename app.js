// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



btns.forEach( (btn) => {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    // background color
    let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
    
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "maroon";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});



function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}



