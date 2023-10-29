const input = require('readline-sync');

var opcao = '';
var listPlayers = [];

class Character {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    var ataque = '';
    switch (this.type) {
      case "mago":
        ataque = 'magia'
        break
      case "guerreiro":
        ataque = "espada"
        break
      case "monge":
        ataque = 'artes marciais'
        break
      case "ninja":
        ataque = "shuriken"
        break
      default:
        ataque = "ataque simples"
    }
    console.log(`O ${this.type} atacou usando ${ataque} `)
  }
}

function createCharacter() {
  console.clear()
  console.log("Crie um personagem")
  var nameCharacter = input.question("Qual o nome do personagem: ")
  var ageCharacter = input.question("Qual a idade do personagem: ")
  var typeCharacter = input.question("Qual o tipo [mago | guerreiro |monge | ninja]: ")
  player = new Character(nameCharacter, ageCharacter, typeCharacter);
  listPlayers.push(player);
  input.question("Personagem criado, tecle enter para continuar")
}

function attackCharacter() {
  if (listPlayers.length > 0) {
    console.clear()
    console.log("Escolha um personagem da lista abaixo:")
    number = listPlayers.length
    for (var i = 0; i < number; i++) {
      console.log(`${i+1} - Nome: ${listPlayers[i].name} - Idade: ${listPlayers[i].age} anos - Tipo: ${listPlayers[i].type}`)
    }
  } else {
    console.log("Crie pelo menos um personagem")
  }
  player = input.question("Digite o número do personagem escolhido: ")
  if (player <= listPlayers.length & player != 0) {
    listPlayers[player-1].attack()
    input.question("Tecle enter para continuar")
  } else {
    console.log("valor incorreto")
    input.question("Tecle enter para continuar")
  }
}

function menu() {
  console.clear()
  console.log("Digite a opção desejada:")
  console.log("1 - Criar um personagem")
  console.log("2 - Atacar")
  console.log("3 - Sair");
  value = input.question("Digite uma opção: ");
  return value;
}

while (opcao != 3) {
  opcao = menu()
  if (opcao == 1) {
    createCharacter()
  } else if (opcao == 2) {
    attackCharacter()
  } else if (opcao == 3) {
    console.log("Até Breve ! ! !")
  } else {
    console.log('opção inválida')
  }
}
