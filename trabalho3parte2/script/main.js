function listaProduto() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xhttp.open("GET", "https://private-1084c-produto2.apiary-mock.com/produto", true);
    xhttp.send();
}

function limparInputProduto() {
    document.getElementById('id').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('tamanho').value = '';
    document.getElementById('cor').value = '';
    document.getElementById('valor').value = '';
}

function cadastrarProduto() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            alert(this.responseText);
        }
    };
    xhttp.open('POST', 'https://private-1084c-produto2.apiary-mock.com/produto');
    xhttp.setRequestHeader('Content-Type', 'application/json');
    let body = {
        'Nome': 'camisa Nike',
        'tamanho': 'M',
        'sexo': 'Masculina',
        'cor': 'preto',
        'valor': 32
      };
      
      xhttp.send(JSON.stringify(body));
}

function listaCliente(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xhttp.open("GET", "https://private-ae924-cliente5.apiary-mock.com/cliente", true);
    xhttp.send();
}

function cadastrarCliente() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            alert(this.responseText);
        }
    };
    xhttp.open('POST', 'https://private-ae924-cliente5.apiary-mock.com/cliente');
    xhttp.setRequestHeader('Content-Type', 'application/json');
    let body = {
        'nome': 'Heloisa silva',
        'dataNasc': '12/01/2001',
        'cpf': '431-231',
        'sexo': 'Feminino'
      };
      
      xhttp.send(JSON.stringify(body));
}

function editarCliente() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            alert(this.responseText);
        }
    };
    xhttp.open('PUT', 'https://private-ae924-cliente5.apiary-mock.com/cliente/4');
    xhttp.setRequestHeader('Content-Type', 'application/json');
    let body = {
        'nome': 'Jasmine silva',
        'dataNasc': '12/03/2004',
        'cpf': '431-272',
        'sexo': 'Feminino'
      };
      
      xhttp.send(JSON.stringify(body));
}

function excluirCliente(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            alert(this.responseText);
        }
    };
    xhttp.open("DELETE", "https://private-ae924-cliente5.apiary-mock.com/cliente/4", true);
    xhttp.send();
}

function limparCamposCliente(){
    document.getElementById('id').value = '';
    document.getElementById('nomeCliente').value = '';
    document.getElementById('dataNasc').value = '';
    document.getElementById('cpf').value = '';
}