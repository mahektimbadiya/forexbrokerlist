import React from "react";
import "./YourBrandHereCard.scss"
import ForexLogo from "../../../../assets/logo/ForexLogo.png"
import BlueTick from "../../../../assets/logo/BlueTick.png"
import FBLLogo from "../../../../assets/logo/FBL Logo.png"
import { MoveRight } from "lucide-react";

export default function YourBrandHereCard() {
    return (
        <div className="YourBrandHereCard-section">
            <div className="YourBrandHereCard-container">
                <div className="YourBrandHereCard-header">
                    <div className="YourBrandHereCard-flex-header">
                        <div className="YourBrandHereCard-header-logo">
                            <img src={ForexLogo} alt="YourBrandHereCard" />
                        </div>
                        <div className="YourBrandHereCard-header-content">
                            <h3>Your brand here</h3>
                        </div>
                    </div>
                    <div className="YourBrandHereCard-button">
                        <button>Add New</button>
                    </div>
                </div>
                <p>
                    Reach our audience of professional directory owners and boost your sales.
                </p>
                <img className="ForexImage" src={FBLLogo} alt="ForexImage"></img>
                <div className="">
                    <button>
                        <span>Advertise on Forex Brokers Listing</span>
                        <MoveRight />
                    </button>
                </div>
            </div>
        </div>
    )
}