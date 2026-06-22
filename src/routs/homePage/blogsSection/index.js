import React from "react";
import "./blogsSection.scss"
import ViewMore from "../../../components/viewMoreButton";
import MarketAnalysis from "./MarketAnalysis";

export default function BlogsSection() {
    return (
        <div className="blogs-section">
            <div className="blogs-container">
                <div className="blogs-header">
                    <div>
                        <h2>
                            Blogs
                        </h2>
                        <p>
                            Stay informed with the latest forex broker reviews, trading tips, and market insights written for traders at every level.
                        </p>
                    </div>
                    <div className="blogs-header-button">
                        <ViewMore />
                    </div>
                </div>
                <div className="blogs-card-grid-align">
                    <MarketAnalysis />
                </div>
            </div>
        </div>
    )
}