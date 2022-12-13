// \n = quebra de linha process.stdout.write("alguma coisa aqui \n\n\n")
const questions = [
    "O que aprendi hoje?",
    "Que dia é hoje?",
    "Que tecnologia estou aprendendo?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {//quando minha condição rodar, o index terá o valor de 1 e por aí vai
    process.stdout.write("\n\n" + questions[index] + " > ")
}
ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
        //por que length? O total de lengths são 5 perguntas, entao ele nao vai acabar o comando quando o número de respostas for menor que o numero de perguntas
    }else{
        console.log(answers)
        process.exit(); //fechando o processo
    }
}) // on =  ouvidos do garçon data: esta função será rodada toda vez que estiver ouvindo "on" no processo
    // trim, para remover qualquer espaço vazio dentro da minha string  
    // ao dar o enter, ele pegou o data e colocou pra mim de volta
    process.on('exit', () => {
        console.log(`Bacana, segue abaixo o seu desepenho!
        O que voce aprendeu hoje foi: 
        ${answers[0]}
        O dia de hoje é:
        ${answers[1]}
        A tecnologia que você está investindo é:
        ${answers[2]}
        O que te deixou feliz foi: 
        ${answers[3]}
        A quantidade de pessoas que voce ajudou foi:
        ${answers[4]}
        `)
    });
    //Quando o meu else for rodado, o meu on vai estar ouvindo exit