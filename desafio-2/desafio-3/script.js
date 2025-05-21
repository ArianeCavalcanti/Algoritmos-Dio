class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Definindo o ataque baseado no tipo do herói
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "fez um ataque indefinido"; // Caso não seja um tipo válido
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias para testar
let heroi1 = new Heroi("Goku", 30, "mago");
let heroi2 = new Heroi("Naruto", 25, "ninja");

heroi1.atacar(); // Saída: O mago atacou usando magia
heroi2.atacar(); // Saída: O ninja atacou usando shuriken
	