'use strict'

const numeros = [10, 3, 6, 9, 50, 4, 3, 31, 80, 101]

const funcionarios = [
    {
        'id'    : '1001',
        'nome'  : 'Ana',
        'cidade': 'Jandira',
        'salario': 2845.70
    },
    {
        'id'    : '1002',
        'nome'  : 'Jose',
        'cidade': 'Osasco',
        'salario': 5245.10
    },
    {
        'id'    : '1003',
        'nome'  : 'Maria',
        'cidade': 'Jandira',
        'salario': 7777.77
    },
    {
        'id'    : '1004',
        'nome'  : 'Pedro',
        'cidade': 'Jandira',
        'salario': 3045.40
    }
]

/**
 * Responsável por determinar se o número é PAR
 * @param {number} numero 
 * @returns boolean
 */
const ePar = (numero) => numero % 2 == 0
const numerosPares = numeros.filter(ePar)

/**
 * Recebe um número e retorna o número ao quadrado
 * @param {number} numero 
 * @returns number
 */
const quadrado = (numero) => numero * numero;
const numerosQuadrados = numeros.map(quadrado);

/**
 * Recebe dois números e retorna a soma
 * @param {Number} a 
 * @param {Number} b 
 * @returns Number
 */
const soma = (a, b) => a + b
const total = numeros.reduce(soma, 0)


const totalParesQuadrado = numeros.map(quadrado)
                                .filter(ePar)
                                .reduce(soma)

/**
 * Recebe um objeto funcionário e retorna verdadeiro quando a cidade é Jandira
 * @param {Object} funcionario 
 * @returns boolean
 */
const funcionarioJandira = (funcionario) => funcionario.cidade == 'Jandira'
const qtdFuncionarioJandira = funcionarios.filter(funcionarioJandira).length

const somaSalarios = (acumulador,funcionario) => acumulador + funcionario.salario;
const somaSalario = funcionarios.reduce(somaSalarios,0);
console.log(somaSalario);