const lista = document.getElementById('lista');
const form = document.getElementById('form_add');

//array da nossa lista
const listaDeClientes = ['João', 'Giulia', 'Vitória'];

//função que exibirá nossas lista
const exibirLista = () => {
    lista.innerHTML = "";
    for (let i = 0; i < listaDeClientes.length; i++) {
        lista.innerHTML += `<div class="lista"> 
        <h2>${listaDeClientes[i]}</h2>
        <button class="text-sm" onclick="excluirItem(${i})"> Excluir </button> 
        </div>`;
    };
};

//método para cadastrar um item na lista
const cadastrarItem = () => {
    lista.style.display = 'block';
    form.style.display = 'none';
    const input = document.getElementById('input').value;
    listaDeClientes.push(input);
    exibirLista();
}

//função para exibir o formulário
const exibirFormulario = () => {
    lista.style.display = 'none';
    form.style.display = 'flex';
}

//função para excluir um item
const excluirItem = i => {
    listaDeClientes.splice(i, 1);
    exibirLista()
}
exibirLista();