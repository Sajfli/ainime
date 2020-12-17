import React, { FC } from 'react'

import './App.scss'

// Main components
import Header from 'components/main/Header'

// Index view
import Index from 'views/Index'

const App: FC = () => (
    <>
        <Header />

        <Index text="Ainime" />
    </>
)

export default App