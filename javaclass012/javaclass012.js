/*
//Função para atualizar a hora
function updateHour() {
    var hora = new Date(); // Obtém a hora atual do sistema
    var hours = hora.getHours(); // Obtém apenas a parte da hora

    // Define a mensagem de saudação com base na hora
    if (hours < 12) {
        $greeting.innerHTML = 'Bom dia!';
    } else if (hours < 18) {
        $greeting.innerHTML = 'Boa tarde!';
    } else {
        $greeting.innerHTML = 'Boa noite!';
    }
}

// Atualiza a hora quando a página é carregada
updateHour();

// Define um intervalo para atualizar a hora a cada minuto (ou a qualquer intervalo desejado)
setInterval(updateHour, 60000); // 60000 milissegundos = 1 minuto.*/



var hora=new Date() // Obtém a hora atual do sistema*/
var $hours=hora.getHours() // Obtém apenas a parte da hora*/

var $hours=document.getElementById('datetime')
var $greeting=document.querySelector('.greeting')

$hours.addEventListener
('input',function(){
    /*A linha de código abaixo está obtendo o valor da hora de um campo de entrada (presumivelmente, um campo de tempo), dividindo-o para separar as horas dos minutos e convertendo a parte das horas em um número inteiro, que é então armazenado na variável $hours.*/
    var $hours = parseInt(this.value.split(':')[0])
    if ($hours<12){
        $greeting.innerHTML='Bom dia!'
    } else if 
    ($hours<18){
        $greeting.innerHTML='Boa tarde!' 
    }else if 
    ($hours>=18){
        $greeting.innerHTML='Boa noite!' 
    }
/* a linha 12 e 13 'if 
    ($hours>=18)' poderia ser retirada e o script funcionaria do mesmo jeito,
    ai ficaria:else 
        $greeting.innerHTML='Boa noite!.' 
    } */
})