/*7.Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.*/

 function taxaMensal( valorInicial, valorAtual, tempo){
    const juros = (valorAtual - valorInicial) / (valorInicial * tempo)
    console.log((juros * 100).toFixed(2) + '%')
 }
taxaMensal(1000,1200,5)
