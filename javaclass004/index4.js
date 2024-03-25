var nome = prompt('Qual é o seu nome? ')
/*document.write=('Seu nome tem {'$nome.lenght'}  letras`) /*veerificar efeetividade do codigo sem os sinai de '+'*/
/* Shift + alt + A, inclui comentário em Js, html e css */

document.write('Olá '+ nome.toUpperCase()+' Seu nome tem ' + nome.length + ' letras. <br>')

document.write('Olá <strong>' + nome.toUpperCase() + '</strong>. Seu nome tem ' + nome.length + ' letras.<br>')
/*'document.write'poderia ser substituido por um 'alert'*/

alert('seu nome tem exatamente '+nome.length+' letras.')

document.write('Seu nome em letras maiúsculas é: ' + nome.toUpperCase() + '.<br>')
document.write('Seu nome em letras minúsculas é: ' + nome.toLowerCase() + '.<br>')
/* vamos formatar numeros */
var n1 = 1245.3
document.write(n1+'<br>')/* NOTAÇÃO Nº UNIVERSAL */

document.write(n1.toFixed(2)+'<br>')/* NOTAÇÃO Nº FIXANDO 2 CASAS DECIMAIS */

document.write(n1.toFixed(2).replace('.',',')+'<br>')/* NOTAÇÃO DE Nº FIXANDO 2 CASAS DECIMAIS E TROCANDO O'.' POR ','. */

document.write(n1.toLocaleString('pt-BR')+"<br>")/* NOTAÇÃO DE Nº PADRÃO BRASIL */

document.write(n1.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})+'<br>')/* NOTAÇÃO DE Nº PADRÃO MOEDA BRASIL */

document.write(n1.toLocaleString('en-US',{style:'currency', currency: 'USD'})+'<br>')/* NOTAÇÃO DE Nº PADRÃO MOEDA EUA */

document.write(n1.toLocaleString('en-US',{style:'currency', currency: 'EUR'}))
/* NOTAÇÃO DE Nº PADRÃO MOEDA EURO */





  
        
