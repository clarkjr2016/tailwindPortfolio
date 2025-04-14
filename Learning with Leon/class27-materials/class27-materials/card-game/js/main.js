//Create a fetch function that shuffles the first deck of cards and stores that shuffle into local storage

fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    const deck_id = localStorage.getItem("deck_id");
    if (deck_id) {
      deck_id = deck_id;
    } else {
      localStorage.setItem("deck_id", data.deck_id);
    }

    console.log(data.deck_id);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

function getFetch() {}
