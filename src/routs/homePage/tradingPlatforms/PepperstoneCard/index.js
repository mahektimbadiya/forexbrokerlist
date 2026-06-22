import React from "react";
import "./PepperstoneCard.scss"
import PepperstonecardLogo from "../../../../assets/logo/Pepperstonecard.png"
import BlueTick from "../../../../assets/logo/BlueTick.png"
import MapImage from "../../../../assets/images/map.png"

export default function PepperstoneCard() {
    return (
        <div className="PepperstoneCard-section">
            <div className="Pepperstonecard-container">
                <div className="PepperstoneCard-header">
                    <div className="PepperstoneCard-flex-header">
                        <div className="PepperstoneCard-header-logo">
                            <img src={PepperstonecardLogo} alt="Pepperstonecard-containerLogo" />
                        </div>
                        <div className="PepperstoneCard-header-content">
                            <h3>Pepperstone</h3>
                            <img src={BlueTick} alt="BlueTick" />
                        </div>
                    </div>
                </div>
                <p>
                    ASIC-regulated trading with spreads from 0.0 pips
                </p>
                <div className="PepperstoneCard-bottom">
                    <p>MIN DEPOSIT:</p>
                    <p>$0</p>
                </div>
            </div>
            <img className="PepperstonecardImage" src={MapImage} alt="MapImage"></img>
        </div>
    )
}