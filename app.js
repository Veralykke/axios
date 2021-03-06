const { default: axios } = require("axios");

axios

  ////////////////CLICK AND GET A NEW JOKE
  .get("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log(res.data.ticker.price);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

const fetchBitcoinPrice = async () => {
  try {
    const res = await axios.get(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    console.log(res.data.ticker.price);
  } catch (e) {
    console.log("ERROR", e);
  }
};

//SETTING HEADERS WITH AXIOS
//NBNB: Here we only want application JSON, you have to read the DOCS to figure it out, example som want you to have and enpoint that has /json in it or add the query string in i like ?type=json..this API wants
//a header, Accept set to application/json.."if we want json"
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const textJoke = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(textJoke);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  ///use async so we dont need to use .then osv
  try {
    const config = { headers: { Accept: "application/json" } }; // HEADERS
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);

////////////////////////////////SEARCH TV SHOW
const form = document.querySelector("#searchForm");
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
  console.log(res.data);
});
