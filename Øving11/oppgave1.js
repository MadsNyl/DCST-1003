

let v = [1, 2, 3];


console.log(
    'Add 2 to each element in v: ',
    v.map(x => x + 2)
);

console.log(
    'Multiply each element in v by 2: ',
    v.map(x => x * 2)
);

console.log(
    'Sum of v: ',
    v.reduce((x, y) => x + y)
);

console.log(
    'Mean of v: ',
    v.reduce((x, y) => x + y) / v.length
);

console.log(
    'Each element of v as string: ',
    v.map(x => x.toString())
);

console.log(
    'V as string: ',
    v.map(x => `v[${v.indexOf(x)}] = ${x}`)
);