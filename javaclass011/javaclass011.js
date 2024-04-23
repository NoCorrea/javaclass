var $age=document.querySelector('.age-report')
var $electionCondition=document.querySelector('.election-condition')

$age.addEventListener('input',function(){
    var $ageReport=Number($age.value)
    if ($ageReport<16){
        $electionCondition.innerHTML='Você não pode votar e nem retirar o título eleitoral.'
    } else
    if ($ageReport<18){
        $electionCondition.innerHTML='Você tem a opção de votar e pode retirar o título eleitoral.' 
    }else
    if ($ageReport>=70){
        $electionCondition.innerHTML='Você tem a opção de votar e manter seu título eleitoral.' 
    } else
     if ($ageReport>=18 && $ageReport <70)
        {
        $electionCondition.innerHTML='Você é obrigado a votar e deve retirar o título eleitoral.' 
    }})



