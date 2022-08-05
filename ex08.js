/*8. Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - Tempo em meses, que o valor está investidoA função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.*/

function calculoDeDesconto(nome, valor, primeiraCompra, pagamentoAVista) {

    const desc30PorCento = valor * 0.70
    const desc25PorCento = valor * 0.75
    const desc20PorCento = valor * 0.80
    const desc15PorCento = valor * 0.85
    const desc10PorCento = valor * 0.90
    const desc5PorCento = valor * 0.95
    const numAleatorio = Math.floor(Math.random() * 10 + 1)
    const descAleatorio = Math.floor((numAleatorio / 100) * valor)

    if (primeiraCompra && pagamentoAVista) {

        if (valor > 1000) { console.log(`${nome}, obrigado pela sua compra, total é R$ ${valor}, você recebeu um desconto de 30% ,valor a pagar R$ ${(desc30PorCento).toFixed(0)}`) }
        else if (valor < 1000 && valor > 500) { console.log(`${nome}, obrigado pela sua compra, total é R$ ${valor}, você recebeu um desconto de 25% valor a pagar R$ ${desc25PorCento}`) }
        else if (valor < 500) { console.log(`${nome}, obrigado pela sua compra, total é R$ ${valor} ,você recebeu um desconto de 20%, valor a pagar R$ ${desc20PorCento}`) }
    }

    if (primeiraCompra && !pagamentoAVista) {
        if (valor > 1000) { console.log(`${nome}, obrigado pela sua compra, total é R$ ${valor}, você recebeu um desconto de 20%, valor a pagar R$ ${desc20PorCento}`) }
        else if (valor < 1000 && valor > 500) { console.log(`${nome}, obrigado pela sua compra, total é R$ ${valor}, você recebeu um desconto de 15%, valor a pagar R$ ${desc15PorCento}`) }
        else if (valor < valor < 500) { console.log(`${nome}, obrigado pela sua compra, total é R$ ${valor},você recebeu um desconto de 10%, valor a pagar R$ ${desc10PorCento}`) }
    }

    if (!primeiraCompra && pagamentoAVista) {
        if (valor > 1000) { console.log(`${nome}, obrigado pela sua compra total é R$ ${valor}, você recebeu um desconto de 20%, valor a pagar R$ ${desc20PorCento}`) }
        else if (valor < 1000 && valor > 500) { console.log(`${nome}, obrigado pela sua compra, total é R$ ${valor}, você recebeu um desconto de 15%, valor a pagar R$ ${desc15PorCento}`) }
        else if (valor < valor < 500) { console.log(`${nome}, obrigado pela sua compra, total é R$ ${valor}, você recebeu um desconto de 10%, valor a pagar R$ ${desc10PorCento}`) }
    }

    if (!primeiraCompra && !pagamentoAVista) {
        if (valor > 1000) { console.log(`${nome}, obrigado pela sua compra, total é R$ ${valor}, você recebeu um desconto de 10%, valor a pagar R$ ${desc10PorCento}`) }
        else if (valor < 1000 && valor > 500) { console.log(`${nome}, obrigado pela sua compra, total é R$ ${valor}, você recebeu um desconto de 5%, valor a pagar R$ ${desc5PorCento}`) }
        else if (valor < 500) { console.log(`${nome}, obrigado pela sua compra, total é R$ ${valor}, você não recebeu desconto, mas você recebeu um cupom no valor de R$ ${descAleatorio}`) }
    }
}

calculoDeDesconto("Flavio", 50, false, false)

