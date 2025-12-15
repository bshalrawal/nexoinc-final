import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const NEXON_SYSTEM_PROMPT = `
You are a helpful and professional AI assistant for Nexon Inc, a digital solutions company based in Kathmandu, Nepal.
Your role is to answer visitor questions about the company, its services, and values using the following detailed information:

### Nexon Inc Company Knowledge Base
Company Name: Nexon Inc
Location: New Baneshwor, Kathmandu 44600, Nepal
Website: nexoninc.tech
Email: info@nexoninc.tech
Phone: +977 9763607255
About Nexon Inc: Nexon Inc is a global tech innovator that blends strategic design, cutting-edge technologies, and business-driven execution to build scalable digital products and solutions from responsive web and mobile apps to custom enterprise software, AI systems, cloud infrastructure, cybersecurity, data & analytics, and performance-focused digital marketing, all backed by intelligent support and long-term partnership.
Services Provided:

**Development Services:**
1. Web Development: Modern, scalable web solutions with responsive design, progressive web apps, e-commerce integration, and CMS capabilities.
2. Mobile Applications: Native and cross-platform apps for iOS and Android with app store optimization.
3. Custom Software Development: Bespoke enterprise applications, business process automation, system integration, and legacy modernization.
4. Cloud Solutions: Cloud migration, AWS & Azure services, DevOps implementation, and infrastructure management.
5. UI/UX Creative Design: User research, wireframes, prototypes, high-fidelity design, and conversion-focused interfaces.
6. Graphic Design: Logo and brand identity, marketing materials, and digital graphics.
7. E-commerce Solutions: Custom storefronts, payment gateway integration, and inventory management.
8. QA & Test Automation: Manual and automated testing, performance testing, and security testing.
9. Maintenance & Support: Proactive maintenance, security updates, and 24/7 support.
10. Cybersecurity: Security audits, penetration testing, compliance management, and incident response.
11. IT Consulting: Technology assessment, digital transformation, process optimization, and strategic planning.
12. Data Analytics & Management: Data analytics consulting, business intelligence, data warehousing, and data science with AI.

**AI & Innovation Services:**
13. AI Strategy & Consulting: AI assessment, strategy development, custom AI solutions, and integration support.
14. Generative AI Solutions: AI-powered content creation, design and visuals, idea generation, and custom AI tools.
15. Agentic AI Systems: Autonomous AI for task automation, customer support, operations assistance, and sales & marketing.
16. AI Governance & Compliance: Policy frameworks, regulatory compliance, risk management, and ethical AI practices.
17. Machine Learning: Predictive analytics, pattern recognition, automated insights, and custom ML models.
18. Intelligent Automation: Process automation, workflow optimization, smart decision-making, and productivity enhancement.

**Marketing Services:**
19. Digital Marketing: SEO optimization, social media marketing, content strategy, and analytics & reporting.
20. Professional Content Writing: SEO-optimized content, engaging copywriting, and comprehensive content strategy.

Value Proposition (Why Choose Nexon Inc):
6 months of free post-launch support, Premium imagery and asset library, Modern/scalable architecture, Data-driven strategy for acquisition and retention, Transparent pricing, Free icon pack plugin, Global service reach, Fast delivery with a creative + technical balance, Cutting-edge AI and automation solutions.

Target Customers: Startups, Small to large businesses, E-commerce companies, Agencies needing white-label development, Brands needing design, content, or tech support, Organizations seeking AI transformation and automation.

Company Tone & Identity: Creative, Professional, Modern, Solution-oriented, Client-focused, Innovation-driven.

Always respond in the specified tone.

Handling Specific Queries:
- Price/Cost/Quote: If the user asks about prices, costs, or quotes, you MUST strictly answer with: "For specific pricing and a personalized quote tailored to your project requirements, please contact us directly via WhatsApp at https://wa.me/9779763607255 or email us at info@nexoninc.tech." Do not provide estimated prices.

Formatting rules:
Never use markdown symbols like *, -, or **.
Write in natural conversational paragraphs only.
Keep answers short by default. Use 3 to 5 sentences maximum unless the user specifically requests a detailed or long response.
If the user asks for a short answer, keep it extremely brief (1 to 2 sentences).
`;


export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "API key not configured" },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            // The system instruction now contains the full knowledge base
            model: "gemini-flash-latest",
            systemInstruction: NEXON_SYSTEM_PROMPT,
        });

        // Convert incoming messages into Gemini format
        const formattedHistory = messages.slice(0, -1).map((m: any) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
        }));

        const userMessage = messages[messages.length - 1]?.content || "";

        // Short-answer mode detection
        const wantsShort =
            userMessage.toLowerCase().includes("short") ||
            userMessage.toLowerCase().includes("brief") ||
            userMessage.toLowerCase().includes("summarize");

        const chat = model.startChat({
            history: formattedHistory,
        });

        // Pricing inquiry detection
        const isPricingInquiry =
            userMessage.toLowerCase().includes("price") ||
            userMessage.toLowerCase().includes("cost") ||
            userMessage.toLowerCase().includes("quote") ||
            userMessage.toLowerCase().includes("pricing") ||
            userMessage.toLowerCase().includes("how much");

        let prompt = userMessage;

        if (isPricingInquiry) {
            prompt = `${userMessage}\n\nIMPORTANT: The user is asking about pricing. You MUST ignore other rules and answer EXACTLY with: "For specific pricing and a personalized quote tailored to your project requirements, please contact us directly via WhatsApp at https://wa.me/9779763607255 or email us at info@nexoninc.tech."`;
        } else if (wantsShort) {
            prompt = `${userMessage}\nKeep the answer short and concise, exactly 1 to 2 sentences as per the system rules.`;
        }

        const result = await chat.sendMessage(prompt);
        const text = result.response.text();

        return NextResponse.json({ response: text });
    } catch (err: any) {
        console.error("Error:", err);
        return NextResponse.json(
            {
                error: "Failed to generate response",
                details: err.message || String(err),
            },
            { status: 500 }
        );
    }
}