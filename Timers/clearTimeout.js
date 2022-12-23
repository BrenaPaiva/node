// Ele vai cancelar um timeOut, alguma função que foi registrada pelo timeOut
const timeOut = 3000
const finished = () => console.log("Se passou 3 segundos");

let timer = setTimeout(finished, timeOut);
clearTimeout(timer); //Ele fez o registro de tudo, mas o clearTimeout cancelou



