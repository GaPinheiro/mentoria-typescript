// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/**
let employee = {};
employee.code = 10;
employee.name = "John";  
*/

interface dadosPessoais{
    code: number,
    name: string
}
let employee: dadosPessoais = {
    code: 10,
    name: "John",
}

console.log(employee)