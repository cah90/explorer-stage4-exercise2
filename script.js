const students = [
  {
    name: 'John',
    n1: 7,
    n2: 9
  },
  {
    name: 'Anna',
    n1: 4,
    n2: 2
  },
  {
    name: 'Patrick',
    n1: 10,
    n2: 9
  },
  {
    name: 'Helio',
    n1: 8,
    n2:3
  }
]

function calcAverageGrade(n1,n2) {
  return (n1+n2) / 2
}

for(student of students) {
  
  const average = calcAverageGrade(student.n1, student.n2)

  if(average >= 7) {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${average}  \n
    Parabéns, ${student.name}! Você foi aprovado no concurso.
    ` )
  } else {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${average}  \n
    Não foi desta vez, ${student.name}. Tente novamente.
    ` )
  }


}
