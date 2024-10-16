import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return <div className="w-full h-screen flex flex-col lg:flex-row bg-secondary">
        <div className="h-16 w-full lg:w-56 lg:h-screen overflow-y-auto">
          
        </div>
        <div >
            {children}
        </div>

    </div>
}