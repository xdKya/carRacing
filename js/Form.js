class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  mousePressed() {
    this.playButton.mousePressed(() => {
      this.playButton.hide();
      this.input.hide();
      this.greeting.html(`Seja bem vindo, ${this.input.value()}! </br>
      Aguarde o próximo jogador entrar!`);
    });
  }

  display() {
    this.titleImg.position(50, 50);
    this.input.position(width / 2, height / 2);
    this.playButton.position(width / 2, height / 2 + 50);
    this.greeting.position(width / 2, height / 2);

    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");

    this.mousePressed();
  }
}
