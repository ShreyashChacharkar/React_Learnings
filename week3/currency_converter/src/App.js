import { useState } from 'react';
import './App.css';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
      
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  const optionsto = Object.keys(JSON.parse(JSON.stringify(currencyInfo)))

  const swap = () =>{
    setFrom(to)
    setTo(from)
  }
  
  const convert = () => {setConvertedAmount(amount * currencyInfo[to])}

  
  return (
    <>
      <div className="container-sm">
      <h2>Currency Converter</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        convert()}}>
      <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
        />
      <button className="button" type="button" onClick={swap}>Swap</button>
      <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
        />
        <br />
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="submit">
        Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
      </form>
      </div>
    </>
  );
}

export default App;
