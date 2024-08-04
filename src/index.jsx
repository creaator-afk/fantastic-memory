// `src/index.jsx`
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css' // Import Font Awesome CSS
import WebFont from 'webfontloader'
import {BrowserRouter} from "react-router-dom"; // Import webfontloader

// Load fonts using webfontloader
WebFont.load({
    google: {
        families: ['Roboto:400,700', 'Open+Sans:400,700']
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
)