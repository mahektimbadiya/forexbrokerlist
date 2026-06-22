import React from "react";
import "./MarketAnalysis.scss"
import MarketAnalysisImage from "../../../../assets/logo/MarketAnalysis-image.png"
import { Calendar } from "lucide-react";

export default function MarketAnalysis() {
    return (
        <div className="MarketAnalysis-section">
            <div className="MarketAnalysis-image-align">
                <img src={MarketAnalysisImage} alt="MarketAnalysisImage" />
            </div>
            <div className="MarketAnalysis-content">
                <div className="MarketAnalysis-content-header">
                    <div className="MarketAnalysis-content-header-title">Market Analysis</div>
                    <div className="MarketAnalysis-date">
                        <Calendar />
                        <p>
                            Mar 10, 2026
                        </p>
                    </div>
                </div>
                <h2>
                    How to Choose the Best Forex Broker in 2026
                </h2>
                <p>
                    Choosing the right forex broker is one of the most important decisions a trader can make. With hundreds of brokers available online, each offering different spreads, platforms, and leverage options, finding the right one can be challenging.
                </p>
            </div>
        </div>
    )
}