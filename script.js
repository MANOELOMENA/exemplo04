const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnOrdenar = document.getElementById('btnOrdenar')
const outLista = document.getElementById('outLista')

let criancas = []

btnAdicionar.addEventListener('click', () => {
  const nome = document.getElementById('inNome').value
  const idade = parseInt(document.getElementById('inIdade').value)

  if (nome && !isNaN(idade)) {
    criancas.push({ nome, idade })
    displayCriancas()
  } else {
    alert('Por favor, preencha todos os campos.')
  }
})

btnListar.addEventListener('click', () => {
  displayCriancas()
})

btnOrdenar.addEventListener('click', () => {
  ordenarPorIdade()
})

function ordenarPorIdade() {
  criancas.sort((a, b) => a.idade - b.idade)
  displayCriancas()
}

function displayCriancas() {
  outLista.textContent = ''
  criancas.forEach(crianca => {
    outLista.textContent += `Nome: ${crianca.nome}, Idade: ${crianca.idade}\n`
  })
}
