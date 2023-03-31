import React from 'react';
import './landing.css';
import TradingInstruments from './tradingInstruments';
const Landing = () => {
    return (
        <>
            <div className="landingPageMain">
                <div className="landingBg">
                    <img className="landingBg1" src="../assets/bg4.jpg" alt="" />
                    <img className="landingBg2" src="../assets/lll.jpeg" alt="" />
                    {/* <img className="landingBg3" src="../assets/s1.png" alt="" /> */}
                    <div className="landingMsgContainer">
                            {/* <h1 className="landingMsg">
                                Get Set Trade With The All New <span className="landingDomainName">STONKS-UP</span>
                            </h1> */}
                    </div>
                </div>
                <TradingInstruments/>

            </div>
        </>
    );
};
export default Landing;