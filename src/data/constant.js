import logo from "../assets/logo/logo.webp";

// services icons (website)
import { ReactComponent as icon1 } from "../assets/svg/services/blockchain.svg";
import { ReactComponent as icon2 } from "../assets/svg/services/Game Development.svg";
import { ReactComponent as icon3 } from "../assets/svg/services/rpa.svg";
import { ReactComponent as icon4 } from "../assets/svg/services/ai.svg";
import { ReactComponent as icon5 } from "../assets/svg/services/Machine Learning Solutions.svg";
import { ReactComponent as icon6 } from "../assets/svg/services/cloud.svg";
import { ReactComponent as icon7 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as icon8 } from "../assets/svg/services/data.svg";
import { ReactComponent as icon9 } from "../assets/svg/services/nlp.svg";
import { ReactComponent as icon10 } from "../assets/svg/services/migration.svg";
import { ReactComponent as icon11 } from "../assets/svg/services/UIUX Design.svg";

// app development services icons
import { ReactComponent as appIcon1 } from "../assets/svg/services/iOS App Development.svg";
import { ReactComponent as appIcon2 } from "../assets/svg/services/Android.svg";
import { ReactComponent as appIcon3 } from "../assets/svg/services/Flutter.svg";
import { ReactComponent as appIcon4 } from "../assets/svg/services/Hybrid App Development.svg";

// web development services icons
import { ReactComponent as webIcon1 } from "../assets/svg/services/E-Commerce Development.svg";
import { ReactComponent as webIcon2 } from "../assets/svg/services/Social Media Websites.svg";
import { ReactComponent as webIcon3 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as webIcon4 } from "../assets/svg/services/UIUX Design.svg";
import { FaGlobe } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

export { logo };

export const companyDetails = {
  email: "stoneageai73@gmail.com",
  phone: "+91-8456895594",
  phone2: "+91-7978995594",
  address: `Sastri Nagar 1st lane
Near utkal hall,
Berhampur, Odisha`,
};

export const testimonials = [
  {
    id: 1,
    name: "Michael S.",
    designation: "CEO, XYZ Corp.",
    // image: require("../assets/images/testimonial/1.jpg"),
    review:
      "We were looking for a way to integrate blockchain technology into our business, and the team at CybertechieAzadSol delivered an exceptional solution. Their expertise in developing a secure and decentralized system has truly transformed our business operations. We’ve seen a marked improvement in transparency and efficiency. Highly recommend their services!",
  },
  {
    id: 2,
    name: "Laura T.",
    designation: "Director of Game Development, FunTech Studios",
    // image: require("../assets/images/testimonial/2.jpg"),
    review:
      "We approached CybertechieAzadSol with an idea for a mobile game, and they exceeded all our expectations. The team combined creative design with technical skill to build an engaging game that’s been well-received by users. The final product is not only visually stunning but also provides an immersive and enjoyable experience.",
  },
  {
    id: 3,
    name: "Ryan K.",
    designation: "Founder, MarketConnect",
    // image: require("../assets/images/testimonial/3.jpg"),
    review:
      "CybertechieAzadSol turned our app concept into a fully functional and user-friendly product. Their team was collaborative and efficient, always ensuring our ideas were integrated into the app design. Since launching, we've seen a significant boost in user engagement and customer satisfaction. It’s been a pleasure working with them!",
  },
  {
    id: 4,
    name: "Sarah W.",
    designation: "Chief Operating Officer, GreenTech Solutions",
    // image: require("../assets/images/testimonial/4.jpg"),
    review:
      "Integrating Robotic Process Automation (RPA) into our business processes has been a game-changer, thanks to CybertechieAzadSol. Their automation solutions have streamlined operations, reduced manual errors, and saved us a tremendous amount of time. The impact on our productivity has been immediate and impressive.",
  },
  {
    id: 5,
    name: "James L.",
    designation: "VP of Operations, FinScope Analytics",
    // image: require("../assets/images/testimonial/5.jpg"),
    review:
      "The AI system that CybertechieAzadSol developed for us has taken our decision-making to the next level. Their team designed a solution that analyzes vast datasets and provides valuable insights in real-time, helping us improve operational efficiency and reduce costs. The results speak for themselves.",
  },
  {
    id: 6,
    name: "Anna P.",
    designation: "Head of Data Science, HealthPredict",
    // image: require("../assets/images/testimonial/6.jpg"),
    review:
      "Working with CybertechieAzadSol on our machine learning project was an excellent experience. They helped us create a predictive model that significantly improved our forecasting abilities. The insights we've gained from the model have had a profound impact on our business strategy. Their team was always responsive and ready to offer guidance when needed.",
  },
  {
    id: 7,
    name: "Robert M.",
    designation: "CTO, CloudVantage",
    // image: require("../assets/images/testimonial/7.jpg"),
    review:
      "We turned to CybertechieAzadSol to help us move our infrastructure to the cloud, and the process couldn’t have gone more smoothly. Their team not only helped us migrate efficiently but also optimized our cloud environment for better performance and security. We’ve seen immediate benefits in terms of scalability and cost savings.",
  },
  {
    id: 8,
    name: "Isabella F.",
    designation: "Marketing Director, GreenWorld Eco Solutions",
    // image: require("../assets/images/testimonial/8.jpg"),
    review:
      "The website that CybertechieAzadSol built for us has made a world of difference for our online presence. They took the time to understand our brand, and the final product is both visually appealing and incredibly functional. We’ve seen increased traffic and conversions, and it’s become a vital tool for engaging with our customers.",
  },
  {
    id: 9,
    name: "David J.",
    designation: "Chief Data Officer, Global Insights",
    // image: require("../assets/images/testimonial/9.jpg"),
    review:
      "The data science services provided by CybertechieAzadSol have been a game-changer for us. Their team helped us analyze complex data, providing valuable insights that have improved our decision-making process. The predictive models they built have allowed us to better understand customer behavior and market trends, resulting in a more targeted business approach.",
  },
  {
    id: 10,
    name: "Natalie R.",
    designation: "Customer Experience Manager, QuickServe Solutions",
    // image: require("../assets/images/testimonial/10.jpg"),
    review:
      "Our customer support operations have been transformed by the NLP-powered solutions from CybertechieAzadSol. The chatbot they developed efficiently handles customer queries, allowing our team to focus on more complex issues. It’s been a major boost to our customer satisfaction and support efficiency.",
  },
  {
    id: 11,
    name: "Lucas D.",
    designation: "IT Director, TrueCloud Technologies",
    // image: require("../assets/images/testimonial/11.jpg"),
    review:
      "Migrating to the cloud seemed daunting, but CybertechieAzadSol made it incredibly easy. Their team handled everything, ensuring a smooth transition with minimal disruption to our daily operations. We’re now enjoying enhanced flexibility, scalability, and performance, and couldn’t be happier with the results.",
  },
  {
    id: 12,
    name: "Emily H.",
    designation: "Product Manager, ProGlo Innovations",
    // image: require("../assets/images/testimonial/12.jpg"),
    review:
      "The UI/UX design team at CybertechieAzadSol truly understood our vision and created an intuitive, beautiful design for our product. They paid close attention to every detail, ensuring that the user experience was seamless from start to finish. The feedback from our users has been overwhelmingly positive, and we’ve seen an increase in user engagement.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webIcon1,
    desc: "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webIcon2,
    desc: "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webIcon3,
    desc: " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webIcon4,
    desc: "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appIcon1,
    desc: "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appIcon2,
    desc: "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appIcon3,
    desc: "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appIcon4,
    desc: "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// portfolio links
export const portfolio = {
  appDevelopment: {
    icon: <AiFillAppstore size={30} />,
    list: [
      {
        id: 1,
        title: "Barbera",
        link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
      },
      {
        id: 2,
        title: "Rentop",
        link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
      },
      {
        id: 3,
        title: "Binfoclub",
        link: "https://play.google.com/store/apps/details?id=com.binfoclub.app&pcampaignid=web_share",
      },
      {
        id: 4,
        title: "Prayer Times",
        link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
      },
      {
        id: 5,
        title: "Evans Francis",
        link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
      },
      {
        id: 6,
        title: "HOD",
        link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
      },
      {
        id: 7,
        title: "AutoSnap",
        link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
      },
      {
        id: 8,
        title: "Klikomics",
        link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
      },
      {
        id: 9,
        title: "Ocxee",
        link: "https://apps.apple.com/in/app/ocxee/id1522856353",
      },
      {
        id: 10,
        title: "Dubai Travel Guide",
        link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
      },
    ],
  },
  webDevelopment: {
    icon: <FaGlobe size={30} />,
    list: [
      { id: 1, title: "Leaderbridge", link: "https://www.leaderbridge.com" },
      { id: 2, title: "Autopilot", link: "https://autopilot.io" },
      { id: 3, title: "Gigzio", link: "https://gigzio.com" },
      { id: 4, title: "FE Group", link: "https://fe.group" },
      { id: 5, title: "Vtalkz", link: "https://vtalkz.com" },
      { id: 6, title: "Think Realty", link: "https://thinkrealty.ae" },
      { id: 7, title: "Bayut", link: "https://www.bayut.com" },
      {
        id: 8,
        title: "5G High Speed Internet",
        link: "https://5ghighspeedinternet.co",
      },
      {
        id: 9,
        title: "Messina's Catering",
        link: "https://messinascatering.com",
      },
      {
        id: 10,
        title: "Cold Creek Capital",
        link: "https://www.coldcreekcap.com",
      },
    ],
  },
};

export const services = [
  {
    id: 1,
    title: "Blockchain Development",
    icon: icon1,
    desc: "Blockchain is revolutionizing industries with security and transparency. We create tailored blockchain solutions to help you harness this groundbreaking technology.",
    detailsPage: {
      banner: require("../assets/images/banners/blockchain.jpg"),
      img1: require("../assets/images/service-details/blockchain-1.jpg"),
      img2: require("../assets/images/service-details/blockchain-2.jpg"),
      img3: require("../assets/images/service-details/blockchain-3.jpg"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Transform Your Business with Blockchain
          </h2>
          <p>
            Blockchain technology is redefining industries through decentralized, secure, and transparent solutions. At <span class="font-bold text-secondary">CybertechieAzadSol</span>, we develop enterprise-grade blockchain applications that enhance security, streamline operations, and unlock new opportunities.
          </p>
          <p>
            Our expertise spans smart contracts, decentralized applications, and cryptocurrency solutions designed to future-proof your business.
          </p>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Why Choose Our Blockchain Solutions?
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Enhanced Security</h3>
              <p>
                Immutable ledger technology ensures tamper-proof record keeping and transaction security
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Transparent Operations</h3>
              <p>
                Create trust with stakeholders through decentralized, auditable systems
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Process Automation</h3>
              <p>
                Smart contracts that execute automatically when conditions are met
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">New Revenue Streams</h3>
              <p>
                Develop cryptocurrency solutions and tokenized assets for modern markets
              </p>
            </li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our Blockchain Expertise
          </h2>
          <ul class="space-y-5 list-disc pl-6">
            <li>
              <h3 class="font-bold mb-2">Custom Blockchain Development</h3>
              <p>
                Private, public, and hybrid blockchain solutions tailored to your needs
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Smart Contract Development</h3>
              <p>
                Self-executing contracts with Ethereum, Hyperledger, and other platforms
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">DApp Creation</h3>
              <p>
                Decentralized applications resistant to censorship and downtime
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Cryptocurrency Solutions</h3>
              <p>
                Secure digital currency systems and tokenization services
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Blockchain Consulting</h3>
              <p>
                Complete strategy development from proof-of-concept to implementation
              </p>
            </li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 2,
    title: "Game Development",
    icon: icon2,
    desc: "Create captivating gaming experiences across platforms with our full-cycle game development services combining creativity and technical excellence.",
    detailsPage: {
      banner: require("../assets/images/banners/game-dev.jpg"),
      img1: require("../assets/images/service-details/game-1.jpg"),
      img2: require("../assets/images/service-details/game-2.jpg"),
      img3: require("../assets/images/service-details/game-3.jpg"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Crafting Immersive Gaming Experiences
          </h2>
          <p>
            In the $200+ billion gaming industry, standing out requires both technical excellence and creative vision. At <span class="font-bold text-secondary">CybertechieAzadSol</span>, we develop games that captivate players across mobile, console, PC, and emerging platforms.
          </p>
          <p>
            From concept to launch, we combine cutting-edge technology with engaging storytelling to create memorable gaming experiences.
          </p>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Why Partner with Us for Game Development?
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Full-Cycle Development</h3>
              <p>
                End-to-end services from concept art to post-launch support
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Cross-Platform Expertise</h3>
              <p>
                Develop once, deploy everywhere with optimized performance
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Advanced Technologies</h3>
              <p>
                Integration of AR/VR, physics engines, and AI-powered NPCs
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Player-Centric Design</h3>
              <p>
                Data-driven UX optimization for maximum engagement
              </p>
            </li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our Game Development Services
          </h2>
          <ul class="space-y-5 list-disc pl-6">
            <li>
              <h3 class="font-bold mb-2">Mobile Game Development</h3>
              <p>
                iOS/Android games with addictive gameplay mechanics
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">PC & Console Games</h3>
              <p>
                High-performance games with stunning graphics
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">AR/VR Experiences</h3>
              <p>
                Immersive mixed reality games using latest headsets
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Multiplayer Systems</h3>
              <p>
                Real-time multiplayer architecture and matchmaking
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Game Porting</h3>
              <p>
                Cross-platform adaptation and optimization
              </p>
            </li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 3,
    title: "Robotic Process Automation",
    icon: icon3,
    desc: "Transform business operations with intelligent automation solutions that boost efficiency and reduce costs through RPA implementation.",
    detailsPage: {
      banner: require("../assets/images/banners/rpa.jpg"),
      img1: require("../assets/images/service-details/rpa-1.jpg"),
      img2: require("../assets/images/service-details/rpa-2.jpg"),
      img3: require("../assets/images/service-details/rpa-3.jpg"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Intelligent Automation for Modern Businesses
          </h2>
          <p>
            Robotic Process Automation (RPA) is revolutionizing enterprise operations by automating repetitive tasks with digital workers. At <span class="font-bold text-secondary">CybertechieAzadSol</span>, we implement RPA solutions that deliver:
          </p>
          <ul class="list-disc pl-6">
            <li>70% reduction in process handling time</li>
            <li>60% decrease in operational costs</li>
            <li>99.9% error-free execution</li>
          </ul>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            RPA Implementation Benefits
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">24/7 Operations</h3>
              <p>
                Digital workers that never sleep, maintaining constant productivity
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Process Accuracy</h3>
              <p>
                Eliminate human error in data entry and calculations
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Scalable Workforce</h3>
              <p>
                Instantly scale operations up/down without HR overhead
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Fast ROI</h3>
              <p>
                Typical payback period under 6 months
              </p>
            </li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our RPA Solutions
          </h2>
          <ul class="space-y-5 list-disc pl-6">
            <li>
              <h3 class="font-bold mb-2">Process Automation</h3>
              <p>
                Automate invoice processing, data entry, and report generation
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Cognitive Automation</h3>
              <p>
                AI-powered bots handling unstructured data and decisions
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">ERP Integration</h3>
              <p>
                Connect RPA with SAP, Oracle, and other enterprise systems
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Compliance Bots</h3>
              <p>
                Automated regulatory reporting and audit trails
              </p>
            </li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 4,
    title: "Artificial Intelligence Development",
    icon: icon4,
    desc: "Transform your business with custom AI solutions including machine learning, NLP, and computer vision that drive intelligent decision-making.",
    detailsPage: {
      banner: require("../assets/images/banners/ai-development.jpg"),
      img1: require("../assets/images/service-details/ai-1.jpg"),
      img2: require("../assets/images/service-details/ai-2.jpg"),
      img3: require("../assets/images/service-details/ai-3.jpg"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            AI-Powered Business Transformation
          </h2>
          <p>
            Artificial Intelligence is revolutionizing industries by enabling data-driven decisions, automating complex processes, and creating intelligent customer experiences. At <span class="font-bold text-secondary">CybertechieAzadSol</span>, we develop tailored AI solutions that deliver measurable business impact.
          </p>
          <p>
            Our AI systems help companies reduce costs by 30-50% while improving accuracy and scalability across operations.
          </p>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Key Benefits of Our AI Solutions
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Process Automation</h3>
              <p>
                Automate complex workflows with cognitive automation that learns and improves
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Predictive Insights</h3>
              <p>
                Forecast trends, customer behavior, and operational metrics with 90%+ accuracy
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Enhanced CX</h3>
              <p>
                24/7 intelligent chatbots and recommendation engines that boost engagement
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Risk Reduction</h3>
              <p>
                AI-powered fraud detection and anomaly identification in real-time
              </p>
            </li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our AI Development Expertise
          </h2>
          <ul class="space-y-5 list-disc pl-6">
            <li>
              <h3 class="font-bold mb-2">Machine Learning</h3>
              <p>
                Supervised, unsupervised, and reinforcement learning models
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Natural Language Processing</h3>
              <p>
                Sentiment analysis, text classification, and language generation
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Computer Vision</h3>
              <p>
                Image recognition, object detection, and video analytics
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Predictive Analytics</h3>
              <p>
                Forecasting models for sales, inventory, and customer churn
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">AI Strategy</h3>
              <p>
                Roadmap development and implementation planning
              </p>
            </li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 5,
    title: "Machine Learning Services",
    icon: icon5,
    desc: "Unlock the power of your data with custom machine learning models that provide actionable insights and automate decision-making.",
    detailsPage: {
      banner: require("../assets/images/banners/ml-services.jpg"),
      img1: require("../assets/images/service-details/ml-1.jpg"),
      img2: require("../assets/images/service-details/ml-2.jpg"),
      img3: require("../assets/images/service-details/ml-3.jpg"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Data-Driven Decision Making with ML
          </h2>
          <p>
            Machine learning transforms raw data into competitive advantage. At <span class="font-bold text-secondary">CybertechieAzadSol</span>, we build production-ready ML models that help businesses predict outcomes, automate decisions, and discover hidden patterns.
          </p>
          <p>
            Our models achieve 95%+ accuracy in production environments through rigorous testing and optimization.
          </p>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Machine Learning Business Value
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Revenue Growth</h3>
              <p>
                Recommendation engines that increase sales by 20-35%
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Cost Reduction</h3>
              <p>
                Predictive maintenance cutting equipment downtime by 40%
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Risk Management</h3>
              <p>
                Fraud detection systems with 99%+ accuracy
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Customer Insights</h3>
              <p>
                Churn prediction and customer segmentation models
              </p>
            </li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our ML Service Offerings
          </h2>
          <ul class="space-y-5 list-disc pl-6">
            <li>
              <h3 class="font-bold mb-2">Predictive Modeling</h3>
              <p>
                Regression, classification, and time series forecasting
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Deep Learning</h3>
              <p>
                Neural networks for complex pattern recognition
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Feature Engineering</h3>
              <p>
                Data transformation and dimensionality reduction
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Model Deployment</h3>
              <p>
                Production-grade ML pipelines and APIs
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">MLOps</h3>
              <p>
                Continuous training and monitoring systems
              </p>
            </li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 6,
    title: "Cloud Computing Services",
    icon: icon6,
    desc: "Modernize your infrastructure with secure, scalable cloud solutions that enhance agility and reduce IT overhead.",
    detailsPage: {
      banner: require("../assets/images/banners/cloud-computing.jpg"),
      img1: require("../assets/images/service-details/cloud-1.jpg"),
      img2: require("../assets/images/service-details/cloud-2.jpg"),
      img3: require("../assets/images/service-details/cloud-3.jpg"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Cloud Transformation for Digital Business
          </h2>
          <p>
            Cloud computing delivers unprecedented flexibility, scalability, and cost efficiency. At <span class="font-bold text-secondary">CybertechieAzadSol</span>, we architect cloud-native solutions across AWS, Azure, and GCP that help businesses:
          </p>
          <ul class="list-disc pl-6">
            <li>Reduce infrastructure costs by 40-60%</li>
            <li>Improve deployment speed by 10x</li>
            <li>Ensure 99.99% availability</li>
          </ul>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Cloud Adoption Benefits
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Elastic Scalability</h3>
              <p>
                Instantly scale resources to meet demand fluctuations
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Cost Optimization</h3>
              <p>
                Pay-as-you-go models with reserved instance discounts
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Global Reach</h3>
              <p>
                Deploy applications closer to users worldwide
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Security</h3>
              <p>
                Enterprise-grade security with continuous monitoring
              </p>
            </li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our Cloud Services
          </h2>
          <ul class="space-y-5 list-disc pl-6">
            <li>
              <h3 class="font-bold mb-2">Cloud Migration</h3>
              <p>
                Lift-and-shift, replatforming, and refactoring strategies
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Kubernetes Orchestration</h3>
              <p>
                Containerized application management at scale
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Serverless Architecture</h3>
              <p>
                Event-driven computing with zero server management
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Cloud Security</h3>
              <p>
                Identity management, encryption, and compliance
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">FinOps</h3>
              <p>
                Cloud cost monitoring and optimization
              </p>
            </li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 7,
    title: "Web Development",
    icon: icon7,
    desc: "Build high-performance websites and web applications that deliver exceptional user experiences and drive business results.",
    detailsPage: {
      banner: require("../assets/images/banners/web-dev.jpg"),
      img1: require("../assets/images/service-details/web-1.jpg"),
      img2: require("../assets/images/service-details/web-2.jpg"),
      img3: require("../assets/images/service-details/web-3.jpg"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Modern Web Solutions for Digital Growth
          </h2>
          <p>
            Your website is the digital face of your business. At <span class="font-bold text-secondary">CybertechieAzadSol</span>, we craft responsive, high-converting websites that combine stunning design with cutting-edge technology.
          </p>
          <p>
            Our web solutions deliver 3x faster load times and 40% higher conversion rates than industry averages.
          </p>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Why Our Web Development Stands Out
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Mobile-First Design</h3>
              <p>
                Responsive layouts that work flawlessly across all devices
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Performance Optimized</h3>
              <p>
                Lighthouse scores of 90+ for speed, accessibility, and SEO
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Secure by Default</h3>
              <p>
                Built with OWASP security best practices
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Scalable Architecture</h3>
              <p>
                Modular codebase that grows with your business
              </p>
            </li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our Web Development Services
          </h2>
          <ul class="space-y-5 list-disc pl-6">
            <li>
              <h3 class="font-bold mb-2">Custom Web Applications</h3>
              <p>
                Tailored solutions for complex business needs
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">E-Commerce Platforms</h3>
              <p>
                Shopify, WooCommerce, and custom storefronts
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Progressive Web Apps</h3>
              <p>
                App-like experiences without app store constraints
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Headless CMS</h3>
              <p>
                Content management with modern frontend frameworks
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Web Performance Audit</h3>
              <p>
                Comprehensive analysis and optimization
              </p>
            </li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 8,
    title: "Data Science Services",
    icon: icon8,
    desc: "Leverage data-driven insights to boost decision-making, optimize operations, and unlock new business opportunities.",
    detailsPage: {
      banner: require("../assets/images/banners/data-science.jpg"),
      img1: require("../assets/images/service-details/data-1.jpg"),
      img2: require("../assets/images/service-details/data-2.jpg"),
      img3: require("../assets/images/service-details/data-3.jpg"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Unlock the Power of Your Data
          </h2>
          <p>
            At <span class="font-bold text-secondary">CybertechieAzadSol</span>, we transform raw data into strategic insights using advanced analytics and machine learning. Our solutions help you forecast trends, identify patterns, and make informed decisions with confidence.
          </p>
          <ul class="list-disc pl-6">
            <li>Boost operational efficiency by up to 35%</li>
            <li>Real-time dashboards for key metrics</li>
            <li>Predictive analytics for smarter planning</li>
          </ul>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Data Science Capabilities
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li><h3 class="font-bold mb-2">Data Mining</h3><p>Extract actionable insights from complex data sets</p></li>
            <li><h3 class="font-bold mb-2">Predictive Modeling</h3><p>Anticipate outcomes and trends with high accuracy</p></li>
            <li><h3 class="font-bold mb-2">Data Visualization</h3><p>Interactive reports for better data comprehension</p></li>
            <li><h3 class="font-bold mb-2">Machine Learning</h3><p>Automate decisions with supervised and unsupervised learning</p></li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our Data Science Services
          </h2>
          <ul class="space-y-5 list-disc pl-6">
            <li><h3 class="font-bold mb-2">Exploratory Data Analysis (EDA)</h3><p>Uncover trends, patterns, and anomalies</p></li>
            <li><h3 class="font-bold mb-2">Model Development</h3><p>Build scalable models for classification, regression, and clustering</p></li>
            <li><h3 class="font-bold mb-2">Business Intelligence</h3><p>Drive growth through smart analytics and reporting</p></li>
            <li><h3 class="font-bold mb-2">Big Data Engineering</h3><p>Architect data lakes and pipelines for large-scale processing</p></li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 9,
    title: "Natural Language Processing (NLP)",
    icon: icon9,
    desc: "Empower your applications to understand, interpret, and generate human language with AI-driven NLP solutions.",
    detailsPage: {
      banner: require("../assets/images/banners/nlp.jpg"),
      img1: require("../assets/images/service-details/nlp-1.jpg"),
      img2: require("../assets/images/service-details/nlp-2.jpg"),
      img3: require("../assets/images/service-details/nlp-3.jpg"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Language Intelligence for Smarter Systems
          </h2>
          <p>
            At <span class="font-bold text-secondary">CybertechieAzadSol</span>, our NLP solutions enhance your ability to interact with and analyze human language. We integrate contextual understanding, sentiment analysis, and language generation to power smarter interfaces.
          </p>
          <ul class="list-disc pl-6">
            <li>Chatbots with natural dialogue flow</li>
            <li>Sentiment analysis for brand monitoring</li>
            <li>Automated language translation and summarization</li>
          </ul>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            NLP Capabilities
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li><h3 class="font-bold mb-2">Text Classification</h3><p>Tag and organize content with precision</p></li>
            <li><h3 class="font-bold mb-2">Named Entity Recognition (NER)</h3><p>Identify people, locations, and key terms</p></li>
            <li><h3 class="font-bold mb-2">Text Generation</h3><p>AI-written summaries, replies, and articles</p></li>
            <li><h3 class="font-bold mb-2">Language Translation</h3><p>Support for multilingual customer engagement</p></li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our NLP Services
          </h2>
          <ul class="space-y-5 list-disc pl-6">
            <li><h3 class="font-bold mb-2">Conversational AI</h3><p>Voice and text-based virtual assistants</p></li>
            <li><h3 class="font-bold mb-2">Speech-to-Text & Text-to-Speech</h3><p>Enable hands-free communication</p></li>
            <li><h3 class="font-bold mb-2">Content Moderation</h3><p>AI-powered filtering of user-generated content</p></li>
            <li><h3 class="font-bold mb-2">Document Intelligence</h3><p>Extract data from PDFs, forms, and contracts</p></li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 10,
    title: "Cloud Migration Services",
    icon: icon10,
    desc: "Seamlessly transition from legacy systems to the cloud with minimal downtime and maximum efficiency.",
    detailsPage: {
      banner: require("../assets/images/banners/cloud-migration.jpg"),
      img1: require("../assets/images/service-details/migrate-1.jpg"),
      img2: require("../assets/images/service-details/migrate-2.jpg"),
      img3: require("../assets/images/service-details/migrate-3.jpg"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            A Smarter Path to the Cloud
          </h2>
          <p>
            <span class="font-bold text-secondary">CybertechieAzadSol</span> helps businesses migrate workloads to the cloud with robust planning, zero data loss, and minimal disruption. We tailor migration strategies to align with your business goals.
          </p>
          <ul class="list-disc pl-6">
            <li>99.99% uptime during migration</li>
            <li>30% faster migration timelines</li>
            <li>Security-first approach</li>
          </ul>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Why Migrate to the Cloud?
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li><h3 class="font-bold mb-2">Scalability</h3><p>Scale up or down with demand</p></li>
            <li><h3 class="font-bold mb-2">Cost Savings</h3><p>Lower operational costs with optimized cloud usage</p></li>
            <li><h3 class="font-bold mb-2">Business Continuity</h3><p>Disaster recovery and data backups made easier</p></li>
            <li><h3 class="font-bold mb-2">Flexibility</h3><p>Access your systems from anywhere, anytime</p></li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our Cloud Migration Services
          </h2>
          <ul class="space-y-5 list-disc pl-6">
            <li><h3 class="font-bold mb-2">Infrastructure Assessment</h3><p>Evaluate current environment and define roadmap</p></li>
            <li><h3 class="font-bold mb-2">Migration Strategy</h3><p>Lift-and-shift, rehost, or replatform</p></li>
            <li><h3 class="font-bold mb-2">Data Migration</h3><p>Move databases and storage securely</p></li>
            <li><h3 class="font-bold mb-2">Testing & Validation</h3><p>Ensure system functionality and performance post-migration</p></li>
            <li><h3 class="font-bold mb-2">Post-Migration Support</h3><p>Monitoring, optimization, and scaling</p></li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 11,
    title: "UI/UX Design",
    icon: icon11,
    desc: "Create intuitive, user-centered interfaces that elevate user satisfaction and boost engagement.",
    detailsPage: {
      banner: require("../assets/images/banners/uiux.jpg"),
      img1: require("../assets/images/service-details/uiux-1.jpg"),
      img2: require("../assets/images/service-details/uiux-2.jpg"),
      img3: require("../assets/images/service-details/uiux-3.jpg"),
      firstSection: `<div class="space-y-6">
      <div class="space-y-4">
        <h2 class="text-xl font-bold">
          Design That Delivers Delight
        </h2>
        <p>
          <span class="font-bold text-secondary">CybertechieAzadSol</span> designs digital experiences that are beautiful, intuitive, and conversion-focused. From research to prototypes, we craft every touchpoint with user empathy and brand alignment.
        </p>
        <ul class="list-disc pl-6">
          <li>30% increase in user retention</li>
          <li>Reduced bounce rates through better usability</li>
          <li>Design systems for consistent branding</li>
        </ul>
      </div>
    </div>`,
      secondSection: `<div class="py-6">
      <div class="space-y-6">
        <h2 class="text-xl font-bold">
          UI/UX Principles We Follow
        </h2>
        <ul class="space-y-5 list-decimal pl-6">
          <li><h3 class="font-bold mb-2">User-Centered Design</h3><p>Empathy-driven experiences tailored to real needs</p></li>
          <li><h3 class="font-bold mb-2">Visual Hierarchy</h3><p>Guide user attention with layout and typography</p></li>
          <li><h3 class="font-bold mb-2">Consistency</h3><p>Seamless experience across all pages and devices</p></li>
          <li><h3 class="font-bold mb-2">Accessibility</h3><p>Inclusive design for all users</p></li>
        </ul>
      </div>
    </div>`,
      thirdSection: `<div class="py-6">
      <div class="space-y-6">
        <h2 class="text-xl font-bold">
          Our UI/UX Services
        </h2>
        <ul class="space-y-5 list-disc pl-6">
          <li><h3 class="font-bold mb-2">UX Research</h3><p>User personas, journey mapping, and usability testing</p></li>
          <li><h3 class="font-bold mb-2">Wireframing & Prototyping</h3><p>Low- and high-fidelity designs using modern tools</p></li>
          <li><h3 class="font-bold mb-2">UI Design</h3><p>Pixel-perfect interfaces aligned with your brand</p></li>
          <li><h3 class="font-bold mb-2">Design Systems</h3><p>Reusable components for fast, scalable design</p></li>
          <li><h3 class="font-bold mb-2">Interaction Design</h3><p>Micro-interactions that guide and delight users</p></li>
        </ul>
      </div>
    </div>`,
    },
  },
];
