const button = document.querySelector("button");

const h1 = document.querySelector("h1");

//create  an event listener for button that when clicked it calls the meme api

button.addEventListener("click", search);

function search() {
  let url = `https://api.agify.io?name=sierra`;
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      h1.innerText = data.age;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
