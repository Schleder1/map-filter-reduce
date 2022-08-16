function mapSemthis (arr) {
    return arr.map(function(item){
        return item * 2;
    })
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemthis(nums));

console.log(nums);

//or

const array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 2));

console.log(array);