import React, {useContext, useState} from 'react'
import ThemeContext from '../../context'
import './ToggleThemeBtn.css'

export const ToggleThemeBtn = () => {

    const {darkTheme, switchTheme} = useContext(ThemeContext)

    const [toggle, setToggle] = useState(false)

    const toggleTheme = () => {
        switchTheme()
        setToggle(value => !value)
    }

  return (
    <div 
        className={`container ${darkTheme && 'dark_container'}`}
        onClick={toggleTheme}
    >
        <div className={`toggle ${darkTheme && 'dark_toggle'} ${toggle? 'animate' : ''}`}></div>
    </div>
  )
}
