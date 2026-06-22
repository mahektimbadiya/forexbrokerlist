import React from "react";
import "./FPMarketsCard.scss"
import FPMarketLogo from "../../../../assets/logo/FP Market.png"
import BlueTick from "../../../../assets/logo/BlueTick.png"

export default function FPMarketsCard() {
    return (
        <div className="FPMarketsCard-section">
            <div>
                <div className="FPMarketsCard-header">
                    <div className="FPMarketsCard-flex-header">
                        <div className="FPMarketsCard-header-logo">
                            <img src={FPMarketLogo} alt="FPMarketLogo" />
                        </div>
                        <div className="FPMarketsCard-header-content">
                            <h3>FP Markets</h3>
                            <img src={BlueTick} alt="BlueTick" />
                        </div>
                    </div>
                </div>
                <p>
                    Low-spread ECN execution from 0.0 pips on institutional-grade infrastructure
                </p>
                <div className="FPMarketsCard-bottom">
                    <p>MIN DEPOSIT:</p>
                    <p>$100</p>
                </div>
            </div>
        </div>
    )
}