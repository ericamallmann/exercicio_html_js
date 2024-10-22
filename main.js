document.getElementById('valid-form').addEventListener('submit', function() {
    event.preventDefault();

const campoA = parseFloat(document.getElementById('campoA').value);
const campoB = parseFloat(document.getElementById('campoB').value);
const messageDiv = document.getElementById('message');

    if(campoB > campoA){
        messageDiv.textContent = 'Sucesso! O número B é maior que o número A.' ;
        messageDiv.className = 'message success';
    } else {
        messageDiv.textContent = 'Erro! O número B deve ser maior que o número A.' ;
        messageDiv.className = 'message error';
    }
});