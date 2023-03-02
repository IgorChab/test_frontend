import React, {useContext, useState} from 'react'
import Context from '../../context'
import { Button } from '../Button/Button'

import './CurrencySection.css'

export const CurrencySection = () => {

    const [active, setActive] = useState('usd')

    const {handleCurrency} = useContext(Context)

    const handleActive = (str) => {
        setActive(str)
        handleCurrency(str)
    }

  return (
    <div className='currencySection'>
        <div className='wrapper'>
            <p>Валюта</p>
            <div onClick={() => handleActive('usd')}>
                <Button active={active === 'usd'}>USD</Button>
            </div>
            <div onClick={() => handleActive('btc')}>
                <Button active={active === 'btc'}>BTC</Button>
            </div>
        </div>
    </div>
  )
}
