import React, {useContext} from 'react'
import ThemeContext from '../../context'
import './Layout.css'

export const Layout = ({children}) => {

    const {darkTheme} = useContext(ThemeContext)

  return (
    <div className={`layout ${darkTheme && 'dark_layout'}`}>
        {children}
    </div>
  )
}
