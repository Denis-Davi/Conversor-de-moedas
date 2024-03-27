const convertButton = document.querySelector(".convert-button")
const mudarSelect = document.querySelector(".mudar-selecto")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // buscando apenas o valor dentro do input e não a informação dele todo.//
    const valorParaConverter = document.querySelector(".valorBr") //Valor em Real br
    const valorConvertido = document.querySelector(".valorEua") //Outras moedas
    console.log(mudarSelect.value)

    const dolarHoje = 5.2 // agora é só criar a operação matemática. pegar o valor do real e dividir pelo dólar usando a função//
    const euroHoje = 5.3

    const converter = inputCurrencyValue / dolarHoje

    if (mudarSelect.value == "dolar") { // Se estiver selecionado dólar, entre aqui.
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarHoje)
    }
    if (mudarSelect.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroHoje)
    }

    valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    console.log(converter)
}
function trocarMoeda() {
    console.log('trocou de moeda')
}

mudarSelect.addEventListener('change', trocarMoeda)

convertButton.addEventListener("click", convertValues)





