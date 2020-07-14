import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ListaFuncionario from './components/ListaFuncionario';
import FormFuncionario from './components/FormFuncionario';

import Funcionario from './models/Funcionario';
import FuncionarioApi from '../js/api/FuncionarioApi'

const Main = function () {

    const funcionariosExemplos = [];
    const [funcionarios, setFuncionarios] = useState(funcionariosExemplos);

    const listaFuncionarioApi = new FuncionarioApi();

    const lista = listaFuncionarioApi.listaFuncionario(function (dados) {
        let funcioriolista = [];
        console.log(dados)
        dados.forEach((element) => {
            let funcionario = new Funcionario(element.id, element.employee_name, element.employee_salary, element.employee_age, element.profile_image)
            funcioriolista.push(funcionario);
        })
        setFuncionarios(funcioriolista);
    }, function(erro){
        console.log(erro)
    });

    const adcionarFuncionario = function (funcionario) {
        listaFuncionarioApi.criarFuncionario(funcionario);
    }

    const excluirFuncionario = function (e, funcionarioId) {
        e.preventDefault();
        if (confirm('Confirma a exclusão desse funcionario?'))
            listaFuncionarioApi.excluirFuncionario(funcionarioId);
    }

    const editarFuncionario = function (e, funcionario) {
        e.preventDefault();
        let nome = document.getElementById('nome').value;
        let salario = document.getElementById('salario').value;
        let idade = document.getElementById('idade').value;

        let funcionarioEditar = new Funcionario(funcionario.id, nome, salario, idade, funcionario.avatar);
        listaFuncionarioApi.editarFuncionario(funcionarioEditar);
    }

    return (
        <>
            <FormFuncionario adcionarFuncionario={adcionarFuncionario} />
            <ListaFuncionario funcionarios={funcionarios} excluirFuncionario={excluirFuncionario} editarFuncionario={editarFuncionario} />
        </>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'))