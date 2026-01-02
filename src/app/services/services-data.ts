import type { LucideIcon } from "lucide-react";
import {
    Palette, Smartphone, PenSquare, Brush, LineChart, ShoppingCart,
    Cloud, TestTube, Wrench, Code, Database, Shield, Lightbulb,
    Brain, Sparkles, Bot, Scale, Cog, Zap
} from "lucide-react";

export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    icon: LucideIcon;
    details: {
        title: string;
        description: string;
    }[];
}

export const services: Service[] = [
    {
        slug: "agentic-ai",
        title: "Agentic AI Systems",
        shortDescription: "Build AI systems that can make decisions, take action, and help your business run more smoothly with autonomous capabilities.",
        longDescription: "Autonomous AI that acts for you. Develop intelligent AI agents that can understand context, make decisions, and take actions to automate complex workflows and business processes.",
        icon: Bot,
        details: [
            {
                title: "Task Automation",
                description: "AI agents that autonomously handle routine tasks and workflows, freeing up your team for strategic work."
            },
            {
                title: "Customer Support AI",
                description: "Intelligent chatbots and virtual assistants that provide 24/7 customer support with human-like interactions."
            },
            {
                title: "Operations Assistance",
                description: "AI systems that monitor operations, identify issues, and take corrective actions automatically."
            },
            {
                title: "Sales & Marketing AI",
                description: "Autonomous AI agents that qualify leads, personalize outreach, and optimize marketing campaigns."
            },
            {
                title: "Workflow Automation",
                description: "Intelligent agents that orchestrate complex multi-step workflows across different systems and departments."
            },
            {
                title: "Decision Support",
                description: "AI agents that analyze data, provide recommendations, and assist in making informed business decisions."
            }
        ]
    },
    {
        slug: "ai-governance",
        title: "AI Governance & Compliance",
        shortDescription: "Ensure your AI systems follow regulations, meet ethical standards, and operate transparently with responsible AI practices.",
        longDescription: "Responsible AI for trust and safety. Implement governance frameworks that ensure your AI systems are ethical, compliant, and aligned with your organizational values.",
        icon: Scale,
        details: [
            {
                title: "Policy & Frameworks",
                description: "Develop comprehensive AI governance policies and frameworks tailored to your organization."
            },
            {
                title: "Regulatory Compliance",
                description: "Ensure your AI systems comply with relevant regulations including GDPR, AI Act, and industry-specific requirements."
            },
            {
                title: "Risk Management",
                description: "Identify, assess, and mitigate risks associated with AI deployment and operation."
            },
            {
                title: "Ethical AI Practices",
                description: "Implement ethical guidelines to ensure fairness, transparency, and accountability in your AI systems."
            },
            {
                title: "Bias Detection & Mitigation",
                description: "Identify and address biases in AI models to ensure fair and equitable outcomes for all users."
            },
            {
                title: "Audit Trails & Transparency",
                description: "Maintain comprehensive documentation and audit trails for AI decision-making processes."
            }
        ]
    },
    {
        slug: "ai-strategy-consulting",
        title: "AI Strategy & Consulting",
        shortDescription: "Strategic AI guidance for business growth to help companies understand how AI can make their business stronger, faster, and more efficient.",
        longDescription: "Expert AI consulting to help companies understand how AI can make their business stronger, faster, and more efficient. We provide strategic guidance on AI adoption and implementation.",
        icon: Brain,
        details: [
            {
                title: "AI Assessment",
                description: "Evaluate your current capabilities and identify opportunities where AI can deliver the most value to your business."
            },
            {
                title: "AI Strategy Development",
                description: "Create a comprehensive AI roadmap aligned with your business objectives and technical capabilities."
            },
            {
                title: "Custom AI Solutions",
                description: "Design and implement AI solutions tailored to your specific business challenges and opportunities."
            },
            {
                title: "Integration & Support",
                description: "Seamless integration of AI technologies into your existing systems with ongoing support and optimization."
            },
            {
                title: "ROI Analysis",
                description: "Measure and demonstrate the business value and return on investment of your AI initiatives."
            },
            {
                title: "Team Training",
                description: "Upskill your team with AI knowledge and best practices to maximize adoption and success."
            }
        ]
    },
    {
        slug: "cloud-solutions",
        title: "Cloud Solutions",
        shortDescription: "Scalable cloud infrastructure and migration services for modern businesses with AWS, Azure, DevOps, and infrastructure management.",
        longDescription: "Scalable infrastructure and DevOps solutions for modern businesses. We help you build and run applications at scale with automated infrastructure, streamlined development pipelines, and high-availability deployments.",
        icon: Cloud,
        details: [
            {
                title: "Cloud Migration",
                description: "Seamless migration of your applications and data to cloud platforms with minimal downtime and maximum efficiency."
            },
            {
                title: "AWS & Azure",
                description: "Expert implementation and management of cloud services on leading platforms including AWS and Microsoft Azure."
            },
            {
                title: "DevOps Services",
                description: "Automated CI/CD pipelines, containerization with Docker and Kubernetes, and infrastructure as code."
            },
            {
                title: "Infrastructure Management",
                description: "Ongoing monitoring, optimization, and management of your cloud infrastructure for peak performance."
            },
            {
                title: "Serverless Computing",
                description: "Build and deploy applications using serverless architectures for automatic scaling and reduced operational overhead."
            },
            {
                title: "Cost Optimization",
                description: "Analyze and optimize your cloud spending to maximize ROI while maintaining performance and reliability."
            }
        ]
    },
    {
        slug: "custom-software-development",
        title: "Custom Software Development",
        shortDescription: "Bespoke software solutions designed and built specifically for your unique business requirements, workflows, and enterprise needs.",
        longDescription: "Tailored solutions for your business. We design and develop robust, scalable software solutions that streamline your operations and drive efficiency. Whether you need a custom CRM, an ERP system, or a specialized internal tool, our team has the expertise to deliver.",
        icon: Code,
        details: [
            {
                title: "Enterprise Applications",
                description: "Large-scale enterprise applications that integrate seamlessly with your existing systems and handle complex business processes."
            },
            {
                title: "Business Process Automation",
                description: "Automate repetitive tasks and workflows to increase efficiency and reduce operational costs."
            },
            {
                title: "System Integration",
                description: "Connect your disparate software systems to ensure data flows smoothly across your organization."
            },
            {
                title: "Legacy Modernization",
                description: "Transform outdated systems into modern, efficient applications while preserving critical business logic."
            },
            {
                title: "API Development",
                description: "Design and build robust APIs that enable seamless communication between different software systems and platforms."
            },
            {
                title: "Cloud Architecture",
                description: "Design scalable, resilient cloud-native architectures that grow with your business needs."
            }
        ]
    },
    {
        slug: "cybersecurity",
        title: "Cybersecurity",
        shortDescription: "Comprehensive security solutions to protect your digital assets with security audits, penetration testing, compliance, and incident response.",
        longDescription: "Protect your digital assets with comprehensive security solutions. We provide enterprise-grade security services to safeguard your systems, data, and users from evolving cyber threats.",
        icon: Shield,
        details: [
            {
                title: "Security Audits",
                description: "Thorough assessment of your systems to identify vulnerabilities and security gaps before they can be exploited."
            },
            {
                title: "Penetration Testing",
                description: "Ethical hacking and penetration testing to evaluate the security of your applications and infrastructure."
            },
            {
                title: "Compliance Management",
                description: "Ensure your systems meet industry standards and regulatory requirements including GDPR, HIPAA, and SOC 2."
            },
            {
                title: "Incident Response",
                description: "Rapid response and recovery services to minimize damage and restore operations in case of security incidents."
            },
            {
                title: "Data Protection",
                description: "Implement encryption, access controls, and data loss prevention strategies to protect sensitive information."
            },
            {
                title: "Security Training",
                description: "Educate your team on security best practices and threat awareness to create a security-conscious culture."
            }
        ]
    },
    {
        slug: "data-analytics",
        title: "Data Analytics & Management",
        shortDescription: "Transform data into strategic insights with comprehensive analytics, business intelligence, data warehousing, and AI-powered solutions.",
        longDescription: "Comprehensive data analytics, business intelligence, and AI-powered solutions to unlock the full potential of your data. We help you make data-driven decisions that drive business growth.",
        icon: Database,
        details: [
            {
                title: "Data Analytics Consulting",
                description: "Expert guidance on collecting, analyzing, and leveraging data to gain actionable business insights."
            },
            {
                title: "Business Intelligence",
                description: "Custom dashboards and reporting solutions that provide real-time visibility into your business metrics."
            },
            {
                title: "Data Warehousing",
                description: "Design and implement scalable data warehouses that centralize your data for better analysis and reporting."
            },
            {
                title: "Data Science & AI",
                description: "Advanced analytics and machine learning models to predict trends and automate decision-making."
            },
            {
                title: "Predictive Analytics",
                description: "Use historical data and statistical algorithms to forecast future trends and business outcomes."
            },
            {
                title: "Data Governance",
                description: "Establish policies and procedures to ensure data quality, security, and compliance across your organization."
            }
        ]
    },
    {
        slug: "digital-marketing",
        title: "Digital Marketing",
        shortDescription: "Data-driven digital marketing strategies to grow your online presence with SEO optimization, social media, content strategy, and analytics.",
        longDescription: "Data-driven growth strategies to expand your online presence. We use proven digital marketing techniques to increase your visibility, engage your audience, and drive measurable results for your business.",
        icon: LineChart,
        details: [
            {
                title: "SEO Optimization",
                description: "Comprehensive search engine optimization to improve your rankings and drive organic traffic to your website."
            },
            {
                title: "Social Media Marketing",
                description: "Strategic social media campaigns across all major platforms to build brand awareness and engage your audience."
            },
            {
                title: "Content Strategy",
                description: "Develop and execute content strategies that resonate with your target audience and support your business goals."
            },
            {
                title: "Analytics & Reporting",
                description: "Track, measure, and optimize your marketing performance with detailed analytics and actionable insights."
            },
            {
                title: "PPC Advertising",
                description: "Targeted pay-per-click campaigns on Google Ads, Facebook, and other platforms to drive qualified traffic and conversions."
            },
            {
                title: "Email Marketing",
                description: "Design and execute email campaigns that nurture leads, retain customers, and drive revenue growth."
            }
        ]
    },
    {
        slug: "ecommerce-solutions",
        title: "E-commerce Solutions",
        shortDescription: "Storefronts, payments, inventory, and optimized checkout with secure, scalable architecture tailored to your growth plans and merchandising operations.",
        longDescription: "We build e-commerce solutions that are designed to help you sell more. From custom storefronts to seamless payment integrations, we create online stores that are easy to manage, secure, and optimized for conversions.",
        icon: ShoppingCart,
        details: [
            {
                title: "Custom Storefronts",
                description: "We design and develop custom e-commerce websites that are tailored to your brand and your customers."
            },
            {
                title: "Payment Gateway Integration",
                description: "We integrate a variety of payment gateways to provide a seamless checkout experience for your customers."
            },
            {
                title: "Inventory Management",
                description: "We set up and configure inventory management systems to help you keep track of your products."
            },
            {
                title: "Shopping Cart Optimization",
                description: "Optimize the checkout process to reduce cart abandonment and increase conversion rates."
            },
            {
                title: "E-commerce Analytics",
                description: "Track sales, customer behavior, and product performance with comprehensive analytics dashboards."
            },
            {
                title: "Multi-channel Selling",
                description: "Integrate with marketplaces like Amazon, eBay, and social commerce platforms for expanded reach."
            }
        ]
    },
    {
        slug: "generative-ai",
        title: "Generative AI Solutions",
        shortDescription: "Harness the power of Generative AI to create content, designs, and solutions that boost creativity and productivity.",
        longDescription: "Create smarter and faster with AI. Leverage cutting-edge generative AI technologies to automate content creation, enhance creativity, and accelerate innovation across your organization.",
        icon: Sparkles,
        details: [
            {
                title: "Content Creation",
                description: "AI-powered content generation for marketing copy, articles, product descriptions, and more."
            },
            {
                title: "Design & Visuals",
                description: "Generate unique images, graphics, and design concepts using advanced AI models."
            },
            {
                title: "Idea Generation",
                description: "Leverage AI to brainstorm ideas, explore possibilities, and accelerate innovation."
            },
            {
                title: "Custom AI Tools",
                description: "Build custom generative AI applications tailored to your specific creative and business needs."
            },
            {
                title: "Code Generation",
                description: "Accelerate development with AI-powered code generation and intelligent coding assistants."
            },
            {
                title: "Data Synthesis",
                description: "Generate synthetic data for testing, training, and privacy-preserving analytics."
            }
        ]
    },
    {
        slug: "graphic-design",
        title: "Graphic Design",
        shortDescription: "We create cohesive visual identities and marketing assets — logos, illustrations, and campaign materials that strengthen your brand and engage customers.",
        longDescription: "Our graphic design services are all about creating a visual identity that resonates with your audience. From logos and branding to marketing materials and social media graphics, we create designs that are not only beautiful but also effective.",
        icon: Brush,
        details: [
            {
                title: "Logo & Brand Identity",
                description: "We design memorable logos and comprehensive brand guidelines that reflect your company's values."
            },
            {
                title: "Marketing Materials",
                description: "We create a wide range of marketing materials, including brochures, flyers, and business cards."
            },
            {
                title: "Digital Graphics",
                description: "We design engaging graphics for your website, social media, and online advertising campaigns."
            },
            {
                title: "Illustration & Icons",
                description: "Custom illustrations and icon sets that add personality and visual interest to your brand."
            },
            {
                title: "Print Design",
                description: "Professional print-ready designs for packaging, posters, banners, and promotional materials."
            },
            {
                title: "Brand Guidelines",
                description: "Comprehensive brand style guides to ensure consistent visual identity across all touchpoints."
            }
        ]
    },
    {
        slug: "intelligent-automation",
        title: "Intelligent Automation",
        shortDescription: "AI-powered automation solutions that handle repetitive tasks, streamline processes, and boost productivity.",
        longDescription: "Work smarter, not harder. Combine AI with automation to transform your business processes, reduce manual work, and increase operational efficiency.",
        icon: Zap,
        details: [
            {
                title: "Process Automation",
                description: "Automate end-to-end business processes with intelligent workflows that adapt to changing conditions."
            },
            {
                title: "Workflow Optimization",
                description: "Analyze and optimize your workflows using AI to identify bottlenecks and improvement opportunities."
            },
            {
                title: "Smart Decision-Making",
                description: "AI-powered decision engines that make intelligent choices based on data and business rules."
            },
            {
                title: "Productivity Boost",
                description: "Eliminate repetitive tasks and free up your team to focus on high-value strategic work."
            },
            {
                title: "RPA Integration",
                description: "Combine robotic process automation with AI for intelligent automation of complex tasks."
            },
            {
                title: "Intelligent Document Processing",
                description: "Automatically extract, classify, and process information from documents using AI and OCR."
            }
        ]
    },
    {
        slug: "it-consulting",
        title: "IT Consulting",
        shortDescription: "Expert guidance to align your technology strategy with business goals through assessment, digital transformation, and strategic planning.",
        longDescription: "Strategic technology guidance for business success. Our expert consultants help you make informed technology decisions that align with your business objectives and drive growth.",
        icon: Lightbulb,
        details: [
            {
                title: "Technology Assessment",
                description: "Comprehensive evaluation of your current technology stack and identification of opportunities for improvement."
            },
            {
                title: "Digital Transformation",
                description: "Guide your organization through digital transformation initiatives to stay competitive in the modern marketplace."
            },
            {
                title: "Process Optimization",
                description: "Streamline your business processes with technology solutions that increase efficiency and reduce costs."
            },
            {
                title: "Strategic Planning",
                description: "Develop long-term technology roadmaps that support your business vision and growth objectives."
            },
            {
                title: "Vendor Selection",
                description: "Expert guidance in selecting the right technology vendors and solutions for your specific needs and budget."
            },
            {
                title: "Change Management",
                description: "Support your team through technology transitions with training, communication, and adoption strategies."
            }
        ]
    },
    {
        slug: "machine-learning",
        title: "Machine Learning",
        shortDescription: "Custom machine learning solutions that analyze data, find patterns, and provide insights for better decisions.",
        longDescription: "Smarter decisions through data. Build custom machine learning models that learn from your data to predict outcomes, automate decisions, and uncover hidden insights.",
        icon: Brain,
        details: [
            {
                title: "Predictive Analytics",
                description: "Machine learning models that forecast trends, customer behavior, and business outcomes."
            },
            {
                title: "Pattern Recognition",
                description: "Advanced algorithms that identify patterns and anomalies in complex datasets."
            },
            {
                title: "Automated Insights",
                description: "AI-powered analytics that automatically surface actionable insights from your data."
            },
            {
                title: "Custom ML Models",
                description: "Tailored machine learning solutions designed for your specific use cases and data."
            },
            {
                title: "NLP Solutions",
                description: "Natural language processing for sentiment analysis, text classification, and language understanding."
            },
            {
                title: "Computer Vision",
                description: "Image and video analysis for object detection, facial recognition, and visual quality control."
            }
        ]
    },
    {
        slug: "maintenance-and-support",
        title: "Maintenance & Support",
        shortDescription: "Proactive maintenance, performance tuning, backups, security patches, and SLA-driven support keep your products stable, compliant, and healthy after launch.",
        longDescription: "Our maintenance and support services ensure your applications are always running smoothly. We provide proactive maintenance, security updates, and on-demand support to keep your systems online and your users happy.",
        icon: Wrench,
        details: [
            {
                title: "Proactive Maintenance",
                description: "We monitor your application and perform regular maintenance to prevent issues before they occur."
            },
            {
                title: "Security Updates",
                description: "We keep your application and its dependencies up to date with the latest security patches."
            },
            {
                title: "24/7 Support",
                description: "We offer round-the-clock support to address any issues and ensure your application is always available."
            },
            {
                title: "Performance Monitoring",
                description: "Continuous monitoring of application performance with alerts for any anomalies or issues."
            },
            {
                title: "Backup & Disaster Recovery",
                description: "Regular backups and disaster recovery planning to protect your data and ensure business continuity."
            },
            {
                title: "Technical Documentation",
                description: "Maintain up-to-date technical documentation for easier troubleshooting and knowledge transfer."
            }
        ]
    },
    {
        slug: "mobile-applications",
        title: "Mobile Applications",
        shortDescription: "Native and cross-platform mobile applications for iOS and Android devices with app store optimization and seamless user experiences.",
        longDescription: "Native and cross-platform mobile applications for iOS and Android devices. We build high-performance mobile apps that are scalable, secure, and ready for the future using the latest technologies and agile development processes.",
        icon: Smartphone,
        details: [
            {
                title: "iOS Development",
                description: "Native iOS applications built with Swift and SwiftUI, optimized for performance and following Apple's design guidelines."
            },
            {
                title: "Android Development",
                description: "Native Android applications using Kotlin and Jetpack Compose, ensuring smooth performance across all Android devices."
            },
            {
                title: "Cross-Platform Apps",
                description: "Build once, deploy everywhere with React Native or Flutter for cost-effective mobile solutions."
            },
            {
                title: "App Store Optimization",
                description: "Strategic optimization for better visibility and downloads in both Apple App Store and Google Play Store."
            },
            {
                title: "Mobile UI/UX Design",
                description: "Intuitive and engaging mobile interfaces designed specifically for touch interactions and mobile user behavior."
            },
            {
                title: "Backend Integration",
                description: "Seamless integration with cloud services, databases, and third-party APIs for full-featured mobile experiences."
            }
        ]
    },
    {
        slug: "professional-content-writer",
        title: "Professional Content Writer",
        shortDescription: "Our writers craft clear, on-brand, and SEO-friendly content — from marketing copy and blog posts to product messaging and documentation.",
        longDescription: "Content is king, and our team of professional writers knows how to create content that engages your audience and drives results. We specialize in creating high-quality, SEO-friendly content that tells your brand's story and converts visitors into customers.",
        icon: PenSquare,
        details: [
            {
                title: "SEO-Optimized Content",
                description: "We create content that is optimized for search engines to improve your visibility and drive organic traffic."
            },
            {
                title: "Engaging Copywriting",
                description: "We write compelling copy for your website, ads, and marketing materials that captures attention and inspires action."
            },
            {
                title: "Content Strategy",
                description: "We develop a content strategy that aligns with your business goals and targets your ideal audience."
            },
            {
                title: "Blog & Article Writing",
                description: "Regular, high-quality blog posts and articles that establish thought leadership and drive traffic."
            },
            {
                title: "Technical Writing",
                description: "Clear, comprehensive documentation, user guides, and technical content for complex products."
            },
            {
                title: "Localization & Translation",
                description: "Adapt your content for different markets and languages while maintaining brand voice and cultural relevance."
            }
        ]
    },
    {
        slug: "qa-and-test-automation",
        title: "QA & Test Automation",
        shortDescription: "Unit, integration, and end-to-end testing with pipelines, analytics, and dashboards deliver confident releases and traceable quality signals across teams.",
        longDescription: "Our QA and test automation services ensure your applications are reliable and bug-free. We use a combination of manual and automated testing to catch issues early and deliver a high-quality product to your users.",
        icon: TestTube,
        details: [
            {
                title: "Manual & Automated Testing",
                description: "We perform a variety of testing methods to ensure your application meets your quality standards."
            },
            {
                title: "Performance & Load Testing",
                description: "We test your application under heavy load to identify and address performance bottlenecks."
            },
            {
                title: "Security Testing",
                description: "We perform security audits to identify and fix vulnerabilities in your application."
            },
            {
                title: "Accessibility Testing",
                description: "Ensure your application is accessible to users with disabilities and complies with accessibility standards."
            },
            {
                title: "CI/CD Integration",
                description: "Integrate automated testing into your continuous integration and deployment pipelines."
            },
            {
                title: "Cross-browser Testing",
                description: "Verify your application works flawlessly across all major browsers and devices."
            }
        ]
    },
    {
        slug: "ui-ux-creative-design",
        title: "UI/UX Creative Design",
        shortDescription: "We design intuitive, research-backed interfaces focused on usability and conversion — from user research and wireframes to polished, high-fidelity prototypes.",
        longDescription: "Our UI/UX design process is centered around your users. We start with in-depth research to understand their needs and pain points. We then create wireframes and prototypes to test and refine the user experience before moving to high-fidelity designs that are both beautiful and functional.",
        icon: Palette,
        details: [
            {
                title: "User Research & Analysis",
                description: "We conduct interviews, surveys, and usability tests to gather insights into user behavior and needs."
            },
            {
                title: "Wireframing & Prototyping",
                description: "We create low-fidelity wireframes and interactive prototypes to visualize the user flow and test concepts early."
            },
            {
                title: "High-Fidelity Design",
                description: "We design polished, pixel-perfect interfaces that are visually appealing and aligned with your brand identity."
            },
            {
                title: "Usability Testing",
                description: "We conduct comprehensive usability tests to validate designs and identify areas for improvement."
            },
            {
                title: "Design Systems",
                description: "We create scalable design systems with reusable components for consistent user experiences."
            },
            {
                title: "Accessibility Design",
                description: "We ensure your interfaces are accessible to all users, including those with disabilities, following WCAG guidelines."
            }
        ]
    },
    {
        slug: "web-development",
        title: "Web Development",
        shortDescription: "Modern, scalable web solutions with responsive design, progressive web apps, e-commerce integration, and CMS capabilities for optimal performance.",
        longDescription: "Custom web applications built with modern technologies for optimal performance and user experience. We create stunning, high-performance websites that drive results using cutting-edge technologies and best practices to build solutions that are fast, secure, and scalable.",
        icon: Code,
        details: [
            {
                title: "Responsive Design",
                description: "Every website we build is fully responsive, ensuring a seamless experience across all devices - from desktops to tablets to smartphones."
            },
            {
                title: "Progressive Web Apps",
                description: "We develop PWAs that combine the best of web and mobile apps, offering offline functionality, push notifications, and app-like experiences."
            },
            {
                title: "E-commerce Solutions",
                description: "Complete online store development with secure payment processing, inventory management, and conversion-optimized checkout flows."
            },
            {
                title: "CMS Integration",
                description: "Custom CMS solutions or integration with popular platforms like WordPress, Strapi, or Sanity for easy content management."
            },
            {
                title: "API Development",
                description: "RESTful and GraphQL API development for seamless integration with third-party services and mobile applications."
            },
            {
                title: "Performance Optimization",
                description: "Speed optimization techniques including lazy loading, code splitting, and caching strategies for lightning-fast load times."
            }
        ]
    }
];
