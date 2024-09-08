import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return <div className="w-full h-screen flex bg-secondary">
        <div className="w-52 h-screen overflow-y-auto">
            <Sidebar />
        </div>
        <div className="flex-1 h-screen overflow-y-auto">
            {children}
        </div>

    </div>
}