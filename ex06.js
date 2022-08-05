/*6.A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!*/

const pessoas = [
    {
        numeroCriancas: 2,
        salario: 2000
    },
    {
        numeroCriancas: 4,
        salario: 5000
    },
    {
        numeroCriancas: 3,
        salario: 3000
    },
    {
        numeroCriancas: 5,
        salario: 4000
    },
    {
        numeroCriancas: 1,
        salario: 1500
    },
    {
        numeroCriancas: 0,
        salario: -2000
    },
]

function encontrarMediaSalario(informacaoPessoas) {

    let mediaSalario = 0
    let mediaCriancas = 0
    let maiorSalario = 0

    for(let i=0; i <= informacaoPessoas.length; i++){

        const salario =informacaoPessoas[i].salario
        const criancas = informacaoPessoas[i].numeroCriancas

        if(salario > maiorSalario) maiorSalario=salario

        if(salario < 0){
            console.log(`Média de salário R$${(mediaSalario/i).toFixed(0)}`)
            console.log(`Média de filhos ${(mediaCriancas/i).toFixed(0)}`)
            console.log(`Maior Salário R$${maiorSalario}`)
            break
        } else {
            mediaSalario = mediaSalario + salario;
            mediaCriancas += criancas
        }
    }
}
encontrarMediaSalario(pessoas)