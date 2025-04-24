import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    return (
        <div className={`flex p-3 text-sm bg-white rounded-lg ${className}`}>
            <div className="w-1/2">
                <label className="inline-block mb-2 text-black/40">
                    {label}
                </label>
                <input
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={amountDisabled}
                    className="py-1.5 w-full bg-transparent outline-none"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="flex flex-wrap justify-end w-1/2 text-right">
                <p className="mb-2 w-full text-black/40">Currency Type</p>
                <select
                    className="px-1 py-1 bg-gray-100 rounded-lg cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
