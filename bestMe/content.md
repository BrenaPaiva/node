## Apresentando as perguntas com process.stdout.write
* stdout, o que irá escrever alguma coisa de saída(saída padrão)
## Recebendo os dados de entrada e assincronismo com process.stdin.on
* Alguma coisa que fica ouvindo eventos
* on =  ouvidos do garçon data: esta função será rodada toda vez que estiver ouvindo "on" no processo.
* trim, para remover qualquer espaço vazio dentro da minha string   ao dar o enter, ele pegou o data e colocou pra mim de volta.
## Lógica para apresentar perguntas e salvar respostas.
Toda a minha função "data" é guardada dentro do meu eventLoop 
* Quando entra na minha linha process stdin, ele só está aguardando a função que é chamada de callback(chame de volta) quando o eventLoop for rodado(vai estar rodando o tempo inteiro), e quando ele ouvir que tem um data, ele vai puxar a função e jogar pra gente(front) de novo
* Enquanto estiver dando enter, ele vai estar puxando a função pra gente
