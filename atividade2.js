let lista = "Fulano";
let evento = "Curso Web";
let data = 30-08-2021;
let idde = 19;
let cadastro = 100;
var dataAt = 29-08-2021;

while (cadastro <= 100) {
    if(data > dataAt){
        console.log("Data Válida!!");
    }else if(data < dataAt){
        console.log("Data Inválida!!");
        console.log("Sistema irá voltar ao início!!");
        return;
    }if(idde => 18){
        console.log("Idade Válida!!");
    }else if(idde < 17){
        console.log("Idade Inválida!!");
        console.log("Sistema irá voltar ao início!!");
        return;
    }
    console.log("Cadastro Realizado com sucesso!!");
    console.log("Nome do Participante/Palestrante: "+ lista +" \n"+ "Nome do Evento: "+ evento);
    cadastro++
}