import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  // This variable is inputted from the user
  const [amount, setAmount] = useState();

  // These from and to variables are the currency symbols
  // These are selected from the options(dropdown box)
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");

  // This is the result of the conversion
  const [convertedAmount, setConvertedAmount] = useState(0);

  // useCurrencyInfo is a custom hook we created that takes 
  // a currency symbol, and returns an object with its keys as
  // all currency symbols, and their values as the exchange rate 
  const currencyInfo = useCurrencyInfo(from);

  // Here we just extracted all the keys from the currencyInfo object
  const options = Object.keys(currencyInfo);

  // This function swaps the values of variables
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // calculates and converts the amount
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://wallpapercave.com/wp/wp2300375.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Here we used the convert function so when someone clicks the submit button,
              // the amouont is converted
              convert(); 
            }}
          >
            <div className="w-full mb-1">

              {/* Here we are calling the InputBox component we created and passing 
              props to it */}
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                /* This is a function that we are passing to the component
                    that takes currency value, and sets the currency */
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                /* This is a function that we are passing to the component
                    that takes the amount, and sets the amount */
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)
                }
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
