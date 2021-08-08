// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default

import React from 'react'
import './styles/hub.css'
import Routes from './Routes'
import { BrowserRouter, Route } from 'react-router-dom'

export default function Hub() {
    return (
       <BrowserRouter>
         <Route render = {(props) => (
            <div className='hub'>
                <div className="content" >              
                    <Routes/>
                </div>
            </div>
          )}/>
        </BrowserRouter>
    );
};