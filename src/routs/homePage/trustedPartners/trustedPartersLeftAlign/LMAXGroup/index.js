import React from "react";
import "./LMAXGroup.scss"
import LMAXGroupImage from "../../../../../assets/logo/LMAXGroupImage.png"
import { MoveRight } from "lucide-react";

export default function LMAXGroup() {
    return (
        <div className="LMAXGroup-secion">
            <div className="LMAXGroup-conatiner">
                <div className="LMAXGroup-header">
                    <div className="LMAXGroup-header-image">
                        <img src={LMAXGroupImage} alt="LMAXGroupImage" />
                    </div>
                    <div>
                        <h3>
                            LMAX Group
                        </h3>
                        <p>
                            Global Exchange & Liquidity Provider
                        </p>
                    </div>
                </div>
                <div className="LMAXGroup-content">
                    <p>
                        Provides institutional grade liquidity and direct market access for brokers and financial institutions.
                    </p>
                </div>
                <div className="LMAXGroup-button">
                    <button>
                        <span>
                            Learn More
                            <div className="LMAXGroup-button-arrow">
                                <MoveRight />
                            </div>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}