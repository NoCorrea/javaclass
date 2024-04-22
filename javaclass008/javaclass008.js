
    
    // Obtém o elemento do campo "regvel"
var regvel = document.getElementById('regvel');
// Obtém o elemento do campo "vel"
var vel = document.getElementById('vel');
// Obtém o elemento do texto forte "alert"
var alert = document.getElementById('alert');

// Adiciona um ouvinte de eventos para detectar quando o valor de "regvel" é alterado
regvel.addEventListener('input', function() {
    // Define o valor de "vel" como o valor atual de "regvel"
    vel.value = regvel.value;
    
    // Verifica se a velocidade é maior que 60 km/h e substitui o texto dentro de "alert" conforme necessário
    if (vel.value > 60) {
        alert.textContent = 'Você foi multado!';
    } else {
        // Se a velocidade for 60 km/h ou menos, restaura o texto original
        alert.textContent = 'Dirija com cuidado!';
    }
});