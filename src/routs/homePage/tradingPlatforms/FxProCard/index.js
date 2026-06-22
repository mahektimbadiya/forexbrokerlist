import React from "react";
import "./FxProCard.scss"
import FxProLogo from "../../../../assets/logo/FxPro.png"
import BlueTick from "../../../../assets/logo/BlueTick.png"

export default function FxProCard() {
    return (
        <div className="FxProCard-section">
            <div>
                <div className="FxProCard-header">
                    <div className="FxProCard-flex-header">
                        <div className="FxProCard-header-logo">
                            <img src={FxProLogo} alt="FxProLogo" />
                        </div>
                        <div className="FxProCard-header-content">
                            <h3>FxPro</h3>
                            <img src={BlueTick} alt="BlueTick" />
                        </div>
                    </div>
                </div>
                <p>
                    Competitive forex and CFD trading for beginners and pros alike
                </p>
                <div className="FxProCard-bottom">
                    <p>MIN DEPOSIT:</p>
                    <p>$100</p>
                </div>
            </div>
        </div>
    )
}