function postalCode(code) {
    
    if(code.length === 4) {

        let isDigit = 0;

        for(num of code) {
            console.log(typeof(num));
            // Variable para facilitar la legibilidad del condicional
            let isNumber = !isNaN(num) && num != ' '

            if(isNumber) {
                isDigit++
            }
        }
        
        if(isDigit === 4) {
            return 'true'
        } else {
            console.log(isDigit);
            return 'false'
        }

    } else {
        return 'false'
    }

}

console.log(postalCode("5555"));