import React from "react";
import "./learnForexCenterCard.scss"
import learnForexCard from "../../../../assets/images/learnForexCard.webp"
import learnForexCardLogo from "../../../../assets/logo/alearnForexCardLogo.png"
import { MoveRight, Star, Users } from "lucide-react";

export default function LearnForexCenterCard() {
    return (
        <div className="learnForexCenterCard">
            <div className="learnForexCard-top-align">
                <img src={learnForexCard} alt="learnForexCard" />
            </div>
            <div className="learnForexCard-bottom-align">
                <div className="learnForexCard-logo-align">
                    <img src={learnForexCardLogo} alt="learnForexCardLogo" />
                </div>
                <div className="learnForexCard-text">Pro Level Training</div>
                <h3>
                    Golden Bulls International
                </h3>
                <p>
                    Advanced Trading Academy
                </p>
                <div className="learnForexCard-reviews">
                    <div className="learnForexCard-reviews-align">
                        <Star />
                        <span>2.5k Reviews</span>
                    </div>
                    <div className="learnForexCard-reviews-align">
                        <Users />
                        <span>12k+ Students</span>
                    </div>
                </div>
                <div className="learnForexCard-button">
                    <button>
                        <span>
                            Start Learning
                            <div className="learnForexCard-button-arrow">
                                <MoveRight />
                            </div>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}