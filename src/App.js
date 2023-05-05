import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ScrollToTop2 from "react-scroll-to-top";
import ScrollButton from "./ScrollButton";
import ScrollToTop from "./ScrollToTop";

import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import ContactUs from "./pages/ContactUs/ContactUs";
import WhoAreWe from "./pages/WhoAreWe/WhoAreWe";
import MeetOurTeam from "./pages/MeetOurTeam/MeetOurTeam";
import FAQS from "./pages/FAQS/FAQS";
import AOS from "aos";
import WebsiteDevelopment from "./pages/WebsiteDevelopment/WebsiteDevelopment";
import "./css/our-card.css";
import ContentMarketing from "./pages/ContentMarketing/ContentMarketing";
import UIUXDesign from "./pages/UIUXDesign/UIUXDesign";
import SearchEngineOptimization from "./pages/SearchEngineOptimization/SearchEngineOptimization";
import SocialMediaMarketing from "./pages/SocialMediaMarketing/SocialMediaMarketing";
import BusinessManagementSoftware from "./pages/BusinessManagementSoftware/BusinessManagementSoftware";
import AIIntegratedChatBot from "./pages/AIIntegratedChatBot/AIIntegratedChatBot";
import FreelanceWriting from "./pages/FreelanceWriting/FreelanceWriting";
import KeywordResearch from "./pages/KeywordResearch/KeywordResearch";
import PayPerClickManagement from "./pages/PayPerClickManagement/PayPerClickManagement";
import IdeationAndDesigning from "./pages/IdeationAndDesigning/IdeationAndDesigning";
import KnowYourAudience from "./pages/Blogs/AllBlogs/KnowYourAudience";
import StrategicCreative from "./pages/Blogs/AllBlogs/StrategicCreative";
import IntroToPPCM from "./pages/Blogs/AllBlogs/IntroToPPCM";
import LatestUIUXTrends from "./pages/Blogs/AllBlogs/LatestUIUXTrends";
import InboundMarketing from "./pages/Blogs/AllBlogs/InboundMarketing";
import UIUXCustomerInteraction from "./pages/Blogs/AllBlogs/UIUXCustomerInteraction";
import EffectiveBrandingTips from "./pages/Blogs/AllBlogs/EffectiveBrandingTips";
import GuideToFacebookMarketing from "./pages/Blogs/AllBlogs/GuideToFacebookMarketing";
import SkillsDigitalMarketers from "./pages/Blogs/AllBlogs/SkillsDigitalMarketers";
import EffectiveUseOfHashtags from "./pages/Blogs/AllBlogs/EffectiveUseOfHashtags";
import BusinessBlogging from "./pages/Blogs/AllBlogs/BusinessBlogging";
import OverviewContentMarketing from "./pages/Blogs/AllBlogs/OverviewContentMarketing";
import TrafficCustomersOnline from "./pages/Blogs/AllBlogs/TrafficCustomersOnline";
import UpYourSEOGame from "./pages/Blogs/AllBlogs/UpYourSEOGame";
import GoldenRulesOfDesign from "./pages/Blogs/AllBlogs/GoldenRulesOfUIDesign";
import WhyEveryBusinessNeedsWebsite from "./pages/Blogs/AllBlogs/WhyEveryBusinessNeedsWebsite";
import SaasAnalytics from "./pages/Blogs/AllBlogs/SaasAnalytics";
import AffiliateMarketing from "./pages/Blogs/AllBlogs/AffiliateMarketing";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Careers from "./pages/Careers/Careers";
import DigitalMarketingStrategy from "./pages/Blogs/AllBlogs/DigitalMarketingStrategy";
import BenefitsOrganicSearch from "./pages/Blogs/AllBlogs/BenefitsOrganicSearch";
import BusinessChatBot from "./pages/Blogs/AllBlogs/BusinessChatbot";
import CreateSurvey from "./pages/Blogs/AllBlogs/CreateSurvey";
import SocialMediaMistakes from "./pages/Blogs/AllBlogs/SocialMediaMistakes";
import ImportanceKeywordResearch from "./pages/Blogs/AllBlogs/ImportanceKeywordResearch";
import GoogleAnalytics from "./pages/Blogs/AllBlogs/GoogleAnalytics";
import IdeationMarketing from "./pages/Blogs/AllBlogs/IdeationMarketing";
import ExpertiseDigitalMarketing from "./pages/Blogs/AllBlogs/ExpertiseDigitalMarketing";
import DigitalMarketingSME from "./pages/Blogs/AllBlogs/DigitalMarketingSME";
import FactorsDigitalMarketing from "./pages/Blogs/AllBlogs/FactorsDigitalMarketing";
import HireFreelanceWriter from "./pages/Blogs/AllBlogs/HireFreelanceWriter";
import TiktokMarketing from "./pages/Blogs/AllBlogs/TiktokMarketing";
import SanityBlog from "./pages/Blogs/SanityBlog";
import { useEffect, useState } from "react";
import { queryString } from "./utils";
import client from "./utils";
import { BlogContext } from "./context_api";
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client
      .fetch(queryString)
      .then((data) => {
        console.log("on App.js");
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
        setPosts([]);
      });
  }, []);
  return (
    <BlogContext.Provider value={posts}>
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        {/* <ScrollToTop2 smooth color="#2b0a78" /> */}
        <ScrollButton />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/who-are-we/" element={<WhoAreWe />}></Route>
          <Route path="/meet-our-team/" element={<MeetOurTeam />}></Route>
          <Route path="/faqs/" element={<FAQS />}></Route>
          <Route
            path="/website-development/"
            element={<WebsiteDevelopment />}
          ></Route>
          <Route
            path="/content-marketing/"
            element={<ContentMarketing />}
          ></Route>
          <Route path="/ui-ux-design/" element={<UIUXDesign />}></Route>
          <Route
            path="/search-engine-optimization/"
            element={<SearchEngineOptimization />}
          ></Route>
          <Route
            path="/social-media-marketing/"
            element={<SocialMediaMarketing />}
          ></Route>
          <Route
            path="/business-management-software/"
            element={<BusinessManagementSoftware />}
          ></Route>
          <Route
            path="/ai-integrated-chat-bot/"
            element={<AIIntegratedChatBot />}
          ></Route>
          <Route
            path="/freelance-writing/"
            element={<FreelanceWriting />}
          ></Route>
          <Route
            path="/keyword-research/"
            element={<KeywordResearch />}
          ></Route>
          <Route
            path="/pay-per-click-management/"
            element={<PayPerClickManagement />}
          ></Route>
          <Route
            path="/ideation-and-designing/"
            element={<IdeationAndDesigning />}
          ></Route>
          <Route
            path="/blogs/know-your-audience/"
            element={<KnowYourAudience />}
          ></Route>
          <Route
            path="/blogs/strategic-creative/"
            element={<StrategicCreative />}
          ></Route>
          <Route path="/blogs/intro-to-ppcm/" element={<IntroToPPCM />}></Route>
          <Route
            path="/blogs/latest-ui-ux-trends/"
            element={<LatestUIUXTrends />}
          ></Route>
          <Route
            path="/blogs/what-is-inbound-marketing/"
            element={<InboundMarketing />}
          ></Route>
          <Route
            path="/blogs/how-is-your-ui-ux-impacting-customer-interaction/"
            element={<UIUXCustomerInteraction />}
          ></Route>
          <Route
            path="/blogs/effective-branding-tips/"
            element={<EffectiveBrandingTips />}
          ></Route>
          <Route
            path="/blogs/guide-to-facebook-marketing/"
            element={<GuideToFacebookMarketing />}
          ></Route>
          <Route
            path="/blogs/7-skills-every-digital-marketer-needs-to-be-succeed/"
            element={<SkillsDigitalMarketers />}
          ></Route>
          <Route
            path="/blogs/effective-use-of-hashtags/"
            element={<EffectiveUseOfHashtags />}
          ></Route>
          <Route
            path="/blogs/all-you-need-to-know-about-business-blogging/"
            element={<BusinessBlogging />}
          ></Route>
          <Route
            path="/blogs/content-marketing-how-it-can-help-your-business/"
            element={<OverviewContentMarketing />}
          ></Route>
          <Route
            path="/blogs/how-to-get-traffic-and-customers-online/"
            element={<TrafficCustomersOnline />}
          ></Route>
          <Route
            path="/blogs/5-ways-to-up-your-seo-game/"
            element={<UpYourSEOGame />}
          ></Route>
          <Route
            path="/blogs/3-golden-rules-of-ui-design/"
            element={<GoldenRulesOfDesign />}
          ></Route>
          <Route
            path="/blogs/why-every-business-needs-a-webiste/"
            element={<WhyEveryBusinessNeedsWebsite />}
          ></Route>
          <Route
            path="/blogs/how-can-the-saas-analytics-platform-helps-in-marketing-and-growth/"
            element={<SaasAnalytics />}
          ></Route>
          <Route
            path="/blogs/get-started-with-affiliate-marketing/"
            element={<AffiliateMarketing />}
          ></Route>
          <Route path="/blogs/" element={<Blogs />}></Route>
          <Route path="/careers/" element={<Careers />}></Route>
          <Route path="/contact-us/" element={<ContactUs />}></Route>
          <Route path="/terms-of-use/" element={<TermsOfUse />}></Route>
          <Route path="/privacy-policy/" element={<PrivacyPolicy />}></Route>
          <Route
            path="/blogs/digital-marketing-strategy"
            element={<DigitalMarketingStrategy></DigitalMarketingStrategy>}
          ></Route>
          <Route
            path="/blogs/benefits-of-organic-search-to-your-business/"
            element={<BenefitsOrganicSearch></BenefitsOrganicSearch>}
          ></Route>
          <Route
            path="/blogs/business-chatbot-automation/"
            element={<BusinessChatBot></BusinessChatBot>}
          ></Route>
          <Route
            path="/blogs/create-a-survey/"
            element={<CreateSurvey></CreateSurvey>}
          ></Route>
          <Route
            path="/blogs/social-media-mistakes/"
            element={<SocialMediaMistakes></SocialMediaMistakes>}
          ></Route>
          <Route
            path="/blogs/importance-of-keyword-research/"
            element={<ImportanceKeywordResearch></ImportanceKeywordResearch>}
          ></Route>
          <Route
            path="/blogs/guide-to-google-analytics/"
            element={<GoogleAnalytics></GoogleAnalytics>}
          ></Route>
          <Route
            path="/blogs/ideation-for-marketing/"
            element={<IdeationMarketing></IdeationMarketing>}
          ></Route>
          <Route
            path="/blogs/5-main-expertise-digital-marketing/"
            element={<ExpertiseDigitalMarketing></ExpertiseDigitalMarketing>}
          ></Route>
          <Route
            path="/blogs/digital-marketing-essential-smes-solopreneurs/"
            element={<DigitalMarketingSME></DigitalMarketingSME>}
          ></Route>
          <Route
            path="/blogs/factors-digital-marketing/"
            element={<FactorsDigitalMarketing></FactorsDigitalMarketing>}
          ></Route>
          <Route
            path="/blogs/why-you-should-hire-freelance-writer/"
            element={<HireFreelanceWriter></HireFreelanceWriter>}
          ></Route>
          <Route
            path="/blogs/reasons-tiktok-marketing/"
            element={<TiktokMarketing></TiktokMarketing>}
          ></Route>
          <Route path="/blogs/:slug" element={<SanityBlog />} />
        </Routes>
      </BrowserRouter>
    </BlogContext.Provider>
  );
}

AOS.init();

export default App;
