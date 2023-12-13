import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Sidebar,Flowbite } from "flowbite-react";
import { useState } from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

interface SideNavProps {
    showSidebar?: boolean;
    setShowSidebar?: (item: boolean) => void;
}
const customTheme: CustomFlowbiteTheme = {
    sidebar: {
        color: {
          primary: 'bg-red-500 hover:bg-red-600',
        },
      },
  };

const SideNav: React.FC<SideNavProps> = ({
    showSidebar,
    setShowSidebar,
}) => {

   
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false); // Set initially to true

    // Function to toggle collapsed state
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
    return (
        <>
            {showSidebar && ( 
                //  aria-label="Default sidebar example"
                <Flowbite theme={{ theme: customTheme }}>
                    <Sidebar  color="primary" collapsed={isCollapsed}>
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item href="#" icon={HiChartPie} onClick={() => { toggleCollapse(); } }>
                                    Dashboard
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiViewBoards}>
                                    Kanban
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiInbox}>
                                    Inbox
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiUser}>
                                    Users
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiShoppingBag}>
                                    Products
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                    Sign In
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiTable}>
                                    Sign Up
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                    </Flowbite>
           )} 
        </>

    );
}
export default SideNav;