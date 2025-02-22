//Criando objeto telefone, com atributos ddd e numero
function Telefone(ddd, numero){ 
    this.ddd = ddd 
    this.numero = numero 

    //Criando métodos get e set para DDD
    Object.defineProperty(this, 'ddd', {
        get: function() {
            return ddd;
        },
        set: function(novoDDD) {
            ddd = novoDDD;
        }
    });

    //Criando métodos get e set para numero
    Object.defineProperty(this, 'numero', {
        get: function() {
            return numero;
        },
        set: function(novoNumero) {
            numero = novoNumero;
        }
    });
}

//Criando objeto endereco, com atributos estado, cidade, rua e numero
function Endereco(estado, cidade, rua, numero){ 
    this.estado = estado 
    this.cidade = cidade 
    this.rua = rua 
    this.numero = numero 

    //Criando métodos get e set para estado
    Object.defineProperty(this, 'estado', {
        get: function() {
            return estado;
        },
        set: function(novoEstado) {
            estado = novoEstado;
        }
    });
    
    //Criando métodos get para estado em caixa alta e baixa
    Object.defineProperty(this, 'estadoU', {
        get: function() {
            return estado.toUpperCase();
        }
    });

    Object.defineProperty(this, 'estadoL', {
        get: function() {
            return estado.toLowerCase();
        }
    });

    //Criando métodos get e set para cidade
    Object.defineProperty(this, 'cidade', {
        get: function() {
            return cidade;
        },
        set: function(novoCidade) {
            cidade = novoCidade;
        }
    });

    //Criando métodos get para cidade em caixa alta e baixa
    Object.defineProperty(this, 'cidadeU', {
        get: function() {
            return cidade.toUpperCase();
        }
    });

    Object.defineProperty(this, 'cidadeL', {
        get: function() {
            return cidade.toLowerCase();
        }
    });

    //Criando métodos get e set para rua
    Object.defineProperty(this, 'rua', {
        get: function() {
            return rua;
        },
        set: function(novoRua) {
            rua = novoRua;
        }
    });

    //Criando métodos get para rua em caixa alta e baixa
    Object.defineProperty(this, 'ruaU', {
        get: function() {
            return rua.toUpperCase();
        }
    });

    Object.defineProperty(this, 'ruaL', {
        get: function() {
            return rua.toLowerCase();
        }
    });

    //Criando métodos get e set para numero
    Object.defineProperty(this, 'numero', {
        get: function() {
            return numero;
        },
        set: function(novoNumero) {
            numero = novoNumero;
        }
    });

    //Criando métodos get para o endereço completo em caixa alta e baixa
    Object.defineProperty(this, 'enderecoU', {
        get: function() {
            return `Rua: ${this.ruaU}
            Numero: ${this.numero}
            Cidade: ${this.cidadeU}
            Estado: ${this.estadoU}` 
        } 
    });

    Object.defineProperty(this, 'enderecoL', {
        get: function() {
            return `Rua: ${this.ruaL}
            Numero: ${this.numero}
            Cidade: ${this.cidadeL}
            Estado: ${this.estadoL}` 
        }
    });
} 

//Criando objeto cliente, com atributos nome, telefone(objeto), email e endereco(objeto)
function Cliente(nome, telefone, email, endereco){ 
    this.nome = nome
    this.telefone = telefone 
    this.email = email 
    this.endereco = endereco 

    //Criando métodos get e set para nome
    Object.defineProperty(this, 'nome', {
        get: function() {
            return nome;
        },
        set: function(novoNome) {
            nome = novoNome;
        }
    });

    //Criando métodos get para nome em caixa alta e baixa
    Object.defineProperty(this, 'nomeU', {
        get: function() {
            return nome.toUpperCase();
        }
    });

    Object.defineProperty(this, 'nomeL', {
        get: function() {
            return nome.toLowerCase();
        }
    });

    //Criando métodos get e set para email
    Object.defineProperty(this, 'email', {
        get: function() {
            return email;
        },
        set: function(novoEmail) {
            email = novoEmail;
        }
    });

    //Criando métodos get para email em caixa alta e baixa
    Object.defineProperty(this, 'emailU', {
        get: function() {
            return email.toUpperCase();
        }
    });

    Object.defineProperty(this, 'emailL', {
        get: function() {
            return email.toLowerCase();
        }
    });

    //Criando método get para a descrição completa do cliente em caixa alta e baixa
    Object.defineProperty(this, 'descricaoU', {
        get: function() {
            return `
            ---------------------------
            Informações do Cliente
            ${this.nomeU}
            ---------------------------
            ---------------------------
            Telefone:                        
            DDD: ${this.telefone.ddd}
            Número: ${this.telefone.numero}
            ---------------------------
            Email: ${this.emailU}
            ---------------------------
            Endereço:
            ${this.endereco.enderecoU}
            ---------------------------`;
        }
    });

    Object.defineProperty(this, 'descricaoL', {
        get: function() {
            return `
            ---------------------------
            Informações do Cliente            
            ${this.nomeL}
            ---------------------------
            ---------------------------
            Telefone: 
            DDD: ${this.telefone.ddd}
            Número: ${this.telefone.numero}
            ---------------------------
            Email: ${this.emailL}
            ---------------------------
            Endereço: 
            ${this.endereco.enderecoL}
            ---------------------------
            `;
        }
    });

    //Criando método get para a descrição completa do cliente
    Object.defineProperty(this, 'descricao', {
        get: function() {
            return `
            ---------------------------
            Informações do Cliente
            ${this.nome}
            ---------------------------
            ---------------------------
            Telefone:
            DDD: ${this.telefone.ddd}
            Número: ${this.telefone.numero}
            ---------------------------
            Endereço:
            Rua: ${this.endereco.rua}
            Número: ${this.endereco.numero}
            Cidade: ${this.endereco.cidade}
            Estado: ${this.endereco.estado}
            ---------------------------`;
        }
    });
} 

//criando objetos
const telefone1 = new Telefone("11", "4556841355")
const endereco1 = new Endereco("PA", "Belem", "Rua Esmeralda", "56")
const cliente1 = new Cliente("João da Silva", telefone1, "joao@email.com", endereco1)

const telefone2 = new Telefone("15", "5184231654")
const endereco2 = new Endereco("SP", "Santos", "Rua Safira", "60")
const cliente2 = new Cliente("Maria Souza", telefone2, "maria@email.com", endereco2)

const telefone3 = new Telefone("12", "8792318923")
const endereco3 = new Endereco("MG", "Paraisópolis", "Rua Diamante", "95")
const cliente3 = new Cliente("Flávia Lima", telefone3, "flavia@email.com", endereco3)

const telefone4 = new Telefone("35", "5843218132")
const endereco4 = new Endereco("RS", "Porto Alegre", "Rua Ametista", "12")
const cliente4 = new Cliente("Marcelo Azevedo", telefone4, "marcelo@email.com", endereco4)

const telefone5 = new Telefone("55", "2318912312")
const endereco5 = new Endereco("RJ", "Rio de Janeiro", "Rua Perola", "101")
const cliente5 = new Cliente("Ana Beatriz", telefone5, "anabeatriz@email.com", endereco5)


//Criando o array de clientes
const clientes = [cliente1, cliente2, cliente3, cliente4, cliente5];

//Ordenando os clientes por ordem alfabética
clientes.sort((a, b) => {
    if (a.nome < b.nome) return -1; 
    if (a.nome > b.nome) return 1;
    return 0; 
});

//Exibindo informações ordenadas
for(let index = 0; index < clientes.length; index++){
    console.log(clientes[index].descricao)
    console.log()
}

//Exibindo informações em caixa alta
console.log(cliente1.descricaoU)

//Exibindo informações em caixa alta
console.log(cliente1.descricaoL)

//Exibindo informações normais
console.log(cliente2.descricao)

