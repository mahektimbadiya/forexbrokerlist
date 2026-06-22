import React from "react";
import "./chooseBrokers.scss"
import { MoveRight } from "lucide-react";
import chooseBrokersImage from "../../../assets/logo/chooseBrokers.png"

export default function ChooseBrokers() {
    return (
        <div className="chooseBrokers-section">
            <div className="chooseBrokers-container">
                <div className="chooseBrokers-flex-container">
                    <div className="chooseBrokers-content">
                        <h2>
                            Choose the Right Forex Broker for Your Investment
                        </h2>
                        <p>
                            Compare forex brokers by spread, regulation, platform, and minimum deposit. Browse 512+ verified listings completely free. A signup is required.
                        </p>
                        <div className="chooseBrokers-button">
                            <button>
                                <span>
                                    Browse All Brokers
                                    <div className="learnForexCard-button-arrow">
                                        <MoveRight />
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="chooseBrokers-image">
                        <img src={chooseBrokersImage} alt="chooseBrokers-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}