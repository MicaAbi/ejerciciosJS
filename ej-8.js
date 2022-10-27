function replaceVowel(string) {

    for(character of string) {
        character == 'a' || character == 'A' ? string = string.replace(character, 1) : null
        character == 'e' || character == 'E' ? string = string.replace(character, 2) : null
        character == 'i' || character == 'I' ? string = string.replace(character, 3) : null
        character == 'o' || character == 'O' ? string = string.replace(character, 4) : null
        character == 'u' || character == 'U' ? string = string.replace(character, 5) : null
    }

    return string
}


console.log(replaceVowel('Guacamayo'));