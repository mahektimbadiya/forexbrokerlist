import React from "react";
import "./technologyPartners.scss"
import ExploreAll from "../../../components/exploreAllButton";
import PrimeXM from "./PrimeXM";

export default function TechnologyPartners() {
    return (
        <div className="technologyPartners-section">
            <div className="technologyPartners-conatiner">
                <div className="technologyPartners-header">
                    <div>
                        <h2>Forex Bridge & Plugin Technology Partners </h2>
                        <p>
                            Discover trusted bridge and plugin technology partners used by 512+ forex brokers worldwide. Compare features, integrations, and infrastructure solutions in one place.
                        </p>
                    </div>
                    <div className="technologyPartners-header-button">
                        <ExploreAll />
                    </div>
                </div>
                <div className="technologyPartners-content">
                    <PrimeXM />
                    <PrimeXM />
                    <PrimeXM />
                    <PrimeXM />
                    <PrimeXM />
                    <PrimeXM />
                </div>
            </div>
        </div>
    )
}