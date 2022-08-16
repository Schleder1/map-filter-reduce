function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item %2 === 0;
}

const meuArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(filtraPares(meuArray));

console.log(meuArray);

//or

function filtraPares(arr) {
    if (!arr || !arr.length) return;

    const filteredArr = arr.filter((item) => item %2 ==0 );

    return filteredArr;
}

console.log(filtraPares([1, 2, 3, 4]));