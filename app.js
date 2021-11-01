/*axios
  .get("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log(res.data.ticker.price);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });*/

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
const button = document.querySelector('button');

const addNewJoke = async () => {
  const textJoke = await getDadJoke();
  const newLI = document.createElement('LI');
  newLI.append(textJoke);
  jokes.append(newLI);
}

const getDadJoke = async () => {
  ///use async so we dont need to use .then osv
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
 return res.data.joke;
}

button.addEventListener('click', addNewJoke )