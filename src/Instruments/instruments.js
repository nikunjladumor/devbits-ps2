import React from "react";
import './instruments.css';
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const Instrument = () => {
    return (
        <>
            <Navbar home={true} />
            <div className="instruMain">
                <div className="instruBg">
                  
                </div>
                <div className="instruBoxContainer">
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">Stocks</h1>
                            <p className="contentPara">Stock can be bought and sold privately or on stock exchanges, and such transactions are typically heavily regulated by governments to prevent fraud, protect investors, and benefit the larger economy. The stocks are deposited with the depositories in the electronic format also known as Demat account. As new shares are issued by a company, the ownership and rights of existing shareholders are diluted in return for cash to sustain or grow the business. Companies can also buy back stock, which often lets investors recoup the initial.</p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <Link className="buttonToBuy" to="/stocks">
                                        Proceed To Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">Bonds</h1>
                            <p className="contentPara">In finance, a bond is a type of security under which the issuer (debtor) owes the holder (creditor) a debt, and is obliged – depending on the terms – to provide cash flow to the creditor (e.g. repay the principal (i.e. amount borrowed) of the bond at the maturity date as well as interest (called the coupon) over a specified amount of time).[1] The timing and the amount of cash flow provided varies, depending on the economic value that is emphasized upon, thus giving rise to different types of bonds.[1] The interest is usually payable at fixe...</p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <Link className="buttonToBuy" to="/stocks">
                                        Proceed To Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">CryptoCurrency</h1>
                            <p className="contentPara">  cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.[2] It is a decentralized system for verifying that the parties to a transaction have the money they claim to have, eliminating the need for traditional intermediaries, such as banks, when funds are being transferred between two entities.[3]

Individual coin ownership records are stored.</p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <Link className="buttonToBuy" to="/stocks">
                                        Proceed To Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Instrument;