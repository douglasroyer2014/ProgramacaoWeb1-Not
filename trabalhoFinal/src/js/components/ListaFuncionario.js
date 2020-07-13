import React, { useState } from 'react';

const ListaFuncionario = function (props) {

    const { funcionarios } = props;

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Salário</th>
                    <th>Idade</th>
                    <th>Avatar</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {funcionarios.map(function (element) {
                    return (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.nome}</td>
                            <td>{element.salario}</td>
                            <td>{element.idade}</td>
                            <td>{element.avatar}</td>
                            <a href="#" onClick={(e) => this.props.editarAluno(e, aluno)}>Editar</a> | <a href="#" onClick={(e) => this.props.excluirAluno(e, aluno)}>Excluir</a>
                        </tr>)
                })}
            </tbody>
        </table>

    )
}

export default ListaFuncionario;