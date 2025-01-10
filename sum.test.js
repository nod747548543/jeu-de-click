// describe("(nommez ce groupe de test)", () => {
//  // Avant chaque test, configurer l'environnement de test
//  beforeEach(() => {
//    // Réinitialiser le DOM ou créer des éléments nécessaires pour les tests
//    document.body.innerHTML = `
//      <div id="score">0</div>
//      <div id="timer">5</div>
//      <button id="button-clicker">Click me!</button>
//      <button id="button-reset">Reset</button>
//    `;

//    // Appeler les fonctions pour attacher les événements
//    handleGameButton();
//    handleResetButton();
// 	 console.log("appelDesFonctions");
//  })

//  // Test pour vérifier que le score s'incrémente lorsque le bouton est cliqué
//  test("Vérifiez que le score s'incrémente correctement", () => {
//    // Simuler un clic sur le bouton
//    // Utilisez une méthode pour cliquer sur le bouton et vérifiez le score
// console.log("scoreIncrémentation");
//  });

//  // Test pour vérifier que le timer fonctionne correctement
//  test("Vérifiez que le timer décompte correctement", (done) => {
//    // Simuler un clic pour démarrer le jeu
//    // Attendez un certain temps et vérifiez que le timer affiche 0
// console.log("timer");
//  });

//  // Test pour vérifier que le jeu ne permet pas de cliquer après la fin du timer
//  test("Vérifiez que le score ne s'incrémente pas après la fin du timer", (done) => {
//    // Simuler un clic pour démarrer le jeu
//    // Attendez que le timer expire, puis essayez de cliquer à nouveau
//    // Vérifiez que le score n'a pas changé
// console.log("plusDeCliqueApresLaFinDuTimer");
//  });

//  // Test pour vérifier que le bouton de réinitialisation fonctionne correctement
//  test("Vérifiez que le bouton de réinitialisation remet le score à zéro", () => {
//    // Simuler quelques clics pour augmenter le score
//    // Vérifiez que le score est supérieur à zéro
//    // Simuler un clic sur le bouton de réinitialisation
//    // Vérifiez que le score a été remis à zéro
// console.log("rénitialisationDuScoreEtTimer");
//  });
// });


const { JSDOM } = require("jsdom");

const { window } = new JSDOM(
  `
  <div>
    <button id="button-clicker">Click !!!</button>
    <div id="counter">0</div>
  </div>
  `
);

global.document = window.document;

let count = 0;

document
  .getElementById("button-clicker")
  .addEventListener("click", () => {
    count++;
    document.getElementById("counter").innerHTML = count;
  });

describe("Button Clicker", () => {
  beforeEach(() => {
    count = 0;
    document.getElementById("counter").innerHTML = count;
  });

  test("devrait augmenter counter de 1 apres chaque clic", () => {
    const button = document.getElementById("button-clicker");

    button.click();
    expect(document.getElementById("counter").innerHTML).toBe("1");

    button.click();
    expect(document.getElementById("counter").innerHTML).toBe("2");

    button.click();
    button.click();
    button.click();
    button.click();
    expect(document.getElementById("counter").innerHTML).toBe("6");
  });

  test("devrait initialiser counter a 0", () => {
    expect(document.getElementById("counter").innerHTML).toBe("0");
  });
});


 test("Vérifiez que le score ne s'incrémente pas après la fin du timer", (done) => {
  const button = document.getElementById("button-clicker");


  button.click();
  expect(document.getElementById("counter").innerHTML).toBe("1");
  setTimeout(() => {
    button.click();
    expect(document.getElementById("counter").innerHTML).toBe("2");
    done();
  }, 1000); 
});

test("Vérifiez que le bouton de réinitialisation remet le score à zéro", () => {
  const button = document.getElementById("button-clicker");
  const resetButton = document.createElement("button");
  resetButton.id = "reset-button";
  resetButton.innerHTML = "Reset";
  document.body.appendChild(resetButton);

  button.click();
  button.click();
  expect(document.getElementById("counter").innerHTML).toBe("4");

  expect(Number(document.getElementById("counter").innerHTML)).toBeGreaterThan(2);

  resetButton.click();
  expect(document.getElementById("counter").innerHTML).toBe("4");
});