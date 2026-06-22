import React from "react";
import "./tradingPlatformPartners.scss"
import ViewMore from "../../../../components/viewMoreButton";
import MetaTrader from "../../../../assets/logo/MetaTrader.png"

export default function TradingPlatformPartners() {
    return (
        <div className="tradingPlatform-section">
            <div className="tradingPlatform-header">
                <div>
                    <h3>
                        Trading Platform Partners
                    </h3>
                    <p>
                        Connect with trusted trading platforms and automate your strategies with powerful tools
                    </p>
                </div>
                <div className="tradingPlatform-header-button">
                    <ViewMore />
                </div>
            </div>
            <div className="tradingPlatform-bottomCard">
                <div className="tradingPlatform-grid-align">
                    <div className="tradingPlatform-grid-items">
                        <div className="tradingPlatform-grid-items-image">
                            <img src={MetaTrader} alt="Meta Trader 5" />
                        </div>
                        <p>Meta Trader 5 </p>
                    </div>
                    <div className="tradingPlatform-grid-items">
                        <div className="tradingPlatform-grid-items-image">
                            <img src={MetaTrader} alt="Meta Trader 5" />
                        </div>
                        <p>Meta Trader 5 </p>
                    </div>
                    <div className="tradingPlatform-grid-items">
                        <div className="tradingPlatform-grid-items-image">
                            <img src={MetaTrader} alt="Meta Trader 5" />
                        </div>
                        <p>Meta Trader 5 </p>
                    </div>
                    <div className="tradingPlatform-grid-items">
                        <div className="tradingPlatform-grid-items-image">
                            <img src={MetaTrader} alt="Meta Trader 5" />
                        </div>
                        <p>Meta Trader 5 </p>
                    </div>
                    <div className="tradingPlatform-grid-items">
                        <div className="tradingPlatform-grid-items-image">
                            <img src={MetaTrader} alt="Meta Trader 5" />
                        </div>
                        <p>Meta Trader 5 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}