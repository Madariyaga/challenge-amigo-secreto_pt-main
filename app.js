//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const arrayAmigo = []

function adicionarAmigo() {
    const nome = document.getElementById("amigo").value;
    const nomeJaExiste = arrayAmigo.map(amigo => amigo === nome).includes(true);

    if (nomeJaExiste) {
        document.getElementById("amigo").value = ''
        return alert("Nome já existe!")
    } else if (nome === ""){
        return alert("O campo nome não pode ser adicionado vazio!")
    }

    arrayAmigo.push(nome)
    document.getElementById("amigo").value = ''
    document.getElementById("listaAmigos").innerText = arrayAmigo.join(", ");
}

function sortearAmigo(array) {
    if (array.length < 1) {
        return alert("Não há mais amigos para sortear!")
    }
    const indiceSorteado = Math.floor(Math.random() * array.length);
    const nomeSorteado = array[indiceSorteado]
    array.splice(indiceSorteado, 1)
    document.getElementById("listaAmigos").innerText = arrayAmigo.join(", ");
    document.getElementById("resultado").innerText = `O vencedor é ${nomeSorteado}`;
    return nomeSorteado;
}