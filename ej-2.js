function minMax(array) {
    let min = array[0];
    let max = array[0];

    if(array.length == 1) {

        return [min, max]

    } else if(array.length > 1) {
        array.forEach(element => {
            element < min ? min = element : null;
            element > max ? max = element : null;
        })

        return [min, max]
    }

    return "Introduce un array con al menos un número"

}

console.log(minMax([2675847, 2, 8172, 345, 0.5]));