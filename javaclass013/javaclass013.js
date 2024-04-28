/*var $dayweek=document.querySelector('.informday')
var $informingdayweek=new Date()
var $weekday=$informingdayweek.getDay()

switch($weekday) {
    case 0: $dayweek.innerHTML='domingo'
break

case 1: $dayweek.innerHTML='segunda'
break

case 2: $dayweek.innerHTML='terça'
break

case 3: $dayweek.innerHTML='quarta'
break

case 4: $dayweek.innerHTML='quinta'
break

case 5: $dayweek.innerHTML='sexta'
break

case 6: $dayweek.innerHTML='sábado'
break

default: $dayweek.innerHTML='dia inválido'
}*/

document.addEventListener('DOMContentLoaded', function() {
   const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
   const diaSemanaElement = document.querySelector('.informday');
   const dataAtual = new Date();
   const diaSemana = dataAtual.getDay();
    
    if (diaSemana >= 0 && diaSemana <= 6) {
        diaSemanaElement.innerHTML = diasSemana[diaSemana];
    }
});