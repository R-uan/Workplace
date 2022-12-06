const url = "https://catfact.ninja/fact";

function printFact(factReceived) {
  document.getElementById("text-content").innerHTML = factReceived.fact;
}

const getFact = async () => {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      printFact(data);
    })
    .catch((error) => document.getElementById("text-content").innerHTML = error);
};

getFact();
