import AnalysisSection from "./Analysis/Analysis";
import HistorySection from "./History/History";
import NewsSection from "./News/News";
import PredictionSection from "./Prediction/Prediction";
import SummarySection from "./Summary/Summary";

export default function Session({ name }) {
    if (name === "Summary") return <SummarySection />
    else if (name === "Analysis") return <AnalysisSection />
    else if (name === "History") return <HistorySection />
    else if (name === "News") return <NewsSection />
    else if (name === "Prediction v/s Actual Analysis") return <PredictionSection />

    return <></>
}