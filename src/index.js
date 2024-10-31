class heroi{
    constructor(tipo, nome = "", idade = 0){
        this.tipo = tipo.toLowerCase();
        this.nome = nome;
        this.idade = idade;
    }

    tipoAtaque(){
        switch (this.tipo) {
            case "mago":
                return "magia"
            case "guerreiro":
                return "espada"
            case "monge":
                return "artes marciais"
            case "ninja":
                return "shuriken"
            default:
                return "as mãos"
        }
    }

    escreve() {
        console.log(`O ${this.tipo} atacou usando ${this.tipoAtaque()}`)
    }
}

/* teste */

let heroiDaDio = new heroi("mago");

heroiDaDio.escreve()
