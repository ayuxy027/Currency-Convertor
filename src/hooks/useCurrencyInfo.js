import { useEffect, useState } from "react";

function currencyConverter(currency) {
  const [data, setData] = useState({});
  console.log("workinn");
  useEffect(() => {
    console.log("Changed from !!");
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      //response first converted into JSON
      .then((res) => res.json())
      .then((data) => setData(data[currency]));
  }, [currency]);
  // console.log(data.inr)
  return data;
}

export default currencyConverter;
