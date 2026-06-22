import React from "react";
import "./PrimeXM.scss"
import PrimeXMLogo from "../../../../assets/logo/PrimeXM.png"
import { BadgeCheck, MoveRight } from "lucide-react";

export default function PrimeXM() {
    return (
        <div className="PrimeXM-section">
            <div className="PrimeXM-topLogo">
                <div className="PrimeXM-topLogo-align">
                    <img src={PrimeXMLogo} alt="PrimeXMLogo" />
                </div>
            </div>
            <span>Bridge Technology</span>
            <h3>Prime XM </h3>
            <p>Ultra-Low Latency Bridge</p>
            <ul>
                <li>
                    XCore execution engine
                </li>
                <li>
                    Multi-venue order aggregation
                </li>
            </ul>
            <div className="PrimeXM-text">
                <BadgeCheck />
                Trusted by global brokers
            </div>
            <div className="PrimeXM-button">
                <button>
                    <div className="PrimeXM-span">
                        View Integration

                        <div className="PrimeXM-right-icon">
                            <MoveRight />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}