export async function getCurrencies(){
    const urlName = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
    const apiNameResponse = await fetch(urlName);
    const currenciesName = await apiNameResponse.json();

    return currenciesName;
}

export async function getCurrencyValue(currencyName){
    const urlValue = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyName}.json`;
    const apiValueResponse = await fetch(urlValue);
    const currencyValueData = await apiValueResponse.json();

    return currencyValueData;
}