//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTvShow {
  constructor(name, genre, rating, rank) {
    this.name = name;
    this.genre = genre;
    this.rating = rating;
    this.rank = rank;
  }

  name() {
    return this.name;
  }

  describe() {
    return `${this.name} has a rank of ${this.rank}`;
  }

  genre() {
    return this.genre;
  }
}

const bojack = new NetflixTvShow("Bojack", "Comedy", "10/10", "Best Show Ever");

console.log(bojack.describe());
