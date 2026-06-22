import React from "react";
import "./tradingPlatforms.scss"
import { MoveRight } from "lucide-react";
import ViewMore from "../../../components/viewMoreButton";
import ExnessCard from "./exnessCard";
import FPMarketsCard from "./FPMarketsCard";
import XMBrokerCard from "./XMBrokerCard";
import ICMarketsCard from "./ICMarketsCard";
import AVATradeCard from "./AVATradeCard";
import FxProCard from "./FxProCard";
import PepperstoneCard from "./PepperstoneCard";
import YourBrandHereCard from "./YourBrandhereCard";

export default function TradingPlatforms() {
    return (
        <div className="tradingPlatforms-section">
            <div className="tradingPlatforms-container">
                <div className="tradingPlatforms-header">
                    <div className="tradingPlatforms-header-content">
                        <h2>
                            Top-Rated Forex Brokers & Trading Platforms Tools
                        </h2>
                        <p>
                            Browse verified forex brokers and trading platforms, compare spreads , regulation, and features to find
                            the right fit for your trading goals.
                        </p>
                    </div>
                    <div className="tradingPlatforms-header-button">
                        <ViewMore />
                    </div>
                </div>
                <div className="tradingPlatforms-cards">
                    <div className="tradingPlatforms-cards-align">
                        <ExnessCard />
                        <FPMarketsCard />
                        <XMBrokerCard />
                    </div>
                    <div className="tradingPlatforms-cards-align">
                        <PepperstoneCard />
                        <YourBrandHereCard />
                    </div>
                    <div className="tradingPlatforms-cards-align">
                        <ICMarketsCard />
                        <AVATradeCard />
                        <FxProCard />
                    </div>
                </div>
            </div>
        </div>
    )
}