
const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Verificando se os campos estão vazios
    if (nome.trim() === "" ||
        email.trim() === "" ||
        mensagem.trim() === "") {

        alert("Por favor, preencha todos os campos!");
        return;
    }

   
    // Verificando o formato do e-mail
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email.trim())) {
        alert("Digite um e-mail válido!");
        return;
    }

    window.location.href = "obrigado.html";

});
