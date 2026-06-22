import React from "react";
import "./premiumBrokers.scss"
import ViewMore from "../../../components/viewMoreButton";
import PepperstoneLogo from "../../../assets/logo/PepperstoneLogo.png"
import ExnessLogo from "../../../assets/logo/ExnessLogo.png"
import XMBrokerLogo from "../../../assets/logo/XMBrokerLogo.png"
import ICMarketsLogo from "../../../assets/logo/ICMarketsLogo.png"
import AvaTradeLogo from "../../../assets/logo/AvaTradeLogo.png"
import Newera365Logo from "../../../assets/logo/Newera365Logo.png"
import BlueberryMarketsLogo from "../../../assets/logo/BlueberryMarketsLogo.png"

export default function PremiumForexBrokers() {
    return (
        <div className="premiumBrokers-section">
            <div className="premiumBrokers-top-conatiner">
                <div className="premiumBrokers-header">
                    <div className="premiumBrokers-header-content">
                        <h2>
                            Premium Forex Brokers
                        </h2>
                        <p>
                            Explore our featured premium forex brokers independently verified for regulation, <br></br> competitive spreads, and platform quality. Trusted by traders worldwide.
                        </p>
                    </div>
                    <div className="premiumBrokers-header-button">
                        <ViewMore />
                    </div>
                </div>
                <div className="premiumBrokers-grid">
                    <div className="premiumBrokers-grid-items">
                        <h3>Pepperstone</h3>
                        <p>
                            ASIC-regulated trading with spreads from 0.0 pips
                        </p>
                    </div>
                    <div className="premiumBrokers-grid-items">
                        <h3>Exness</h3>
                        <p>
                            CMA-regulated trading with spreads from 0.0 pips
                        </p>
                    </div>
                    <div className="premiumBrokers-grid-items">
                        <h3>XM Broker</h3>
                        <p>
                            Multi-jurisdiction regulated broker trusted across global markets
                        </p>
                    </div>
                    <div className="premiumBrokers-grid-items">
                        <h3>IC Markets</h3>
                        <p>
                            Globally renowned Australian-based ECN broker, highly favored by algorithmic and high-volume traders for its tight spreads, low latency, and superb execution speed.
                        </p>
                    </div>
                    <div className="premiumBrokers-grid-items">
                        <h3>AvaTrade</h3>
                        <p>
                            ASIC-regulated trading with spreads from 0.9 pips
                        </p>
                    </div>
                    <div className="premiumBrokers-grid-items">
                        <h3>Newera365</h3>
                        <p>
                            Competitive forex and CFD trading for beginners and pros alike
                        </p>
                    </div>
                    <div className="premiumBrokers-grid-items">
                        <h3>Blueberry Markets</h3>
                        <p>
                            Competitive forex and CFD trading for beginners and pros alike
                        </p>
                    </div>
                </div>
            </div>
            <div className="premiumBrokers-bottom-align">
                <div className="premiumBrokers-marquee-align">
                    <div className="premiumBrokers-marquee">
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>Pepperstone</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={PepperstoneLogo} alt="PepperstoneLogo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>Exness</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={ExnessLogo} alt="ExnessLogo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>XM Broker</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={XMBrokerLogo} alt="XMBrokerLogo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>IC Markets</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={ICMarketsLogo} alt="ICMarketsLogo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>AvaTrade</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={AvaTradeLogo} alt="AvaTradeLogo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>Newera365</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={Newera365Logo} alt="Newera365Logo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>Blueberry Markets</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={BlueberryMarketsLogo} alt="BlueberryMarketsLogo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>Pepperstone</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={PepperstoneLogo} alt="PepperstoneLogo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>Exness</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={ExnessLogo} alt="ExnessLogo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>XM Broker</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={XMBrokerLogo} alt="XMBrokerLogo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>IC Markets</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={ICMarketsLogo} alt="ICMarketsLogo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>AvaTrade</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={AvaTradeLogo} alt="AvaTradeLogo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>Newera365</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={Newera365Logo} alt="Newera365Logo" />
                            </div>
                        </div>
                        <div className="premiumBrokers-flex-items">
                            <div className="premiumBrokers-card-top">
                                <span>Blueberry Markets</span>
                            </div>
                            <div className="premiumBrokers-card-image">
                                <img src={BlueberryMarketsLogo} alt="BlueberryMarketsLogo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}