/*o sinal de '+' faz a concatenação;todo texto que tiver que ser exibido no 'alert' sem que seja o valor atribuido à variável tem que ficar entre aspas simples ou dupla*/
var nome =prompt('Seu nome é?')
/* o prompt abre um input com um label "Seu nome é?" seguido do input onde vc digitará a informação solicitada. */

alert  ("É um prazer conhecê-lo " + nome + '!' ) 
/* o alert vai abrir um texto ( é um prazer....) concatenado com a var 'nome' */


alert("irei descobrir a sua idade no ano atual")
            var id1 = Number.parseInt(prompt("informe o ano atual"))
            var id2 = Number.parseInt(prompt("informe seu ano de nascimento"))
            var soma = id1 - id2
             alert("sua idade em " + id1 + " é: "+  soma +" anos!")




