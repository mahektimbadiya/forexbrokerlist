import React from "react";
import "./header.scss"
import ForexBrokerslistlogo from "../../assets/logo/full-logo-dark.svg"
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router";

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
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/browse"}>Browse</NavLink>
                        <NavLink to={"/brokers"}>Brokers</NavLink>
                        <NavLink to={"/tools"}>
                            <button>
                                Tools
                                <ChevronDown />
                            </button>
                        </NavLink>
                        <NavLink to={"/learnforex"}>Forex CRM</NavLink>
                        <NavLink to={"/advertise"}>Advertise</NavLink>
                        <NavLink to={"/browse"}>Contact us</NavLink>
                        <NavLink to={"/brokers"}>News</NavLink>
                        <NavLink to={"/advertise"}>Expo</NavLink>
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