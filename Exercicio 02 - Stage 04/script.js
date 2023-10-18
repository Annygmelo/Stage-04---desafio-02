

let student = [
    {
        name:"Gabriela",
        numberOne:9.5,
        numberTwo:8.5
    },
    {
        name:"Renata",
        numberOne:6.5,
        numberTwo:4.0
    },
   
]

function result(numberOne,numberTwo) {
    return ((numberOne + numberTwo) / 2).toFixed(1)
}

for(let position of student) {

    if(result(position.numberOne,position.numberTwo) >= 7) {

        alert(`A média do(a) aluno(a) ${position.name} é: ${result(position.numberOne,position.numberTwo)} 
        Parabéns, ${position.name}! Você foi aprovado(a)!`)
        
    } else {
        alert(`A média do(a) aluno(a) ${position.name} é: ${result(position.numberOne,position.numberTwo)} 
        Não foi dessa vez, ${position.name}! Tente novamente!`)
    }
}
