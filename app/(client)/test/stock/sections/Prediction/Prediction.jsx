import Lock from "@/assets/svg/Lock";
import Graph from "./Graph";

export default function PredictionSection({ subscribed }) {
    return !subscribed ? <div className="text-xl flex flex-col">

        <div className="w-full flex justify-between">
            <div className="flex-1">
                <div className="w-[80%] flex flex-col">
                    <span className="text-[#D7B257C9] font-extrabold">PREDICTION</span>
                    <Graph />
                </div>
            </div>
            <div className="flex-1">
                <div className="w-[80%] flex flex-col">
                    <span className="text-[#D7B257C9] font-extrabold">ACTUAL</span>
                    <Graph />
                </div>
            </div>
        </div>
        <div className="h-8"></div>

        <div className="w-full flex justify-between">
            <div className="flex-1 flex flex-col">
                <span className="text-[#D7B257C9] font-extrabold">Analysis of Results: </span>
                <p>
                    Beetle Screener indicated an optimal entry at $365.00, with a target exit price of $370.00. The actual entry price was slightly lower at $364.80, allowing for a better-than-predicted initial position. The AI's exit strategy performed strongly, with the actual closing price surpassing the predicted target by 0.68%. The stop-loss safety net was not reached, indicating a stable trade throughout the period."
                </p>
            </div>
            <div className="flex-1 flex flex-col">
                <span className="text-[#D7B257C9] font-extrabold">Analysis of Results: </span>
                <p>
                    Beetle Screener indicated an optimal entry at $365.00, with a target exit price of $370.00. The actual entry price was slightly lower at $364.80, allowing for a better-than-predicted initial position. The AI's exit strategy performed strongly, with the actual closing price surpassing the predicted target by 0.68%. The stop-loss safety net was not reached, indicating a stable trade throughout the period."
                </p>
            </div>
        </div>
        <div className="h-8"></div>

        <span className="text-[#D7B257C9] font-extrabold">Analysis of Results: </span>
        <p>
            Beetle Screener indicated an optimal entry at $365.00, with a target exit price of $370.00. The actual entry price was slightly lower at $364.80, allowing for a better-than-predicted initial position. The AI's exit strategy performed strongly, with the actual closing price surpassing the predicted target by 0.68%. The stop-loss safety net was not reached, indicating a stable trade throughout the period."
        </p>
        <div className="h-8"></div>

        <span className="text-[#D7B257C9] font-extrabold">Key Influencing Factors: </span>
        <p>
            "Market response to Microsoft's quarterly earnings report exceeded expectations, driving up stock prices."<br />
            "Positive news about a new product launch contributed to a bullish trend, which the AI model successfully incorporated into its predictive algorithms."<br />
            "AI model adjustments for short-term volatility proved effective, minimizing risk exposure during uncertain market conditions."<br />
        </p>
        <div className="h-8"></div>

        <span className="text-[#D7B257C9] font-extrabold">Lessons Learned: </span>
        <p>
            "The performance of this trade demonstrates the Beetle Screener's capability to accurately predict market movements based on real-time data and advanced machine learning algorithms. Future predictions will further refine entry and exit strategies, taking into account additional factors such as macroeconomic indicators and sector-specific trends."
        </p>
        <div className="h-8"></div>

        <span className="text-[#D7B257C9] font-extrabold">Lessons Learned: </span>
        <p>
            "Based on this trade's outcome, enhancements to the AI model are underway to better anticipate market shifts caused by unforeseen global events. Users can expect even more precise predictions and tailored trade strategies in upcoming versions of Beetle Screener."
        </p>
        <div className="h-8"></div>


    </div> : <div className="flex-1 flex relative justify-center items-center">
        <Lock className="w-64 absolute pointer-events-none" />
        <p className="w-1/2 text-center text-lg">
            After entering the trade, you’ll be able to monitor how things are going in real time. We provide a Prediction vs. Actual summary that shows how our AI’s forecast matches up with what’s actually happening in the market.
            This is a great way to learn and adjust your strategy on the fly!
        </p>
    </div>
}