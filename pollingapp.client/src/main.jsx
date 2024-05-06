import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './global.css'
import SignInPage from './Components/SignInPage/SignInPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <SignInPage/> }/> 
            </Routes>
        </BrowserRouter>
  </React.StrictMode>,
)
