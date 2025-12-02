let fruits = ["Apple", "Banana", "Orange"]
fruits.unshift('Grapes');
fruits.push('Pineapples');

for (let a=0; a<fruits.length; a+=2){
    console.log(fruits[a]+' ' +a);

}