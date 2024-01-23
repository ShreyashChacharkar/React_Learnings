import React, {useId} from 'react';
import './App.css';


function InputBox (
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency,
        amountDisable = false,
        currencyDisable = false}){

        const amountInputId = useId()

        return (
            <>
            <div className="container px-4 text-center">
                <div className="row gx-5">
                    <div className="col text-start">
                        <div className="p-3">
                            <h6 htmlFor={amountInputId}>{label}</h6>
                            <input
                            id={amountInputId}
                            type="number"
                            className="form-range"
                            placeholder="Amount"
                            disabled = {amountDisable}
                            value={amount}
                            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
                        </div>
                    </div>
                    <div className="col text-end">
                        <div className="p-3">
                            <h6>Currency type</h6>
                            <select value={selectCurrency} 
                            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                            disabled={currencyDisable}>
                            {currencyOptions.map((currency) => (
                                <option key={currency} value={currency}>
                                {currency}
                                </option>
                            ))}
                            </select>                
                        </div>
                    </div>
                </div>
            </div>
          </>
)}


export default InputBox;