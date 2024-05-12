import { Outlet } from "react-router-dom"
import Sidebar from "./layouts/sidebar"
import { TooltipProvider } from "./ui/tooltip"

const Layout = () => {
    return (
        <TooltipProvider>
            <main className="min-h-screen">

                <Sidebar />

                <div
                    className="flex flex-col ml-[57px] min-h-screen p-2"
                >
                    <Outlet />
                </div>
            </main>
        </TooltipProvider>
    )
}

export default Layout