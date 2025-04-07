import logo from "../assets/logo/logo.jpeg";

// services icons (website)
import { ReactComponent as icon1 } from "../assets/svg/services/AI Development.svg";
import { ReactComponent as icon2 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as icon3 } from "../assets/svg/services/App Development.svg";
import { ReactComponent as icon4 } from "../assets/svg/services/Hybrid App Development.svg";
import { ReactComponent as icon5 } from "../assets/svg/services/IT consultancy and strategy.svg";
import { ReactComponent as icon6 } from "../assets/svg/services/IT Infrastructure.svg";

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
  email: "xyz@example.com",
  phone: "+91-7809896339",
  phone2: "+91-9596864769",
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
      "We were looking for a way to integrate blockchain technology into our business, and the team at [Your Company Name] delivered an exceptional solution. Their expertise in developing a secure and decentralized system has truly transformed our business operations. We’ve seen a marked improvement in transparency and efficiency. Highly recommend their services!",
  },
  {
    id: 2,
    name: "Laura T.",
    designation: "Director of Game Development, FunTech Studios",
    // image: require("../assets/images/testimonial/2.jpg"),
    review:
      "We approached [Your Company Name] with an idea for a mobile game, and they exceeded all our expectations. The team combined creative design with technical skill to build an engaging game that’s been well-received by users. The final product is not only visually stunning but also provides an immersive and enjoyable experience.",
  },
  {
    id: 3,
    name: "Ryan K.",
    designation: "Founder, MarketConnect",
    // image: require("../assets/images/testimonial/3.jpg"),
    review:
      "[Your Company Name] turned our app concept into a fully functional and user-friendly product. Their team was collaborative and efficient, always ensuring our ideas were integrated into the app design. Since launching, we've seen a significant boost in user engagement and customer satisfaction. It’s been a pleasure working with them!",
  },
  {
    id: 4,
    name: "Sarah W.",
    designation: "Chief Operating Officer, GreenTech Solutions",
    // image: require("../assets/images/testimonial/4.jpg"),
    review:
      "Integrating Robotic Process Automation (RPA) into our business processes has been a game-changer, thanks to [Your Company Name]. Their automation solutions have streamlined operations, reduced manual errors, and saved us a tremendous amount of time. The impact on our productivity has been immediate and impressive.",
  },
  {
    id: 5,
    name: "James L.",
    designation: "VP of Operations, FinScope Analytics",
    // image: require("../assets/images/testimonial/5.jpg"),
    review:
      "The AI system that [Your Company Name] developed for us has taken our decision-making to the next level. Their team designed a solution that analyzes vast datasets and provides valuable insights in real-time, helping us improve operational efficiency and reduce costs. The results speak for themselves.",
  },
  {
    id: 6,
    name: "Anna P.",
    designation: "Head of Data Science, HealthPredict",
    // image: require("../assets/images/testimonial/6.jpg"),
    review:
      "Working with [Your Company Name] on our machine learning project was an excellent experience. They helped us create a predictive model that significantly improved our forecasting abilities. The insights we've gained from the model have had a profound impact on our business strategy. Their team was always responsive and ready to offer guidance when needed.",
  },
  {
    id: 7,
    name: "Robert M.",
    designation: "CTO, CloudVantage",
    // image: require("../assets/images/testimonial/7.jpg"),
    review:
      "We turned to [Your Company Name] to help us move our infrastructure to the cloud, and the process couldn’t have gone more smoothly. Their team not only helped us migrate efficiently but also optimized our cloud environment for better performance and security. We’ve seen immediate benefits in terms of scalability and cost savings.",
  },
  {
    id: 8,
    name: "Isabella F.",
    designation: "Marketing Director, GreenWorld Eco Solutions",
    // image: require("../assets/images/testimonial/8.jpg"),
    review:
      "The website that [Your Company Name] built for us has made a world of difference for our online presence. They took the time to understand our brand, and the final product is both visually appealing and incredibly functional. We’ve seen increased traffic and conversions, and it’s become a vital tool for engaging with our customers.",
  },
  {
    id: 9,
    name: "David J.",
    designation: "Chief Data Officer, Global Insights",
    // image: require("../assets/images/testimonial/9.jpg"),
    review:
      "The data science services provided by [Your Company Name] have been a game-changer for us. Their team helped us analyze complex data, providing valuable insights that have improved our decision-making process. The predictive models they built have allowed us to better understand customer behavior and market trends, resulting in a more targeted business approach.",
  },
  {
    id: 10,
    name: "Natalie R.",
    designation: "Customer Experience Manager, QuickServe Solutions",
    // image: require("../assets/images/testimonial/10.jpg"),
    review:
      "Our customer support operations have been transformed by the NLP-powered solutions from [Your Company Name]. The chatbot they developed efficiently handles customer queries, allowing our team to focus on more complex issues. It’s been a major boost to our customer satisfaction and support efficiency.",
  },
  {
    id: 11,
    name: "Lucas D.",
    designation: "IT Director, TrueCloud Technologies",
    // image: require("../assets/images/testimonial/11.jpg"),
    review:
      "Migrating to the cloud seemed daunting, but [Your Company Name] made it incredibly easy. Their team handled everything, ensuring a smooth transition with minimal disruption to our daily operations. We’re now enjoying enhanced flexibility, scalability, and performance, and couldn’t be happier with the results.",
  },
  {
    id: 12,
    name: "Emily H.",
    designation: "Product Manager, ProGlo Innovations",
    // image: require("../assets/images/testimonial/12.jpg"),
    review:
      "The UI/UX design team at [Your Company Name] truly understood our vision and created an intuitive, beautiful design for our product. They paid close attention to every detail, ensuring that the user experience was seamless from start to finish. The feedback from our users has been overwhelmingly positive, and we’ve seen an increase in user engagement.",
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

// complete service and details
// export const services = [
//   {
//     id: 1,
//     title: "AI Development",
//     icon: icon1,
//     desc: "Transform your business with AI Company's tailored AI development solutions. From automating processes to delivering actionable insights, we help you innovate, scale, and stay ahead in a dynamic digital world.",
//     detailsPage: {
//       banner: require("../assets/images/banners/ai-development.webp"),
//       img1: require("../assets/images/service-details/ai-1.jpeg"),
//       img2: require("../assets/images/service-details/ai-2.webp"),
//       img3: require("../assets/images/service-details/ai-3.jpeg"),
//       firstSection: `
//         <div class="space-y-6">
//    <div class="space-y-4">
//     <h2 class="text-xl font-bold">
//       Revolutionizing Business with AI
//     </h2>
//     <p class="">
//       In today’s competitive landscape, Artificial Intelligence (AI) has become a transformative force, empowering businesses to streamline operations, enhance customer engagement, and make data-driven decisions.
//     </p>
//     <p class="">
//       At <span class="font-bold text-secondary">AI Company</span>, we specialize in crafting tailored AI solutions that enable organizations to unlock the full potential of AI and stay ahead of the curve.
//     </p>
//    </div>
//   </div>`,

//       secondSection: `
//   <div class="py-6">
//   <div class="space-y-6">
//     <h2 class="text-xl font-bold">
//       Why Choose AI for Your Business?
//     </h2>
//     <ul class="space-y-5 list-decimal pl-6">
//       <li>
//         <h3 class="font-bold mb-2">Enhanced Efficiency</h3>
//         <p class="">
//           Automate repetitive tasks and optimize workflows to boost productivity and free your team for strategic initiatives.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">Data-Driven Decisions</h3>
//         <p class="">
//           Leverage the power of AI to process vast amounts of data, uncover actionable insights, and make precise, informed decisions.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">Personalized Customer Experiences</h3>
//         <p class="">
//           Delight your customers with AI-powered tools like chatbots and recommendation systems, delivering tailored experiences that foster loyalty.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">Cost Optimization</h3>
//         <p class="">
//           Save on operational costs with AI-driven solutions such as predictive maintenance, inventory management, and process automation.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">Innovation and Scalability</h3>
//         <p class="">
//           Open the door to new opportunities and ensure your business adapts seamlessly as markets evolve.
//         </p>
//       </li>
//     </ul>
//   </div>
// </div>
// `,
//       thirdSection: `<div class="py-6">
//   <div class="space-y-6">
//     <h2 class="text-xl font-bold">
//       Our Expertise in AI Development
//     </h2>
//     <p>
//       At AI Company, we understand that every business is unique. That’s why we offer customized AI solutions designed to meet your specific needs and goals.
//     </p>
//     <ul class="space-y-5 list-disc pl-6">
//       <li>
//         <h3 class="font-bold mb-2">Machine Learning Models</h3>
//         <p>
//           Build intelligent systems that continuously learn and improve from your data.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">Natural Language Processing (NLP)</h3>
//         <p>
//           Create tools that understand and respond to human language, enhancing communication and efficiency.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">Computer Vision</h3>
//         <p>
//           Harness AI to analyze and interpret visual data for applications in healthcare, security, retail, and more.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">Predictive Analytics</h3>
//         <p>
//           Anticipate trends and outcomes with data-driven forecasting tools.
//         </p>
//       </li>
//     </ul>
//   </div>
// </div>
// `,
//     },
//   },
//   {
//     id: 2,
//     title: "Web Development",
//     icon: icon2,
//     desc: "Elevate your online presence with AI Company’s cutting-edge web development services. We craft responsive, user-centric websites that drive engagement, enhance functionality, and fuel business growth.",
//     detailsPage: {
//       banner: require("../assets/images/banners/web-development.webp"),
//       img1: require("../assets/images/service-details/web-dev-1.webp"),
//       img2: require("../assets/images/service-details/web-dev-2.webp"),
//       img3: require("../assets/images/service-details/web-dev-3.webp"),
//       firstSection: `<div class="space-y-6">
//   <div class="space-y-4">
//     <h2 class="text-xl font-bold">
//       Building Exceptional Websites for Your Business
//     </h2>
//     <p>
//       In today’s digital-first world, a well-crafted website is essential for connecting with your audience and driving business success.
//     </p>
//     <p>
//       At <span class="font-bold text-secondary">AI Company</span>, we specialize in creating custom, responsive websites that deliver a seamless user experience, enhance functionality, and fuel your growth.
//     </p>
//   </div>
// </div>
// `,
//       secondSection: `<div class="py-6">
//   <div class="space-y-6">
//     <h2 class="text-xl font-bold">
//       Why Choose AI Company for Web Development?
//     </h2>
//     <ul class="space-y-5 list-decimal pl-6">
//       <li>
//         <h3 class="font-bold mb-2">Tailored Solutions</h3>
//         <p>
//           Every business has unique needs. We design websites that align with your goals, ensuring a personalized approach that sets you apart from the competition.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">User-Centric Design</h3>
//         <p>
//           Our focus is on creating intuitive and visually compelling websites that engage visitors and turn them into loyal customers.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">Responsive & Scalable</h3>
//         <p>
//           With mobile traffic on the rise, we ensure your website performs flawlessly on any device, scaling to grow with your business.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">SEO-Optimized</h3>
//         <p>
//           A beautiful website is only effective if people can find it. Our development process integrates SEO best practices to help your site rank higher on search engines and reach your target audience.
//         </p>
//       </li>
//     </ul>
//   </div>
// </div>
// `,

//       thirdSection: `<div class="py-6">
//   <div class="space-y-6">
//     <h2 class="text-xl font-bold">
//       Our Web Development Process
//     </h2>
//     <ul class="space-y-5 list-decimal pl-6">
//       <li>
//         <h3 class="font-bold mb-2">Consultation</h3>
//         <p>
//           We begin by understanding your business, objectives, and vision.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">Planning</h3>
//         <p>
//           We create a roadmap and select the best technologies to bring your ideas to life.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">Design & Development</h3>
//         <p>
//           Our skilled developers build a high-performance website with seamless functionality.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">Testing</h3>
//         <p>
//           We rigorously test to ensure your website is bug-free and user-friendly.
//         </p>
//       </li>
//       <li>
//         <h3 class="font-bold mb-2">Launch & Support</h3>
//         <p>
//           After launch, we provide continuous support to keep your website running smoothly and up-to-date.
//         </p>
//       </li>
//     </ul>
//   </div>
// </div>
// `,
//     },
//   },
//   {
//     id: 3,
//     title: "App Development",
//     icon: icon3,
//     desc: "Take your business to the next level with AI Company’s innovative app development services. We design and develop mobile applications that deliver seamless experiences, enhance user engagement, and drive growth.",
//     detailsPage: {
//       banner: require("../assets/images/banners/app-development.webp"),
//       img1: require("../assets/images/service-details/app-dev-1.webp"),
//       img2: require("../assets/images/service-details/app-dev-2.webp"),
//       img3: require("../assets/images/service-details/app-dev-3.webp"),
//       firstSection: `<div class="space-y-6">
//         <div class="space-y-4">
//           <h2 class="text-xl font-bold">
//             Creating Impactful Mobile Apps for Your Business
//           </h2>
//           <p>
//             In the mobile-first world, having an app that resonates with your audience is crucial for business success.
//           </p>
//           <p>
//             At <span class="font-bold text-secondary">AI Company</span>, we specialize in developing high-quality mobile applications that provide an exceptional user experience, enhance functionality, and grow your business.
//           </p>
//         </div>
//       </div>
//       `,
//       secondSection: `<div class="py-6">
//         <div class="space-y-6">
//           <h2 class="text-xl font-bold">
//             Why Choose AI Company for App Development?
//           </h2>
//           <ul class="space-y-5 list-decimal pl-6">
//             <li>
//               <h3 class="font-bold mb-2">Custom Solutions</h3>
//               <p>
//                 We understand that each business is unique, and we create tailor-made apps that align with your business objectives.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">Cross-Platform Compatibility</h3>
//               <p>
//                 Our apps are designed to perform seamlessly across multiple platforms, ensuring a consistent experience for all users.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">User-Centered Design</h3>
//               <p>
//                 We focus on intuitive design and user engagement, ensuring your app offers a delightful experience for users.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">Scalability & Security</h3>
//               <p>
//                 Our apps are built to scale with your business and are secured with the latest technologies to protect your data.
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>
//       `,
//       thirdSection: `<div class="py-6">
//         <div class="space-y-6">
//           <h2 class="text-xl font-bold">
//             Our App Development Process
//           </h2>
//           <ul class="space-y-5 list-decimal pl-6">
//             <li>
//               <h3 class="font-bold mb-2">Consultation</h3>
//               <p>
//                 We start by understanding your business goals and the vision for your app.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">Planning</h3>
//               <p>
//                 We outline the features and functionalities, and select the best approach for development.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">Design & Development</h3>
//               <p>
//                 Our team develops a robust and scalable app with an exceptional user interface.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">Testing</h3>
//               <p>
//                 We ensure that the app is bug-free, reliable, and performs optimally across all devices.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">Launch & Support</h3>
//               <p>
//                 Once launched, we provide ongoing support and maintenance to ensure your app remains up-to-date and functional.
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>
//       `,
//     },
//   },
//   {
//     id: 4,
//     title: "Software Development",
//     icon: icon4,
//     desc: "Empower your business with AI Company’s custom software development solutions. We design scalable, high-performance software tailored to streamline operations and drive growth.",
//     detailsPage: {
//       banner: require("../assets/images/banners/software-development.webp"),
//       img1: require("../assets/images/service-details/software-dev-1.webp"),
//       img2: require("../assets/images/service-details/software-dev-2.webp"),
//       img3: require("../assets/images/service-details/software-dev-3.webp"),
//       firstSection: `<div class="space-y-6">
//         <div class="space-y-4">
//           <h2 class="text-xl font-bold">
//             Building Scalable Software for Your Business
//           </h2>
//           <p>
//             In today’s fast-paced digital world, businesses require tailored software solutions that drive efficiency, productivity, and growth.
//           </p>
//           <p>
//             At <span class="font-bold text-secondary">AI Company</span>, we specialize in developing high-performance, scalable software solutions that are custom-built to meet your unique business needs and challenges.
//           </p>
//         </div>
//       </div>`,
//       secondSection: `<div class="py-6">
//         <div class="space-y-6">
//           <h2 class="text-xl font-bold">
//             Why Choose AI Company for Software Development?
//           </h2>
//           <ul class="space-y-5 list-decimal pl-6">
//             <li>
//               <h3 class="font-bold mb-2">Custom Solutions</h3>
//               <p>
//                 We design software that aligns with your specific business needs, providing you with tools that optimize operations and enhance productivity.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">Scalable Architecture</h3>
//               <p>
//                 Our solutions are built with scalability in mind, allowing your software to grow and adapt as your business evolves.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">Security & Reliability</h3>
//               <p>
//                 We prioritize security, ensuring that your software is protected against vulnerabilities while delivering reliable performance.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">End-to-End Development</h3>
//               <p>
//                 From planning and design to deployment and maintenance, we provide comprehensive software development services that cover all phases of the process.
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>`,
//       thirdSection: `<div class="py-6">
//         <div class="space-y-6">
//           <h2 class="text-xl font-bold">
//             Our Expertise in Software Development
//           </h2>
//           <p>
//             At AI Company, we combine technical expertise with business acumen to deliver software solutions that drive growth and efficiency.
//           </p>
//           <ul class="space-y-5 list-disc pl-6">
//             <li>
//               <h3 class="font-bold mb-2">Enterprise Software Solutions</h3>
//               <p>
//                 We create robust and scalable enterprise software systems designed to improve business processes and operations.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">Custom Web & Mobile Applications</h3>
//               <p>
//                 Develop personalized web and mobile applications tailored to your business goals and user needs.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">Cloud-Based Software</h3>
//               <p>
//                 Leverage cloud computing to build flexible and efficient software solutions that can scale with your business.
//               </p>
//             </li>
//             <li>
//               <h3 class="font-bold mb-2">Software Integration</h3>
//               <p>
//                 Integrate disparate systems and data sources into a unified software solution, ensuring seamless workflow and communication.
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>`,
//     },
//   },
//   {
//     id: 5,
//     title: "IT Consultancy and Strategy",
//     icon: icon5,
//     desc: "Navigate the digital landscape with confidence using AI Company’s IT consultancy and strategy services. We provide expert guidance to align technology with your business goals and drive sustainable growth.",
//     detailsPage: {
//       banner: require("../assets/images/banners/it-consulting.webp"),
//       img1: require("../assets/images/service-details/it-consulting-1.webp"),
//       img2: require("../assets/images/service-details/it-consulting-2.webp"),
//       img3: require("../assets/images/service-details/it-consulting-3.webp"),
//       firstSection: `
//         <div class="space-y-6">
//           <div class="space-y-4">
//             <h2 class="text-xl font-bold">
//               Aligning Technology with Your Business Goals
//             </h2>
//             <p>
//               In today’s fast-evolving digital world, businesses need to leverage technology to stay ahead. Our IT consultancy and strategy services help you navigate complex technology challenges and align solutions with your business goals.
//             </p>
//             <p>
//               At <span class="font-bold text-secondary">AI Company</span>, we work closely with your team to understand your unique needs, analyze current systems, and design a strategic roadmap that drives digital transformation and business growth.
//             </p>
//           </div>
//         </div>
//       `,
//       secondSection: `
//         <div class="py-6">
//           <div class="space-y-6">
//             <h2 class="text-xl font-bold">
//               Why Choose AI Company for IT Consultancy?
//             </h2>
//             <ul class="space-y-5 list-decimal pl-6">
//               <li>
//                 <h3 class="font-bold mb-2">Expert Guidance</h3>
//                 <p>
//                   Our experienced consultants provide valuable insights to help you make informed decisions and avoid costly mistakes.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Tailored Solutions</h3>
//                 <p>
//                   We take the time to understand your business challenges and craft personalized strategies that align with your goals.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Digital Transformation</h3>
//                 <p>
//                   We guide you through digital transformation, implementing the latest technologies to enhance efficiency, productivity, and customer satisfaction.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Cost Optimization</h3>
//                 <p>
//                   We help you optimize your technology investments, ensuring you get the most value from your IT infrastructure while reducing unnecessary costs.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Scalability & Future-Proofing</h3>
//                 <p>
//                   Our solutions are designed to scale as your business grows and evolve with emerging trends and technologies.
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       `,
//       thirdSection: `
//         <div class="py-6">
//           <div class="space-y-6">
//             <h2 class="text-xl font-bold">
//               Our IT Consultancy Process
//             </h2>
//             <ul class="space-y-5 list-decimal pl-6">
//               <li>
//                 <h3 class="font-bold mb-2">Discovery & Analysis</h3>
//                 <p>
//                   We begin by thoroughly understanding your business, objectives, and existing IT infrastructure.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Strategy Design</h3>
//                 <p>
//                   Based on our analysis, we craft a strategic roadmap that includes technology recommendations and implementation plans.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Implementation & Integration</h3>
//                 <p>
//                   We support the implementation of recommended strategies and ensure seamless integration with your current systems.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Ongoing Support & Optimization</h3>
//                 <p>
//                   After implementation, we provide continuous support to optimize systems, improve performance, and ensure long-term success.
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       `,
//     },
//   },
//   {
//     id: 6,
//     title: "IT Infrastructure Management",
//     icon: icon6,
//     desc: "Optimize your IT operations with AI Company’s comprehensive infrastructure management services. We ensure seamless, secure, and scalable solutions that support your business’s evolving needs.",
//     detailsPage: {
//       banner: require("../assets/images/banners/it-infrastructure.webp"),
//       img1: require("../assets/images/service-details/it-infrastructure-1.webp"),
//       img2: require("../assets/images/service-details/it-infrastructure-2.webp"),
//       img3: require("../assets/images/service-details/it-infrastructure-3.webp"),
//       firstSection: `
//         <div class="space-y-6">
//           <div class="space-y-4">
//             <h2 class="text-xl font-bold">
//               Strengthen Your Business with Robust IT Infrastructure
//             </h2>
//             <p>
//               AI Company’s IT Infrastructure Management services are designed to ensure your business operates at peak efficiency. From data center management to network support, we handle the complexities of infrastructure, allowing you to focus on growth and innovation.
//             </p>
//             <p>
//               Our team of experts ensures your infrastructure is always secure, reliable, and scalable, giving you the peace of mind to focus on your core business operations.
//             </p>
//           </div>
//         </div>
//       `,
//       secondSection: `
//         <div class="py-6">
//           <div class="space-y-6">
//             <h2 class="text-xl font-bold">
//               Why Choose AI Company for IT Infrastructure Management?
//             </h2>
//             <ul class="space-y-5 list-decimal pl-6">
//               <li>
//                 <h3 class="font-bold mb-2">Scalability</h3>
//                 <p>
//                   We help you scale your IT infrastructure as your business grows, ensuring that your technology can handle future demands.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Security & Compliance</h3>
//                 <p>
//                   Our solutions ensure that your infrastructure is secure, complying with industry standards and regulations.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">24/7 Monitoring & Support</h3>
//                 <p>
//                   We provide continuous monitoring and support, ensuring that your IT systems are always available and performing optimally.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Cost Efficiency</h3>
//                 <p>
//                   Our managed services reduce operational costs and eliminate the need for in-house infrastructure teams, allowing you to allocate resources more effectively.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Proactive Management</h3>
//                 <p>
//                   We anticipate potential issues and take proactive steps to ensure your IT infrastructure runs smoothly, reducing the risk of downtime.
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       `,
//       thirdSection: `
//         <div class="py-6">
//           <div class="space-y-6">
//             <h2 class="text-xl font-bold">
//               Our IT Infrastructure Management Process
//             </h2>
//             <ul class="space-y-5 list-decimal pl-6">
//               <li>
//                 <h3 class="font-bold mb-2">Infrastructure Assessment</h3>
//                 <p>
//                   We begin by evaluating your existing IT infrastructure, identifying any areas that need improvement and ensuring alignment with your business needs.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Design & Implementation</h3>
//                 <p>
//                   Our experts design a customized infrastructure solution tailored to your business, implementing it with minimal disruption to your daily operations.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Ongoing Management & Support</h3>
//                 <p>
//                   After implementation, we provide ongoing management and support to ensure your systems remain secure, up-to-date, and efficient.
//                 </p>
//               </li>
//               <li>
//                 <h3 class="font-bold mb-2">Optimization</h3>
//                 <p>
//                   We continuously monitor and optimize your IT infrastructure to ensure maximum performance, cost-efficiency, and scalability.
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       `,
//     },
//   },
// ];

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
            Blockchain technology is redefining industries through decentralized, secure, and transparent solutions. At <span class="font-bold text-secondary">AI Company</span>, we develop enterprise-grade blockchain applications that enhance security, streamline operations, and unlock new opportunities.
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
            In the $200+ billion gaming industry, standing out requires both technical excellence and creative vision. At <span class="font-bold text-secondary">AI Company</span>, we develop games that captivate players across mobile, console, PC, and emerging platforms.
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
            Robotic Process Automation (RPA) is revolutionizing enterprise operations by automating repetitive tasks with digital workers. At <span class="font-bold text-secondary">AI Company</span>, we implement RPA solutions that deliver:
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
            Artificial Intelligence is revolutionizing industries by enabling data-driven decisions, automating complex processes, and creating intelligent customer experiences. At <span class="font-bold text-secondary">AI Company</span>, we develop tailored AI solutions that deliver measurable business impact.
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
            Machine learning transforms raw data into competitive advantage. At <span class="font-bold text-secondary">AI Company</span>, we build production-ready ML models that help businesses predict outcomes, automate decisions, and discover hidden patterns.
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
            Cloud computing delivers unprecedented flexibility, scalability, and cost efficiency. At <span class="font-bold text-secondary">AI Company</span>, we architect cloud-native solutions across AWS, Azure, and GCP that help businesses:
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
    icon: icon1,
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
            Your website is the digital face of your business. At <span class="font-bold text-secondary">AI Company</span>, we craft responsive, high-converting websites that combine stunning design with cutting-edge technology.
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
    icon: icon1,
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
            At <span class="font-bold text-secondary">AI Company</span>, we transform raw data into strategic insights using advanced analytics and machine learning. Our solutions help you forecast trends, identify patterns, and make informed decisions with confidence.
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
    icon: icon1,
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
            At <span class="font-bold text-secondary">AI Company</span>, our NLP solutions enhance your ability to interact with and analyze human language. We integrate contextual understanding, sentiment analysis, and language generation to power smarter interfaces.
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
    icon: icon1,
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
            <span class="font-bold text-secondary">AI Company</span> helps businesses migrate workloads to the cloud with robust planning, zero data loss, and minimal disruption. We tailor migration strategies to align with your business goals.
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
    icon: icon1,
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
          <span class="font-bold text-secondary">AI Company</span> designs digital experiences that are beautiful, intuitive, and conversion-focused. From research to prototypes, we craft every touchpoint with user empathy and brand alignment.
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
