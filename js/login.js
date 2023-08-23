/*
    Criamos uma função que será chamada a partir do clique, no botão login. Essa função ir´verificar se os dados são verdadeiros.
*/
function verificaLogin() {
    /*  
        Criamos uma variável email que receberá o valor do input email que está no login.html, o document é u mobjeto pelo qual podemos acessar tudo que contém no nosso html, inclusive os ID, ou classes, o método getElementById pega o id no html passado por parâmetro.
    */
    let email = document.getElementById("email_login").value;
    let senha = document.getElementById("senha_login").value;
    if (email === 'j' && senha === 'J') {
        window.location.href = "home_page.html";
    }
}