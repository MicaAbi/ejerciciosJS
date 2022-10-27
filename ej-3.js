// EJ: highestDigit(512) => 5

function highestDigit(num) {
    let numString
    let highest = 0

    if(typeof(num) === 'number'){
        numString = num.toString()
    } else if (typeof(num) === 'string') {
        numString = num
    } else {
        return 'Ingrese un número'
    }

    for (digit of numString) {
        let digitNum = parseInt(digit)
        digitNum > highest ? highest = digitNum : null
    }

    return highest

}

console.log(highestDigit(512));