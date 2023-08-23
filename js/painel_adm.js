const lista = document.getElementById('lista');

//array da nossa lista
const listaDeClientes = ['João', 'Giulia', 'Vitória'];

//função que exibirá nossas lista

const exibirLista = () => {
    for (let i = 0; i < listaDeClientes.length; i++) {
        lista.innerHTML += listaDeClientes[i];;
    };
};

exibirLista()