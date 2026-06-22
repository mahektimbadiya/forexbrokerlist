import React from "react";
import "./footer.scss"
import MapImage from "../../assets/images/map-img.png"
import ForexBrokerslist from "../../assets/logo/full-logo-dark.svg"

export default function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-container">
                <div className="footer-content-align">
                    <img className="MapImage" src={MapImage} alt="MapImage" />
                    <div className="footer-grid-conteiner">

                        <div className="footer-flex-items">
                            <div className="footer-logo-align">
                                <img className="Footer-logo" src={ForexBrokerslist} alt="ForexBrokerslist" />
                            </div>
                            <p>
                                ForexBrokerList.io is a free forex broker directory helping traders discover, compare, and review 512+ verified forex brokers worldwide.
                            </p>
                        </div>

                        <div className="footer-flex-items">
                            <h6>
                                Browse:
                            </h6>
                            <a>Brokers</a>
                            <a>Categories</a>
                            <a>Tags</a>
                            <a>Blog</a>
                        </div>

                        <div className="footer-flex-items">
                            <h6>
                                Quick Links:
                            </h6>
                            <a>Submit</a>
                            <a>About Us</a>
                            <a>Contact us</a>
                            <a>Privacy Policy</a>
                            <a>Terms of Service</a>
                            <a>Disclaimer</a>
                            <a>Cookie Policy</a>
                            <a>Advertise</a>
                        </div>

                        <div className="footer-flex-items">
                            <h6>
                                Subscribe to our newsletter
                            </h6>
                            <p>
                                Join 5,000+ other members and get updates straight to your inbox.
                            </p>
                            <form>
                                <div className="footer-inbox">
                                    <input type="email" placeholder="Enter your email" name="email"></input>
                                    <button>
                                        <span>
                                            Subscribe
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom-text">
                        <p>
                            ForexBrokerList.io is an independent forex broker directory for informational purposes only. We do not provide financial advice, execute trades, or manage client funds.
                        </p>
                        <p>
                            All broker listings, reviews, and comparisons are for general information only. Trading forex and CFDs involves significant risk of loss and may not be suitable for all investors. Past performance is not indicative of future results.
                        </p>
                        <p>
                            Sponsored listings are clearly marked and do not imply endorsement or recommendation. Always verify a broker's regulatory status through official authorities such as FCA, ASIC, or CySEC before depositing funds.
                        </p>
                        <p>
                            For queries or listing requests, contact us at:
                            <a> forexbrokerlist24@gmail.com</a>
                        </p>
                    </div>
                    <div className="footer-devider-line"></div>
                    <p className="footer-text">
                         © 2026 ForexBrokerList.io - All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}