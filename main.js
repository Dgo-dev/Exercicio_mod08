const form = document.querySelector('form');
const listaNomeContatos = [];
const listaNumeroTel = [];


let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha()
    atualizaTabela();
})

function adicionaLinha(){
    const nomeContato  = document.getElementById('nome-contato');
    const telContato  = document.getElementById('tel-contato');

    if(listaNomeContatos.includes(nomeContato.value)) {
        alert(`Esse contato ${nomeContato.value} já foi inserido`)
    }else if(listaNumeroTel.includes(telContato.value)){
        alert(`Já existe um contato com esse número ${telContato.value}`)

    } else {
        listaNomeContatos.push(nomeContato.value);
        listaNumeroTel.push(telContato.value);

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${telContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    nomeContato.value = '';
    telContato.value = '';

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}