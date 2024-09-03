export default function NewsSection() {
    return <div className="text-xl flex flex-col">
        <span className="text-[#D7B257C9] font-extrabold">Latest Headlines:</span>
        <div className="pl-10">
            <ul className="list-disc">
                <li>
                    "Microsoft Announces Strategic Partnership with OpenAI for AI Innovation" – Source: TechCrunch, August 2024
                </li>
                <li>
                    "Microsoft Azure Launches New AI-Powered Tools for Developers" – Source: The Verge, August 2024
                </li>
                <li>
                    "Windows 11 Update Brings Enhanced Security Features to Enterprise Customers" – Source: ZDNet, August 2024
                </li>
                <li>
                    "Microsoft Reports Record Earnings, Driven by Cloud and Enterprise Software Sales" – Source: CNBC, August 2024
                </li>
            </ul>
        </div>

        <div className="h-8"></div>

        <span className="text-[#D7B257C9] font-extrabold">Market Impact:</span>
        <p>
            "The recent announcements have positively impacted Microsoft’s stock price, showcasing investor confidence in the company’s strategic direction and product innovations."
        </p>

        <div className="h-8"></div>

        <span className="text-[#D7B257C9] font-extrabold">Industry Analysis:</span>
        <p>
            "Experts believe Microsoft's strong position in cloud computing and AI development will drive continued growth in the coming years, particularly with its focus on expanding Azure services and integrating AI into its product suite."
        </p>
    </div>
}