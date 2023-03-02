import React, { createContext } from "react";
const Context = createContext({
    darkTheme: false,
    switchTheme: () => {},
    data: {},
    getData: () => {},
    currency: 'usd',
    handleCurrency: () => {}
})
export default Context