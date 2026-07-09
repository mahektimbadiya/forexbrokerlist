import React from "react";
import "./heroSection.scss"
import { MoveRight, Search } from "lucide-react";
import HeroImage from "../../../assets/images/herobanner.png"
import MarqueeSlider from "../marqueeSlider";

export default function HeroSection() {
    return (
        <>
            <div className="heroSection">
                <div className="heroSection-container">
                    <div className="heroSection-content-section">
                        <div className="heroSection-content">
                            <div className="heroSection-top-content">
                                <span>New</span>
                                <span>512+ Verified Brokers Listed</span>
                            </div>
                            <h1>
                                Find, Compare & Choose the Best Forex Brokers
                            </h1>
                            <p>
                                Search and compare 512+ forex brokers by spread, regulation, platform, and minimum deposit. Trusted by thousands of traders worldwide, completely free.
                            </p>
                            <div className="heroSection-searchbar-section">
                                <button>
                                    <span>
                                        Find Your Broker

                                        <div className="searchbar-right-icon">
                                            <MoveRight />
                                        </div>
                                    </span>
                                </button>
                                <div className="search-box">
                                    <div className="searchbar-box-align">
                                        <div className="searchbar-box">
                                            <input placeholder="Search Broker ..."></input>
                                            <Search />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="heroSection-bottom">
                                <div className="heroSection-bottom-items">
                                    <h2>512+</h2>
                                    <p>Verified Brokers</p>
                                </div>
                                <div className="heroSection-bottom-items">
                                    <h2>5,000+</h2>
                                    <p>Newsletter Members</p>
                                </div>
                                <div className="heroSection-bottom-items">
                                    <h2>15k+</h2>
                                    <p>Trader Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heroSection-Image">
                    <img src={HeroImage} alt="HeroImage" />
                </div>
            </div>
        </>
    )
}