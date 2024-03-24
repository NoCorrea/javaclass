/*o sinal de '+' faz a concatenação;todo texto que tiver que ser exibido no 'alert' sem que seja o valor atribuido à variável tem que ficar entre aspas simples ou dupla*/
var n1 =Number(prompt('Digite um número.')) 
var n2 =Number(prompt('Digite outro número.')) 
/*cao queira que o número digitado nos campos sejam inteiros devemos colocar: var n1=Number.parseInt(promppt....)
e caso deseje que seja real no lugar do Number.parsseInte, digite: Number.parseFloat*/
/*a conversão de número para string devo utilizar o comando: string(n) ou n.string(), sendo n o valor da variável que desejo transformar de nº para string.*/ 
var s = n1+n2

alert  ("A soma dos números é " + s + '!!!' )/*nese caso o resultado 's' é uma string*/ 
alert  ("A soma dos números é " + string(s) + '!' ) 
alert ("A soma dos números "+ string(n1) +' e '+ string(n2) + ' é ' + string(s)+'.')









