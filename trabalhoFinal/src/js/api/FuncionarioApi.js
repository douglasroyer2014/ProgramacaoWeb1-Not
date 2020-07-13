const axios = require('axios');
import Funcionario from '../models/Funcionario'

class FuncionarioApi {
    constructor() { }
    listaFuncionario() {
        axios.get('http://rest-api-employees.jmborges.site/api/v1/employees')
            .then(function (response) {
                return response.data.data
            })
            .catch(function (error) {
                console.log(error);
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

}

export default FuncionarioApi;