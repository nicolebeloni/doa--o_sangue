function formulario () {
    let nome= document.getElementById("nome").value;
    let email= document.getElementById("email").value;
    let idade= document.getElementById("idade").value;
    let peso= document.getElementById("peso").value;
    let sanguineo= document.getElementById("sanguineo").value;
    let telefone= document.getElementById("telefone").value;
    let cidade= document.getElementById("cidade").value;
    let estado= document.getElementById("estado").value;


 if (nome.indexOf(" ") == -1) {
        alert("Informe nome e sobrenome!");
        return;
    }

    if (idade < 16) {
        alert("Idade mínima é 16 anos!");
        return;
    }

    if (peso < 50) {
        alert("Peso mínimo é 50kg!");
        return;
    }

    if (isNaN(telefone)) {
        alert("Telefone deve ter apenas números!");
        return;
    }


    if (!email.includes("@") || !email.includes(".")) {
        alert(" Por favor, informe um e-mail válido (exemplo@dominio.com)!");
        document.getElementById("email").focus();
        return false;
    }

     if (sanguineo === "") {
        alert("Por favor, selecione seu tipo sanguíneo!");
        return;
    }

    if (telefone === "") {
        alert("Por favor, informe seu telefone!");
        return;
    }
    
    if (isNaN(telefone)) {
        alert("Telefone deve ter apenas números!");
        return;
    }

    if (cidade === "") {
        alert("Por favor, informe sua cidade!");
        return;
    }


    if (estado === "") {
        alert("Por favor, informe seu estado!");
        return;
    }


    alert("Cadastro realizado com sucesso!");


}
