import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import {useState} from "react";

function Dashboard() {
    const [showSidebar, setShowSidebar] = useState(true);
   

    return (
        <>
       
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            <div className="flex">
                    <SideNav showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                    <Outlet />
            </div>
        </>
    );
}

export default Dashboard;


