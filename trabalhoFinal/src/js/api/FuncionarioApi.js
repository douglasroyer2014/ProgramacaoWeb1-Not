const axios = require('axios');
import Funcionario from '../models/Funcionario'

class FuncionarioApi {
    constructor() { }
     listaFuncionario(callback, reject) {
        axios.get('http://rest-api-employees.jmborges.site/api/v1/employees')
            .then(function (response) {
                callback(response.data.data)
            })
            .catch(function (error) {
                reject(error);
            })
            .finally(function () {
            });
    }

    criarFuncionario(funcionario){
        axios.post('http://rest-api-employees.jmborges.site/api/v1/create', 
        {name: funcionario.nome,
            salary: funcionario.salario,
            age: funcionario.idade
         } )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    excluirFuncionario(id) {
        axios.delete('http://rest-api-employees.jmborges.site/api/v1/delete/'+id)
            .then(function (response) {
                alert('Exclusão ok')
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }

    editarFuncionario(funcionario){
        axios.put('http://rest-api-employees.jmborges.site/api/v1/update/'+ funcionario.id, 
        {name: funcionario.nome,
            salary: funcionario.salario,
            age: funcionario.idade
         } )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

}

export default FuncionarioApi;