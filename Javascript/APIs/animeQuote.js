const animeAPI = "https://animechan.vercel.app/api/random";
//anime, character, quote

const dead = (quote) => {
  console.log(`\nSource anime ${quote.anime}\n \n${quote.quote} \n`);
  console.log(`\n- ${quote.character.split(" ").reverse().join(", ")}\n`);
};

const diesOfCringe = async () => {
  fetch(animeAPI)
    .then((response) => response.json())
    .then((data) => dead(data));
};

diesOfCringe();
