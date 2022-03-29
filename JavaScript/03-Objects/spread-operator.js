const obj1 = {
    key1: 'value-1',
    key2: 'value-2',
    key3: 'value-3',
}
const obj2 = {
    key4: 'value-4',
    key5: 'value-5',
    key6: 'value-6',
}

console.log(obj1);
console.log(obj2);

const newobj = {...obj1, ...obj2}
console.log(newobj);

console.log('');

console.log([...'abcdef']);
console.log({...'abcdef'});

console.log('');
