const url = "https://catfact.ninja/fact";

function printFact(factReceived) {
  const factValues = Object.values(factReceived);
  document.getElementById("text-content").innerHTML = factReceived.fact;
}

const getFact = async () => {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      printFact(data);
    })
    .catch((error) => console.log(error));
};

getFact();
