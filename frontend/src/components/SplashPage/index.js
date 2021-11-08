import React, { useState, useEffect } from 'react';
import './SplashPage.css'

function SplashPage(){
    return <div className='splash-container'>
        <h1>LETS PLEY</h1>
        <h2>PLEY: AN INDEX OF LOCAL INDOOR BASKETBALL GYMS</h2>
        <h3>Whether you and your squad are looking for runs or you just want a place to shoot around, Pley is here to show you the best indoor courts in your area.</h3>
        <a className='contactbutton' href="https://github.com/sergeveli"> GitHub</a> &nbsp;
        <a className='contactbutton' href="https://www.linkedin.com/in/sergekassangana/">LinkedIn</a>
    </div>

}

export default SplashPage