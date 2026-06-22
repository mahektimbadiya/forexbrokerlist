import React from "react";
import "./trustedPartersLeftAlign.scss"
import LMAXGroup from "./LMAXGroup";
import ViewMore from "../../../../components/viewMoreButton";

export default function TustedPartersLeftAlign() {
    return (
        <div className="trustedPartners-grid-leftAlign">
            <div className="trustedPartners-grid-leftHeader">
                <div>
                    <h3>Liquidity Partners</h3>
                    <p>
                        Providing deep liquidity and institutional-grade execution for brokers and financial institutions.
                    </p>
                </div>
                <div className="trustedPartners-grid-leftHeader-button">
                    <ViewMore />
                </div>
            </div>
            <div className="trustedPartners-grid-leftContent">
                <LMAXGroup />
                <LMAXGroup />
            </div>
        </div>
    )
}