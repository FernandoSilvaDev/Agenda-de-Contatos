const form = document.getElementById('form-atividade')
const somaDosContatos = document.getElementById('soma-dos-contatos')
const nome = []
const telefone = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionarLinha()
    atualizarTabela()
    somaTotalContatos ()

})

function adicionarLinha() {

    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNumeroAtividade = document.getElementById('numero-atividade')

    if (nome.includes (inputNomeAtividade.value)) {
        alert(`O nome ${inputNomeAtividade.value} já foi adicionado`)
    } else {
        nome.push(inputNomeAtividade.value)
        telefone.push(parseFloat(inputNumeroAtividade.value))

    let linha ='<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNumeroAtividade.value}</td>`
    linha += '</tr>'
    linhas += linha

    inputNomeAtividade.value = ''
    inputNumeroAtividade.value = ''
}

}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function somaTotalContatos() {
   const somaDosContatos = nome.length

    document.getElementById('soma-dos-contatos').innerHTML = somaDosContatos
}
