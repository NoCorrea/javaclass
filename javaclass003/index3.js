/*o sinal de '+' faz a concatenação;todo texto que tiver que ser exibido no 'alert' sem que seja o valor atribuido à variável tem que ficar entre aspas simples ou dupla*/
var n1 =Number(prompt('Digite um número.')) 
var n2 =Number(prompt('Digite outro número.')) 
/*cao queira que o número digitado nos campos sejam inteiros devemos colocar: var n1=Number.parseInt(promppt....)
e caso deseje que seja real no lugar do Number.parsseInte, digite: Number.parseFloat*/
/*a conversão de número para string devo utilizar o comando: string(n) ou n.string(), sendo n o valor da variável que desejo transformar de nº para string.*/ 
var s = n1+n2

alert  ("A soma dos números é " + String(s) + '!!!' )
/* a colocação do 'string' no comando acima converte obrigatoriamente o resultando numa string. */
alert  ("A soma dos números é " + s + "!" ) 
alert ("A soma dos números "+ n1 +' e '+ n2 + ' é ' + s+'.')
alert (`a soma de ${n1} e ${n2} é ${s}!!`)













