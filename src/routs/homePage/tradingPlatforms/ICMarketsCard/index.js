import React from "react";
import "./ICMarketsCard.scss"
import ICMarketsLogo from "../../../../assets/logo/IC Markets.png"
import BlueTick from "../../../../assets/logo/BlueTick.png"

export default function ICMarketsCard() {
    return (
        <div className="ICMarketsCard-section">
            <div>
                <div className="ICMarketsCard-header">
                    <div className="ICMarketsCard-flex-header">
                        <div className="ICMarketsCard-header-logo">
                            <img src={ICMarketsLogo} alt="ICMarketsLogo" />
                        </div>
                        <div className="ICMarketsCard-header-content">
                            <h3>IC Markets</h3>
                            <img src={BlueTick} alt="BlueTick" />
                        </div>
                    </div>
                </div>
                <p>
                    Multi-jurisdiction regulated broker trusted across global markets
                </p>
                <div className="ICMarketsCard-bottom">
                    <p>MIN DEPOSIT:</p>
                    <p>$200</p>
                </div>
            </div>
        </div>
    )
}