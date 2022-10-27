const charCount = (cadena1, cadena2) => {
    let contador = 0

    if(cadena1.length > 1) {
        return "Por favor, ingrese solo una letra"
    } else {
        for (caracter of cadena2) {
            if(cadena1 === caracter) {
                contador++
            }
        }

        return contador
    }
}

console.log(charCount('e', 'terere'));