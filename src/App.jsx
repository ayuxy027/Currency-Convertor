import React, { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  useEffect(() => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  }, [amount, currencyInfo, to]);

  return (
    <div
      className="flex flex-wrap justify-center items-center w-full h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/background.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="p-5 mx-auto w-full max-w-md rounded-lg border backdrop-blur-sm border-gray-60 bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="mb-1 w-full">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 px-2 py-0.5 text-white bg-blue-600 rounded-md border-2 border-white -translate-x-1/2 -translate-y-1/2"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="mt-1 mb-4 w-full">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled={true}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-3 w-full text-white bg-blue-600 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
