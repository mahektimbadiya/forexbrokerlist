import React from "react";
import HeroSection from "./heroSection";
import MarqueeSlider from "./marqueeSlider";
import TradingPlatforms from "./tradingPlatforms";
import PremiumForexBrokers from "./premiumBrokers";
import LearnForex from "./learnForex";
import TechnologyPartners from "./technologyPartners";
import ChooseBrokers from "./chooseBrokers";
import TrustedPartners from "./trustedPartners";
import TradingBotProvider from "./tradingBotProvider";
import BlogsSection from "./blogsSection";
import FrequentlyAskedQuestions from "./frequentlyAskedQuestions";

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <MarqueeSlider />
            <TradingPlatforms />
            <PremiumForexBrokers />
            <LearnForex />
            <TechnologyPartners />
            <ChooseBrokers />
            <TrustedPartners />
            <TradingBotProvider />
            <BlogsSection />
            <FrequentlyAskedQuestions />
        </div>
    )
}