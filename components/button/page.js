export default function Button(props) {
    return <button {...props} className={`bg-black text-white py-2 px-4 rounded-xl flex items-center justify-center hover:bg-gray-800 active:bg-gray-900 transition-all duration-200 ${props.className}`} />
}