// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default

import React from 'react'
import './styles/hub.scss'
import Routes from '../Routes'
import { BrowserRouter, Route } from 'react-router-dom'

export default function Hub() {
    return (
       <BrowserRouter>
         <Route render = {(props) => (
            <div className='hub'>
                <div className="hub__content" >              
                    <div className="hub__content_main">
                        <Routes/>
                    </div>
                </div>
            </div>
          )}/>
        </BrowserRouter>
    );
};