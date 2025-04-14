//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);
let img = document.querySelector("img");

function getFetch() {
  const date = document.querySelector("input").value;
  const apiKey = "yIxpEc2sgmW4pfaXh97Mda8pAnRqtJO5QmGjLwZY";
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;
  const text = document.querySelector("h3");
  const video = document.querySelector("iframe");

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      if (data.media_type == "image") {
        img.src = data.url;
      } else {
        video.src = data.url;
      }

      text.innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
