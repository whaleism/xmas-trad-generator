function generateTradition(event) {
  event.preventDefault();

  let xmasBox = document.querySelector("#xmas");

  new Typewriter("#xmas", {
    strings:
      "Generating your Christmas tradition with the topic you provided...",
    autoStart: true,
    cursor: null,
    delay: 100,
  });
}

let traditionsFormElement = document.querySelector("#traditions-generator");
traditionsFormElement.addEventListener("submit", generateTradition);
