function calculator(num1, operator, num2){
    
    const areNumbers = typeof(num1) === 'number' && typeof(num2) === 'number'
    
    if(areNumbers) {

        if(operator == '*') {
            return num1 * num2
        } else if(operator == '/') {
            if(num2 != 0){
                return num1 / num2
            } else {
                return 'La división por cero no está definida'
            }
        } else if(operator == '+') {
            return num1 + num2
        } else if(operator == '-') {
            return num1 - num2
        } else {
            return 'Ingrese un operador válido'
        }

    } else {
        return "Ingresa un número válido"
    }
    
}

console.log(calculator('60', '+', 90));