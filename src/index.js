function showTradition(response) {
  console.log("Is this working");

  new Typewriter("#xmas", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

function generateTradition(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-input");

  let context =
    "You are a Christmas traditions generator, your response is concise and in one paragraph along with Christmas emojis at the end of the paragraph.";
  let prompt = `Generate a Christmas tradition about ${userInstructions.value}`;

  let apiKey = "3f3b4696cb6569teb708ec8264d1ad5o";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let xmasTextGenerator = document.querySelector("#xmas");
  xmasTextGenerator.innerHTML = "Generating your topic... ⋆𐙚❅*°⋆❆.ೃ࿔*:";

  xmasTextGenerator.classList.remove("hidden");

  console.log("Generating...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(showTradition);
}

let traditionsFormElement = document.querySelector("#traditions-generator");
traditionsFormElement.addEventListener("submit", generateTradition);
