import { Navbar, NavbarBrand, NavbarToggle } from "flowbite-react";

interface HeaderProps {
    showSidebar: boolean;
    setShowSidebar: (item: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ showSidebar, setShowSidebar }) => {
    return (
        <Navbar className="bg-gray-400" >
             
            <NavbarBrand onClick={() => {setShowSidebar(!showSidebar);}}  >   
            <NavbarToggle />  
                <img src="" className="mr-3 h-6 sm:h-9" alt="" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    RMS
                </span>
            </NavbarBrand>
            
        </Navbar>
    );
};
export default Header;
