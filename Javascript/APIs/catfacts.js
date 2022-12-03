const url = "https://catfact.ninja/fact";

function printFact(fact) {
  const factValues = Object.values(fact);
  console.log(`RANDOM CAT FACTS. LENGTH: ${factValues[1]}`);
  console.log(factValues[0]);
}

const getFact = async () => {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      printFact(data);
    });
};

getFact();
