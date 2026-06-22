import React from "react";
import "./exnessCard.scss"
import ExnessLogo from "../../../../assets/logo/exness.png"
import BlueTick from "../../../../assets/logo/BlueTick.png"

export default function ExnessCard() {
    return (
        <div className="exnessCard-section">
            <div>
                <div className="exnessCard-header">
                    <div className="exnessCard-flex-header">
                        <div className="exnessCard-header-logo">
                            <img src={ExnessLogo} alt="ExnessLogo" />
                        </div>
                        <div className="exnessCard-header-content">
                            <h3>Exness</h3>
                            <img src={BlueTick} alt="BlueTick" />
                        </div>
                    </div>
                </div>
                <p>
                    CMA-regulated trading with spreads from 0.0 pips
                </p>
                <div className="exnessCard-bottom">
                    <p>MIN DEPOSIT:</p>
                    <p>$10 (based on the account type)</p>
                </div>
            </div>
        </div>
    )
}