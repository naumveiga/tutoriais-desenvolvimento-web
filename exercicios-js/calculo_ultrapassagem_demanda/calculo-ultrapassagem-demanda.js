const medido = [408, 686, 771, 789, 660, 435, 294, 250, 519, 549, 630, 678]
const CONTRATADO = 650
const LIMITE = 1.05

const soma = (a, b) => a + b;
const diferente_de_zero = (valor) => valor != 0

const calcularUltrapassagem = (medido, contratado, limite) => {    
    const ultrapassou = medido > (contratado * limite)
    return ultrapassou ? medido - contratado : 0
}

let ultrapassagem = medido.map((valor) => calcularUltrapassagem(valor, CONTRATADO, LIMITE ))
let quantidade_meses_ultrapassados = ultrapassagem.filter(diferente_de_zero).length
let total_ultrapassado = ultrapassagem.reduce(soma)

console.log(`Ultrapassagem por mês: ${ultrapassagem}`)
console.log(`Soma do valor ultrapassado: ${ultrapassagem}`)
console.log(`Quantidade de meses com ultrapassagem: ${quantidade_meses_ultrapassados}`)
console.log(`Soma das ultrapassagens: ${total_ultrapassado}`)