
function myMap() {
    const array1 = [1, 4, 9, 16];
    const map1 = array1.map(x => x * 2);
    console.log(map1);
}

function myFilter() {
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);
    console.log(result);
}
function myReduce() {
    const array1 = [1, 2, 3, 4];
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );
    console.log(sumWithInitial);
}
function myFind() {
    const array1 = [5, 12, 8, 130, 44];
    const found = array1.find(element => element > 10);
    console.log(found);
}


function mySome() {
    const array = [1, 2, 3, 4, 5];
    const even = (element) => element % 2 === 0;
    console.log(array.some(even));
}

console.log(myMap())
console.log(myFilter());
console.log(myReduce());
console.log(myFind());
console.log(mySome(1, 2, 3, 4, 5));

function addArray() {
    const arr = ['First item', 'Second item', 'Third item'];
    arr.push('Fourth item');
    console.log(arr);
}
console.log(addArray());



function addBegin() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon", "Pineapple");

    document.getElementById("demo").innerHTML = fruits;

}

function myRemove() {
    const array = [2, 5, 9];

    console.log(array);

    const index = array.indexOf(5);
    if (index > -1) {
        array.splice(index, 1);
    }
    console.log(array);
}
console.log(myRemove());


function sumTriple(x, y) {
    if (x == y) {
        return 3 * (x + y);
    }
    else {
        return (x + y);
    }
}
console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));



function diff_num(n) {
    if (n <= 19) {
        return (19 - n);
    }
    else {
        return (n - 19) * 3;
    }
}

console.log(diff_num(12));
console.log(diff_num(19));
console.log(diff_num(22));




function div3 (a){
    var output=[]
    for(i=0;i<10;i++){
        var b = a.replace('*',i)
        if(b%3===0){
            output.push(b)
        }
    }
    return output;
}

console.log(div3('894293643*'));



function div6 (a){
    var output=[]
    for(i=0;i<10;i++){
        var b = a.replace('*',i)
        if(b%6===0){
            output.push(b)
        }
    }
    return output;
}

console.log(div6('38924839284*')); 