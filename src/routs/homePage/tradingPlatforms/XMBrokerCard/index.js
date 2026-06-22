import React from "react";
import "./XMBrokerCard.scss"
import XMBrokerLogo from "../../../../assets/logo/XM Broker.png"
import BlueTick from "../../../../assets/logo/BlueTick.png"

export default function XMBrokerCard() {
    return (
        <div className="XMBrokerCard-section">
            <div>
                <div className="XMBrokerCard-header">
                    <div className="XMBrokerCard-flex-header">
                        <div className="XMBrokerCard-header-logo">
                            <img src={XMBrokerLogo} alt="XMBrokerLogo" />
                        </div>
                        <div className="XMBrokerCard-header-content">
                            <h3>XM Broker</h3>
                            <img src={BlueTick} alt="BlueTick" />
                        </div>
                    </div>
                </div>
                <p>
                    Multi-jurisdiction regulated broker trusted across global markets
                </p>
                <div className="XMBrokerCard-bottom">
                    <p>MIN DEPOSIT:</p>
                    <p>$5</p>
                </div>
            </div>
        </div>
    )
}