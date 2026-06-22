import React from "react";
import "./header.scss"
import ForexBrokerslistlogo from "../../assets/logo/full-logo-dark.svg"
import { ChevronDown } from "lucide-react";

export default function Header() {
    return (
        <header>
            <div className="header-section">
                <div className="header-flex-align">
                    <div className="header-logo-align">
                        <a>
                            <img src={ForexBrokerslistlogo} alt="Forex Brokerslist" />
                        </a>
                    </div>
                    <div className="header-menu-align">
                        <a>Home</a>
                        <a>Browse</a>
                        <a>Brokers</a>
                        <button>
                            Tools
                            <ChevronDown />
                        </button>
                        <a>Forex CRM</a>
                        <a>Advertise</a>
                        <a>Contact us</a>
                        <a>News</a>
                        <a>Expo</a>
                    </div>
                    <div className="header-button">
                        <div className="header-button-align">
                            <span>
                                Sign In
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}