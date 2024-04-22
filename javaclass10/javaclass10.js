var $age=document.getElementById('age-information-field');
var $alertAge=document.querySelector('.older-or-younger-age-information');


$age.addEventListener('input',function(){
    var $ageInformation= Number($age.value);
    if ($ageInformation <18) {
        $alertAge.textContent='Você é menor de idade!'
    }
    else{
        
    if ($ageInformation >=60) {
        $alertAge.innerHTML='Você é maior de idade e <strong>idoso!</strong>'
    }
    else {
        $alertAge.textContent='Você é maior de idade!'
    }}
})



