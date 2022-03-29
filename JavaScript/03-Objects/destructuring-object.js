const obj = {
    key1: 10,
    key2: 20,
    key3: 30,
    key4: 40,
    key5: 50
}
console.log(obj);


const {key1, key2} = obj;
console.log(key1);
console.log(key2);



console.log('');

const {key3:var3, key4:var4} = obj;
console.log(var3);
console.log(var4);



console.log('');
const {key1:var1, key2:var2, ...otherKeys} = obj;
console.log(var1);
console.log(var2);
console.log(otherKeys);



console.log('');