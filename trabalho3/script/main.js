function limparTabela() {
    document.getElementById('corpoTabela').remove();
    let corpoTabela = document.createElement('tbody');
    let tabela = document.getElementById('tabela');
    corpoTabela.setAttribute('id', 'corpoTabela')
    tabela.appendChild(corpoTabela);
    loadTabela();
}

function loadTabela() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            prencherTabela(response.data);
        }
    };
    xhttp.open("GET", "http://rest-api-employees.jmborges.site/api/v1/employees", true);
    xhttp.send();
}

function prencherTabela(lista) {
    let tabela = document.getElementById('corpoTabela');
    lista.forEach((element) => {
        let linha = document.createElement('tr');
        let id = document.createElement('td');
        let nome = document.createElement('td');
        let salario = document.createElement('td');
        let idade = document.createElement('td');
        let avatar = document.createElement('td');
        let acoes = document.createElement('td');
        id.innerHTML = element.id;
        linha.appendChild(id);
        nome.innerHTML = element.employee_name;
        linha.appendChild(nome);
        salario.innerHTML = element.employee_salary;
        linha.appendChild(salario);
        idade.innerHTML = element.employee_age;
        linha.appendChild(idade);
        if (element.profile_image) {
            var image = new Image();
            image.src = element.profile_image;
            avatar.appendChild(image);
        }
        linha.appendChild(avatar);
        let editar = document.createElement('a');
        editar.innerHTML = 'editar';
        editar.setAttribute('href', '#');
        editar.onclick = function () {
            editarEmployee(element)
        }
        let excluir = document.createElement('a');
        excluir.innerHTML = 'excluir';
        excluir.setAttribute('href', '#');
        excluir.onclick = function () {
            excluirEmployee(element);
        }
        acoes.appendChild(editar);
        acoes.appendChild(excluir);
        linha.appendChild(acoes);
        tabela.appendChild(linha);
    });
}

function excluirEmployee(employee) {
    let confirmacao = confirm('Deseja excluir o empregado ' + employee.employee_name);
    if (confirmacao) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                limparTabela()
                alert('Operação realizada com sucesso!')
            }
        };
        xhttp.open("DELETE", "http://rest-api-employees.jmborges.site/api/v1/delete/" + employee.id, true);
        xhttp.send();
    } else {
        alert('Operação cancelada!')
    }
}

function salvarEmployee() {
    let nome = document.getElementById('nome');
    let salario = document.getElementById('salario');
    let idade = document.getElementById('idade');
    let avatar = document.getElementById('avatar');

    if (nome !== '') {
        let newEmployee = {
            name: nome.value,
            salary: salario.value,
            age: idade.value
        }
        enviarEmployee(newEmployee);
        nome.value = '';
        salario.value = '';
        idade.value = '';
        avatar.value = '';
    } else {
        alert('Preencher o campo nome');
    }
}

function enviarEmployee(employee) {
    employee = JSON.stringify(employee);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            limparTabela();
            alert('Operação realizada com sucesso!');
        }
    };
    xhttp.open("POST", "http://rest-api-employees.jmborges.site/api/v1/create", true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(employee);
}

function editarEmployee(employee) {
    document.getElementById('titulo').innerHTML = 'Editando colaborador ' + employee.employee_name;
    let nome = document.getElementById('nome');
    let salario = document.getElementById('salario');
    let idade = document.getElementById('idade');
    let avatar = document.getElementById('avatar');
    let salvar = document.getElementById('salvar');
    let cancelar = document.getElementById('cancelar');

    nome.value = employee.employee_name;
    salario.value = employee.employee_salary;
    idade.value = employee.employee_age;
    avatar.value = employee.profile_image

    salvar.setAttribute('onclick', 'salvarEdicao(\'' + employee.id + '\')');
    //salvar.setAttribute('onclick', 'salvarEdicao(123)');
    cancelar.setAttribute('onclick', 'limparForm()')
}

function salvarEdicao(id) {
    let nome = document.getElementById('nome');
    let salario = document.getElementById('salario');
    let idade = document.getElementById('idade');

    let employee = {
        name: nome.value,
        salary: salario.value,
        age: idade.value
    }

    employee = JSON.stringify(employee);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert('Operação realizada com sucesso!');
            limparForm()
            limparTabela();
        }
    };
    xhttp.open("PUT", "http://rest-api-employees.jmborges.site/api/v1/update/" + id, true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(employee);
}

function limparForm() {
    cancelarCadastro()

    document.getElementById('salvar').setAttribute('onclick', 'salvarEmployee()');
    document.getElementById('cancelar').setAttribute('onclick', 'cancelarCadastro()');
    document.getElementById('titulo').innerHTML = 'Adicionando novo empregado';
}

function cancelarCadastro() {
    document.getElementById('nome').value = '';
    document.getElementById('salario').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('avatar').value = '';
}