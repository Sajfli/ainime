import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './App'

// RRD
import { BrowserRouter }from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('App')
)