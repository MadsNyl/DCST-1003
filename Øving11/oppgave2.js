

let students = [
    { name: 'Ola', grade: 'A' },
    { name: 'Kari', grade: 'C' },
    { name: 'Knut', grade: 'C' },
];


console.log(
    'Student-elements as strings: ', 
    students.map(student => `Student ${student.name} has grade ${student.grade}`)
);

console.log(
    'Kari got grade: ',
    students.find(student => student.name === 'Kari').grade
);

console.log(
    'Did everyone get grade C: ',
    students.every(student => student.grade === 'C')
        ? 'Yes'
        : 'No'
);

console.log(
    'How many got grade C: ',
    students.filter(student => student.grade === 'C').length
);

console.log(
    'Percentage of grade C: ',
    students.filter(student => student.grade === 'C').length / students.length * 100
);

console.log(
    'Did anyone get grade A: ',
    students.some(student => student.grade === 'A')
        ? 'Yes'
        : 'No'
);

console.log(
    'Did anyone get grade F: ',
    students.some(student => student.grade === 'F')
        ? 'Yes'
        : 'No'
);