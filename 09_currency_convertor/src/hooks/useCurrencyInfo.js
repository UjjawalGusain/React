import { useState, useEffect } from "react";


// Here, we are designing a custom hook useCurrencyInfo
// This hook takes a currency code(string), and return the data returned from the api
function useCurrencyInfo(currency){

    const [data, setData] = useState({})

    useEffect(() => {
        const api = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        fetch(api).
        then((res) => res.json()).
        then((res) => setData(res[currency]))
    }, [currency])

    return data;
}

export default useCurrencyInfo;