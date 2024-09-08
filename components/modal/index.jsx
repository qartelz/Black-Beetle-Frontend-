export default function Modal({ children, open, onClose }) {
    return <div className={`fixed inset-0 bg-primary z-40 bg-opacity-80 flex items-center justify-center ${!open && 'hidden'}`}>
        <div className="fixed inset-0 bg-primary backdrop-blur-[2px] bg-opacity-50 z-40" onClick={onClose}></div>
        <div className="z-50">
            {children}
        </div>
    </div>
}