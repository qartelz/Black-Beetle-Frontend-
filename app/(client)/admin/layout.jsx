import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return <div className="w-full h-screen flex flex-col lg:flex-row bg-secondary">
        <div className="h-16 w-full lg:w-52 lg:h-screen overflow-y-auto">
            <Sidebar />
        </div>
        <div className="flex-1 h-screen overflow-y-auto">
            {children}
        </div>

    </div>
}