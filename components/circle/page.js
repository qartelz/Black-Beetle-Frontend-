export default function Circle({ radius, color }) {
    return <div style={{ width: radius + 'px', height: radius + 'px', background: color }} className="rounded-full"/>
}