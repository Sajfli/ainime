import React, { FC, useState } from 'react'

import './App.scss'

// Main components
import Header from 'components/main/Header'

// Index view
// import Index from 'views/Index'

// Router
import Router from 'routing/Router'

// main contexts
import LangContext from 'context/Lang'

const App: FC = () => {

    // language state
    const [ lang, setLang ] = useState('en')

    // function for handling language change
    function handleLanguageChange(value: string) {
        if(value === 'pl' || value === 'en')
            setLang(value)
    }

    return(
        <LangContext.Provider value={{lang, change: handleLanguageChange}}>
            <Header />

            <div className='page'>
                <Router />
            </div>

        </LangContext.Provider>
    )
}

export default App