class hero {
  constructor(heroiNome, heroiIdade, heroiTipo) {
    this.heroiNome = heroiNome;
    this.heroiIdade = heroiIdade;
    this.heroiTipo = heroiTipo;
  }

  attack() {
    switch (this.heroiTipo) {
      case "mago":
        return `O ${this.heroiTipo} atacou usando magia`;
      case "guerreiro":
        return `O ${this.heroiTipo} atacou usando espada`;
      case "monge":
        return `O ${this.heroiTipo} atacou usando artes marciais`;
      case "ninja":
        return `O ${this.heroiTipo} atacou usando shuriken`;
    }
  }
}

let alef = new hero("Alef", 27, "mago");
console.log(alef.attack());

let davi = new hero("Davi", 30, "guerreiro");
console.log(davi.attack());

let lucas = new hero("Lucas", 46, "monge");
console.log(lucas.attack());

let joao = new hero("João", 22, "ninja");
console.log(joao.attack());
