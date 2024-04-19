var nationality=document.getElementById('nationality');
var resultnationality=document.getElementById('result-nat')


nationality.addEventListener('input', function(){
   if(nationality.value.toLowerCase() == 'brasil'){
    resultnationality.textContent='Você é Brasileiro';}
   else{
    resultnationality.textContent= 'Você é estrangeiro';
}
});

