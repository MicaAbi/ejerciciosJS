function convert(degrees) {

    const isCelsius = degrees.includes('°C')
    const isFahrenheit = degrees.includes('°F')
    const indexDegree = degrees.indexOf('°')
    const temp = parseInt(degrees.slice(0, indexDegree))

    if(isCelsius && degrees.length >= 3) {
        
        const toFahrenheit = Math.round((temp*1.8) + 32)
        return toFahrenheit + '°F'

    } else if(isFahrenheit && degrees.length >= 3) {

        const toCelsius = Math.round((temp - 32) / 1.8)
        return toCelsius + '°C'

    } else {
        return 'Error'
    }

}

console.log(convert('80°F'));