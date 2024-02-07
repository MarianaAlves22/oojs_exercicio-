function Trabalhador(nome) {
    this.nome = nome;
    this.dizOla = function() {
        console.log(this.nome + " diz olá");
    }
}

function Entregador(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.05;
        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Trabalhador.call(this, nome);
}

function Pizzaiolo(nome) {
    Entregador.call(this, nome, "Pizzaiolo", 2100);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

function Recepcionista(nome) {
    Entregador.call(this, nome, "Recepcionista", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.06;
        this.setSalario(novoSalario);
    }
}

const entregador1 = new Entregador("Robison", "Motoboy", 1700);
const pizzaiolo1 = new Pizzaiolo("Luan", "Pizzaiolo", 2100);
const recepcionista1 = new Recepcionista("Marcela", "Recepcionista", 2000);

entregador1.aumento();
entregador1.dizCargo();
entregador1.dizOla();
console.log(entregador1.getSalario())

pizzaiolo1.aumento();
pizzaiolo1.dizCargo();
pizzaiolo1.dizOla();
console.log(pizzaiolo1.getSalario())

recepcionista1.aumento();
recepcionista1.dizCargo();
recepcionista1.dizOla();
console.log(recepcionista1.getSalario())