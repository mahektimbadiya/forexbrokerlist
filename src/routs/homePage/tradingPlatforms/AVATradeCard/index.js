import React from "react";
import "./AVATradeCard.scss"
import AVATradeLogo from "../../../../assets/logo/AVATrade.png"
import BlueTick from "../../../../assets/logo/BlueTick.png"

export default function AVATradeCard() {
    return (
        <div className="exnessCard-section">
            <div>
                <div className="exnessCard-header">
                    <div className="exnessCard-flex-header">
                        <div className="exnessCard-header-logo">
                            <img src={AVATradeLogo} alt="AVATradeLogo" />
                        </div>
                        <div className="exnessCard-header-content">
                            <h3>AVATrade</h3>
                            <img src={BlueTick} alt="BlueTick" />
                        </div>
                    </div>
                </div>
                <p>
                    ASIC-regulated trading with spreads from 0.9 pips
                </p>
                <div className="exnessCard-bottom">
                    <p>MIN DEPOSIT:</p>
                    <p>$100</p>
                </div>
            </div>
        </div>
    )
}