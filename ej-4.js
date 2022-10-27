// sortDescending(1254859723) ➞ 9875543221

function sortDescending(num) {
    let numString;

    if (typeof(num) === 'number') {
        numString = num.toString()
    } else if (typeof(num) === 'string') {
        numString = num
    } else {
        return 'Ingrese un número'
    }

    let arrayOfNum = numString.split('')

    let descendingArray = []
    let higher = 9

    while (arrayOfNum.length > 0) {

        const found = arrayOfNum.find(element => element == higher)

        if(found || found == '0') {
            
            descendingArray.push(found)
            const indexFound = arrayOfNum.indexOf(found)
            arrayOfNum.splice(indexFound, 1)

        } else {
            higher--
        }

    }

    const descendingNums = parseInt(descendingArray.join(''))
    return descendingNums


}

console.log(sortDescending('0000'));
// console.log(sortDescending('02492402094'));