import React from "react";
import "./learnForex.scss"
import { MoveRight } from "lucide-react";
import LearnForexCenterCard from "./learnForexCenterCard";

export default function LearnForex() {
    return (
        <div className="learnForex-section">
            <div className="learnForex-conatiner">
                <div className="learnForex-flex-align">
                    <div className="learnForex-left-align">
                        <h2>
                            Learn Forex Trading - Top Education Platforms & Courses
                        </h2>
                        <p>
                            The forex market rewards those who invest in their knowledge first. Our directory features hand-picked forex education platforms and trading academies trusted by thousands of active traders worldwide.
                        </p>
                        <p>
                            Compare course formats, student reviews, pricing, and specializations, whether you prefer self-paced online learning, live mentorship, or structured trading programs. Start with confidence, backed by verified reviews and transparent listings.
                        </p>
                        <div className="learnForex-left-button">
                            <button>
                                <span>
                                    Start Learning
                                </span>
                                <MoveRight />
                            </button>
                        </div>
                    </div>
                    <div className="learnForex-right-align">
                        <div className="learnForex-right-card-align">
                            <LearnForexCenterCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}