import React from "react";
import "./tradingBotProvider.scss"
import ExploreAll from "../../../components/exploreAllButton";
import AlgomaticBot from "./AlgomaticBot";

export default function TradingBotProvider() {
    return (
        <div className="tradingBotProvider-section">
            <div className="tradingBotProvider-container">
                <div className="tradingBotProvider-header">
                    <div>
                        <h2>
                            Algo Trading & Forex Bot Provider
                        </h2>
                        <p>
                            Discover automated forex trading bots and algorithmic strategy providers built for passive income, consistent execution, and hands-free trading.
                        </p>
                    </div>
                    <div className="tradingBotProvider-header-button">
                        <ExploreAll />
                    </div>
                </div>
                <div className="tradingBotProvider-card-align">
                    <AlgomaticBot />
                    <AlgomaticBot />
                    <AlgomaticBot />
                </div>
            </div>
        </div>
    )
}