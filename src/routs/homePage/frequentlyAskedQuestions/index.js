import React from "react";
import "./frequentlyAskedQuestions.scss"
import ProfileGroup from "../../../assets/logo/ProfileGroup.svg"
import { MoveRight, Plus } from "lucide-react";

export default function FrequentlyAskedQuestions() {
    return (
        <div className="FAQ-container">
            <div className="FAQ-section">
                <div className="FAQ-grid-container">
                    <div className="FAQ-grid-item">
                        <div className="FAQ-grid-left-header">
                            <h2>
                                Frequently Asked Questions
                            </h2>
                            <p>
                                Got questions about forex brokers or our directory? Find quick answers below.
                            </p>
                        </div>
                        <div className="FAQ-grid-left-content">
                            <img src={ProfileGroup} alt="ProfileGroup" />
                            <div className="FAQ-grid-left-content-align">
                                <h3>
                                    Still confused? We’ll guide you.
                                </h3>
                                <p>
                                    Our team will help you create your first AI fashion visuals and set up the perfect workflow for your store — step by step.
                                </p>
                                <div className="FAQ-grid-left-content-button">
                                    <button>
                                        <span>
                                            Contact Us

                                            <div className="searchbar-right-icon">
                                                <MoveRight />
                                            </div>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="FAQ-grid-item">
                        <div className="FAQ-grid-right-content">
                            <div>
                                <div className="FAQuestions">
                                    <h3>
                                        <div className="FAQ-grid-right-content-button">
                                            What is ForexBrokerList.io?
                                            <div className="FAQuestions-plus-icon">
                                                <Plus />
                                            </div>
                                        </div>
                                    </h3>
                                </div>
                                <div className="FAQuestions">
                                    <h3>
                                        <div className="FAQ-grid-right-content-button">
                                            How do I find the right forex broker?
                                            <div className="FAQuestions-plus-icon">
                                                <Plus />
                                            </div>
                                        </div>
                                    </h3>
                                </div>
                                <div className="FAQuestions">
                                    <h3>
                                        <div className="FAQ-grid-right-content-button">
                                            Are the brokers on your list regulated?
                                            <div className="FAQuestions-plus-icon">
                                                <Plus />
                                            </div>
                                        </div>
                                    </h3>
                                </div>
                                <div className="FAQuestions">
                                    <h3>
                                        <div className="FAQ-grid-right-content-button">
                                            How can my broker get listed on the site?
                                            <div className="FAQuestions-plus-icon">
                                                <Plus />
                                            </div>
                                        </div>
                                    </h3>
                                </div>
                                <div className="FAQuestions">
                                    <h3>
                                        <div className="FAQ-grid-right-content-button">
                                            What is the difference between a regular and sponsored listing?
                                            <div className="FAQuestions-plus-icon">
                                                <Plus />
                                            </div>
                                        </div>
                                    </h3>
                                </div>
                                <div className="FAQuestions">
                                    <h3>
                                        <div className="FAQ-grid-right-content-button">
                                            Is ForexBrokerList.io free for traders?
                                            <div className="FAQuestions-plus-icon">
                                                <Plus />
                                            </div>
                                        </div>
                                    </h3>
                                </div>
                                <div className="FAQuestions">
                                    <h3>
                                        <div className="FAQ-grid-right-content-button">
                                            How do I stay updated with new listings?
                                            <div className="FAQuestions-plus-icon">
                                                <Plus />
                                            </div>
                                        </div>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="FAQ-bottomLine"></div>
        </div>
    )
}