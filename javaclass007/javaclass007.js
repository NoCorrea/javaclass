function somar (){
    var tn1 = document.getElementById ('txtn1')
    var tn2 = document.querySelector ('#txtn2')
    /*usando o 'querySelector' devemos especificar '#' para 'id' e '.' para 'classes'*/
    var res = document.getElementById('res')
    var n1 =Number (tn1.value)
    var n2 =Number (tn2.value)
    var s = n1+n2
    console.log (s)
   
    res.innerHTML = 'A soma entre '+ n1 +' e '+ n2+ ' é igual a ' +s+'.'}
