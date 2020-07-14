import React, { useState} from 'react';
import Funcionario from '../models/Funcionario';
let contador = 3;

const FormFuncionario = function(props){

    const [nome, setNome] = useState('');
    const [salario, setSalario] = useState(0);
    const [idade, setIdade] = useState(0);
    const [avatar, setAvatar] = useState('');

    const id = '';

    const handleSubmit = function(e){
        e.preventDefault();
        const funcionario = new Funcionario(contador, nome, salario, idade, avatar);
        contador++;
        props.adcionarFuncionario(funcionario);
        setNome('');
        setSalario(0);
        setIdade(0);
        setAvatar('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastro de funcionario</h2>
            <p>
                <label htmlFor="nome">Nome:</label>
                <input id="nome" name="nome" value={nome} type= "text" onChange={(e) => setNome(e.target.value)} />
            </p>
            <p>
                <label htmlFor="salario">Salario:</label>
                <input id="salario" name="salario" value={salario} type= "number" onChange={(e) => setSalario(e.target.value)} />
            </p>
            <p>
                <label htmlFor="idade">Idade:</label>
                <input id="idade" name="idade" value={idade} type= "number" onChange={(e) => setIdade(e.target.value)} />
            </p>
            <p>
                <label htmlFor="avatar">Avatar:</label>
                <input name="avatar" value={avatar} type= "text" onChange={(e) => setAvatar(e.target.value)} />
            </p>
            <p>
                <input type= "submit" />
            </p>
        </form>

    )
}

export default FormFuncionario;