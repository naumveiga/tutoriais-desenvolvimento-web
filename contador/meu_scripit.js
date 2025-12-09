
function init() {
    let contador = 0
    let incremento = 1

    const entrada_valor_incremento = document.getElementById('entrada_valor_incremento')
    const mostrador = document.getElementById('mostrador')
    const incremento_mostrador = document.getElementById('incremento')
    const botao_soma = document.getElementById('botao_soma')
    const botao_subtrai = document.getElementById('botao_subtrai')
    const botao_setar_incremento = document.getElementById('setar_valor_incremento')

    mostrador.textContent = contador.toFixed(2)
    incremento_mostrador.textContent = incremento.toFixed(2)
    botao_soma.addEventListener('click', () => atualizaContador(incremento))
    botao_subtrai.addEventListener('click', () => atualizaContador(-incremento))

    botao_setar_incremento.addEventListener('click', () => {
        incremento = Number.parseFloat(entrada_valor_incremento.value)
        incremento_mostrador.textContent = incremento.toFixed(2)
    })

    function atualizaContador(value_incremento) {
        contador += value_incremento
        mostrador.textContent = contador.toFixed(2)    
    }
}

//Gera um erro porque o código está sendo carregado no HEAD do HTML. Ele tenta acessar os elementos antes deles serem criados.
//init()

// Desta forma garante que o javascript será executado após a página ser criada
window.onload = init
