import React, { useContext, useState } from 'react'
import ThemeContext from '../../context'
import './Button.css'

export const Button = ({active, children}) => {

    const {darkTheme} = useContext(ThemeContext)

  return (
    <div 
        className={`btn ${darkTheme && 'dark_btn'} ${darkTheme && active && 'dark_active'} ${active && 'active'}`}
    >
        {children}
    </div>
  )
}
