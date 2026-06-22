import React from "react";
import "./AlgomaticBot.scss"
import Algomatic from "../../../../assets/logo/AlgomaticBot.webp"
import BotAlgomatic from "../../../../assets/logo/BotAlgomatic.png"
import { ArrowBigRight, ArrowRight } from "lucide-react";

export default function AlgomaticBot() {
    return (
        <div className="AlgomaticBot-section">
            <div className="AlgomaticBot-image-align">
                <img src={Algomatic} alt="AlgomaticBot" />
            </div>
            <div className="AlgomaticBot-mid-align">
                <div className="AlgomaticBot-mid-image-align">
                    <div className="AlgomaticBot-mid-image">
                        <img src={BotAlgomatic} alt="BotAlgomatic" />
                    </div>
                </div>
                <div>
                    <h3>
                        Algomatic Bot
                    </h3>
                    <p>
                        Editorial review of Algomatic Bot: regulation, platforms, fees and verdict
                    </p>
                </div>
            </div>
            <div className="AlgomaticBot-content-align">
                <div className="AlgomaticBot-info">
                    <ArrowBigRight />
                    <p>
                        <span>Focus : </span>
                        Gold Arbitrage Opportunities
                    </p>
                </div>
                <div className="AlgomaticBot-info">
                    <ArrowBigRight />
                    <p>
                        <span>Control  : </span>
                        Smart Automation
                    </p>
                </div>
                <div className="AlgomaticBot-info">
                    <ArrowBigRight />
                    <p>
                        <span>Best For  : </span>
                        Systematic traders
                    </p>
                </div>
                <div className="AlgomaticBot-info">
                    <ArrowBigRight />
                    <p>
                        <span>Outcome  : </span>
                        Fast & systematic trade execution
                    </p>
                </div>

                <div className="AlgomaticBot-button">
                    <button>
                        <span>
                            Run Bot
                            <div className="AlgomaticBot-arrow-button">
                                <ArrowRight />
                            </div>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}