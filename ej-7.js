function daysUntil(date) {

    const currentDate = new Date()
    const givenDate = new Date(date)
    
    const dif = givenDate - currentDate
    const difDays = Math.ceil(dif/1000/60/60/24)

    return difDays
}

console.log(daysUntil('12/25/2022'));