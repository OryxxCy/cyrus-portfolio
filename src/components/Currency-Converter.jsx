import React, { useState, useEffect } from 'react';
import { getCurrencies, getCurrencyValue } from '../actions/CurrenciesApi';

const CurrencyInput = ({ label, amount, handleAmountChange, addCurrency }) => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <button onClick={addCurrency} className="btn btn-primary">{label}</button>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        className="input input-bordered w-full"
      />
    </div>
  );
};

const CurrencyConverter = () => {
  const [currenciesName, setCurrenciesName] = useState({});
  const [showFindCurrency, setShowFindCurrency] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(null);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(1);
  const [searchPlaceHolder, setSearchPlaceHolder] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState({});
  const [selectedFirstCurrencyName, setSelectedFirstCurrencyName] = useState("Select a currency");
  const [selectedSecondCurrencyName, setSelectedSecondCurrencyName] = useState("Select a currency");
  const [firstAmount, setFirstAmount] = useState(1);
  const [secondAmount, setSecondAmount] = useState(1);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const data = await getCurrencies();
        setCurrenciesName(data);
      } catch (error) {
        console.error('Failed to fetch currencies', error);
      }
    };

    fetchCurrencies();
  }, []);

  const addFirstCurrency = (event) => {
    event.preventDefault();
    setShowFindCurrency(true);
    setButtonClicked(1);
    setSearch("");
    setSearchPlaceHolder("Search for the First currency");
  };

  const addSecondCurrency = (event) => {
    event.preventDefault();
    setShowFindCurrency(true);
    setButtonClicked(2);
    setSearch("");
    setSearchPlaceHolder("Search for the Second currency");
  };

  const filteredCurrencies = Object.entries(currenciesName).filter(
    ([key, value]) => key.toLowerCase().includes(search.toLowerCase()) || value.toLowerCase().includes(search.toLowerCase())
  );

  const handleCurrencyClick = async (currencyName, currencyFullName) => {
    try {
      const currenciesValueData = await getCurrencyValue(currencyName);
      setSearch("");
      setShowFindCurrency(false);

      if (buttonClicked === 1) {
        const currenciesValue = currenciesValueData[currencyName];
        setSelectedCurrency(currenciesValue);
        setSelectedFirstCurrencyName(!currencyFullName ? currencyName : currencyFullName);
        setFirstAmount(1);
        setSecondAmount(0);
        setSelectedSecondCurrencyName("Select a currency");
      } else if (buttonClicked === 2) {
        const selectedValue = selectedCurrency[currencyName];
        setValue(selectedValue);
        setSelectedSecondCurrencyName(!currencyFullName ? currencyName : currencyFullName);
        setFirstAmount(1);
        setSecondAmount(selectedValue);
      }
    } catch (error) {
      console.error('Failed to fetch currency values', error);
    }
  };

  const handleFirstAmountChange = (event) => {
    const amount = event.target.value;
    const convertedAmount = amount * value;
    setFirstAmount(amount);
    setSecondAmount(convertedAmount);
  };

  const handleSecondAmountChange = (event) => {
    const amount = event.target.value;
    const convertedAmount = amount / value;
    setSecondAmount(amount);
    setFirstAmount(convertedAmount);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Currency Converter</h3>
      <form className="mb-4">
        <CurrencyInput
          label={selectedFirstCurrencyName}
          amount={firstAmount}
          handleAmountChange={handleFirstAmountChange}
          addCurrency={addFirstCurrency}
        />
        <CurrencyInput
          label={selectedSecondCurrencyName}
          amount={secondAmount}
          handleAmountChange={handleSecondAmountChange}
          addCurrency={addSecondCurrency}
        />
      </form>
      {showFindCurrency && (
        <>
          <div className="mb-4">
            <input
              placeholder={searchPlaceHolder}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="input input-bordered w-full"
            />
          </div>
          <div className="grid grid-cols-2 space-between">
            {filteredCurrencies.slice(0, 10).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleCurrencyClick(key, value)}
                className="btn btn-outline w-full"
              >
                {value} <sup>{key}</sup>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CurrencyConverter;
