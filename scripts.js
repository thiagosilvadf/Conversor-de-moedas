

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {

    const inputValue = document.querySelector(".input-currency")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.9
    const euroToday = 5.8



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { // Dolar
            style: "currency",
            currency: "USD"
        }).format(inputValue.value / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { // Euro
            style: "currency",
            currency: "EUR"
        }).format(inputValue.value / euroToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { // Real
        style: "currency",
        currency: "BRL"
    }).format(inputValue.value)

}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)



