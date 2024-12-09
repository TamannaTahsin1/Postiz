import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedComponents/Navbar/Navbar";
import Footer from "../Components/SharedComponents/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;