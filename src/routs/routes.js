import React from "react";
import TradingPlatforms from "./homePage/tradingPlatforms";
import { Routes, Route } from "react-router";
import HomePage from "./homePage";
import HeroSection from "./homePage/heroSection";
import PremiumForexBrokers from "./homePage/premiumBrokers";
import LearnForex from "./homePage/learnForex";
import TechnologyPartners from "./homePage/technologyPartners";
import ChooseBrokers from "./homePage/chooseBrokers";
import TradingBotProvider from "./homePage/tradingBotProvider";

export default function RouteWraper() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tools" element={<TradingPlatforms />} />
            <Route path="/brokers" element={<PremiumForexBrokers />} />
            <Route path="/learnforex" element={<TechnologyPartners />} />
            <Route path="/advertise" element={<ChooseBrokers />} />
            <Route path="/browse" element={<TradingBotProvider />} />
        </Routes>
    )
}