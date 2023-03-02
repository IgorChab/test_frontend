import React, { useState } from 'react';

import Context from './context';

import { Layout } from './components/Layout/Layout';
import { StrategySection } from './components/StrategySection/StrategySection';
import { CurrencySection } from './components/CurrencySection/CurrencySection';


import axios from 'axios'
import { CustomChart } from './components/Charts/Chart';

function App() {

  const [darkTheme, setDarkTheme] = useState(false);
  const [data, setData] = useState(null)
  const [currency, setCurrency] = useState('usd')

  const switchTheme = () => {
    setDarkTheme(darkTheme => !darkTheme)
  }

  const getData = async (str) => {
    let response = await axios.get(`https://api.1282075-cv69336.tw1.ru/api/dashboard?st_num=${str}`)
    setData(response.data)
  }

  const handleCurrency = (str) => {
    setCurrency(str)
  }


  return (
    <Context.Provider value={{darkTheme, switchTheme, getData, data, handleCurrency, currency}}>
      <Layout>
        <StrategySection/>
        <CurrencySection/>
        {data? <CustomChart/> : 'Выберите стратегию!'}
      </Layout>
    </Context.Provider>
  );
}

export default App;
