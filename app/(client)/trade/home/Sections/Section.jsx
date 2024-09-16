import SectionA from "./SectionA"
import SectionB from "./SectionB"
import SectionC from "./SectionC"

export default function Section({ section }) {
    if (section === 1) return <SectionA />
    if (section === 2 || section === 3) return <SectionB />
    if (section === 4) return <SectionC />

    return <></>
}