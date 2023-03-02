import React, {useContext, useState} from 'react'
import axios from 'axios'
import { Button } from '../Button/Button'
import { ToggleThemeBtn } from '../ToggleThemeBtn/ToggleThemeBtn'
import Context from '../../context'

import './StrategySection.css'

export const StrategySection = () => {

    const [active, setActive] = useState(null)

    const {getData} = useContext(Context)

    const handleActive = (str) => {
        getData(str)
        setActive(str)
    }

  return (
    <div className='strategySection'>
       <div className='wrapper'>
            <p>Стратегия №</p>
            <div onClick={() => handleActive('1')}>
                <Button active={active === '1'}>1</Button>
            </div>
            <div onClick={() => handleActive('2')}>
                <Button active={active === '2'}>2</Button>
            </div>
            <div onClick={() => handleActive('3')}>
                <Button active={active === '3'}>3</Button>
            </div>
       </div>
        <ToggleThemeBtn/>
    </div>
  )
}
