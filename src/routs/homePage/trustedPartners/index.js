import React from "react";
import "./trustedPartners.scss"
import ViewMore from "../../../components/viewMoreButton";
import LMAXGroup from "./trustedPartersLeftAlign/LMAXGroup";
import TustedPartersLeftAlign from "./trustedPartersLeftAlign";
import TradingPlatformPartners from "./tradingPlatformPartners";
import PSPPartners from "./PSPpartners";

export default function TrustedPartners() {
    return (
        <div className="trustedPartners-section">
            <div className="trustedPartners-conatiner">
                <div className="trustedPartners-header">
                    <h2>
                        Our Trusted Forex Industry Partners
                    </h2>
                    <p>
                        Supported by top forex industry partners, liquidity, platforms, payments &  broker tech.
                    </p>
                </div>
                <div className="trustedPartners-grid">
                    <div className="trustedPartners-griditems">
                        <TustedPartersLeftAlign />
                        <TradingPlatformPartners />
                    </div>
                    <div className="trustedPartners-griditems">
                        {/* <PSPPartners /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}