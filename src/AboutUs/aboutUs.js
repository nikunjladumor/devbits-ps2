import React from "react";
import Navbar from "../Navbar/Navbar";
import './aboutUs.css';
const AboutUs = () => {
    return (
        <>
            <Navbar home={true} />
            <div className="AboutMain">
        
                <div className="aboutContainer">
                    <div className="aboutFlexContainer">
                        <div className="aboutHeadingContainer">
                            <h1>Our Vision</h1>
                        </div>
                        <div className="aboutParagraph">
                            <p>In finance, stock (also capital stock) consist of all the shares by which ownership of a corporation or company is divided.[1] (Especially in American English, the word "stocks" is also used to refer to shares.)[1][2] A single share of the stock means fractional ownership of the corporation in proportion to the total number of shares. This typically entitles the shareholder (stockholder) to that fraction of the company's earnings, proceeds from liquidation of assets (after discharge of all senior claims such as secured and unsecured debt),[3] or voting power, often dividing these up in proportion to the amount of money each stockholder has invested. Not all stock is necessarily equal, as certain classes of stock may be issued for example without voting rights, with enhanced voting rights, or with a certain priority to receive profits or liquidation proceeds before or after other classes of shareholders.</p>
                        </div>
                        <div className="aboutServicesHeading">
                            <h1>Our Services :</h1>
                        </div>
                        <div className="aboutServicesPara">
                            <p>A stock derivative is any financial instrument for which the underlying asset is the price of an equity. Futures and options are the main types of derivatives on stocks. The underlying security may be a stock index or an individual firm's stock, e.g. single-stock futures.

Stock futures are contracts where the buyer is long, i.e., takes on the obligation to buy on the contract maturity date, and the seller is short, i.e., takes on the obligation to sell. Stock index futures are generally delivered by cash settlement.

A stock option is a class of option. Specifically, a call option is the right (not obligation) to buy stock in the future at a fixed price and a put option is the right (not obligation) to sell stock in the future at a fixed price. Thus, the value of a stock option changes in reaction to the underlying stock of which it is a derivative. The most popular method of valuing stock options is the Black–Scholes model.[8] Apart from call options granted to employees, most stock options are transferable.</p>
                        </div>
                        <div className="aboutExploreServices">
                            <a href="/learn">Explore our services...</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default AboutUs;