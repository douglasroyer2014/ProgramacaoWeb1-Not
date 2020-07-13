import React, { useState} from 'react';
import ReactDOM from 'react-dom';

import ListaFuncionario from './components/ListaFuncionario';
import FormFuncionario from './components/FormFuncionario';

import Funcionario from './models/Funcionario';
import FuncionarioApi from '../js/api/FuncionarioApi'

const Main = function () {
    const funcionariosExemplos= [
        new Funcionario(1, 'sla1', 100, 22, '123'),
        new Funcionario(2, 'sla2', 200, 33, '456')
    ]
    const[funcionarios, setFuncionarios] = useState(funcionariosExemplos);

    const listaFuncionarioApi = new FuncionarioApi();
    const lista =  listaFuncionarioApi.listaFuncionario();
    console.log(lista)

    const adcionarFuncionario = function(funcionario){
        listaFuncionarioApi.criarFuncionario(funcionario);
        setFuncionarios([...funcionarios, funcionario]);
    }

    return (
        <>
            <FormFuncionario adcionarFuncionario={adcionarFuncionario}/>
            <ListaFuncionario funcionarios={funcionarios} />
        </>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'))