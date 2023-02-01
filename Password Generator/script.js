const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUpperCaseElement = document.getElementById('includeUppercase')
const includeNumberElement = document.getElementById('includeNumber')
const includeSymbolElement = document.getElementById("includeSymbol")
const PasswordDisplay = document.getElementById("PasswordDisplay")

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)
const form = document.getElementById("passwordG")


const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODE = arrayFromLowToHigh(95, 122);
const NUMBER_CHAR_CODE = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODE = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)

).concat(
    arrayFromLowToHigh(91, 96)

)
    .concat(
        arrayFromLowToHigh(123, 126)
    )



function syncCharacterAmount(e) {
    const value = e.target.value

    characterAmountNumber.value = value
    characterAmountRange.value = value
}

form.addEventListener('submit', (e) => {
    document.body.style.backgroundColor = 'black'
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUpperCase = includeUpperCaseElement.checked
    const includeNumber = includeNumberElement.checked
    const includeSymbol = includeSymbolElement.checked
    const password = generatePassword(characterAmount, includeUpperCase, includeNumber, includeSymbol)
    console.log(password)
    PasswordDisplay.innerText = password

})


function generatePassword(characterAmount, includeUpperCase, includeNumber, includeSymbol) {
    let charcode = LOWERCASE_CHAR_CODE
    if (includeUpperCase) charcode = charcode.concat(UPPERCASE_CHAR_CODES)
    if (includeNumber) charcode = charcode.concat(NUMBER_CHAR_CODE)
    if (includeSymbol) charcode = charcode.concat(SYMBOL_CHAR_CODE)
    const passwordcharacter = []
    for (let i = 0; i < characterAmount; i++) {
        const charactercode = charcode[Math.floor(Math.random() * characterAmount)]
        passwordcharacter.push(String.fromCharCode(charactercode))
    }
    return passwordcharacter.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}