export const moduleTest = 10;

const students = [
    {
        name: 'John',
        age: 22,
        isMarries: false,
        scores: 120
    },
    {
        name: 'Alex',
        age: 32,
        isMarries: false,
        scores: 95
    },
    {
        name: 'Anna',
        age: 41,
        isMarries: false,
        scores: 110
    },
    {
        name: 'Tom',
        age: 26,
        isMarries: false,
        scores: 100
    },
    {
        name: 'Anderson',
        age: 35,
        isMarries: false,
        scores: 90
    },
];

console.log(students.map((el) => el.name));
