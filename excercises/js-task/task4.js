function shuffle(array) {
    let random = array.length, temp, index;
    while (random > 0) {
        index = Math.floor(Math.random() * random);
        random--;
        temp = array[random];
        array[random] = array[index];
        array[index] = temp;
    }
    return array;
}
let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));
