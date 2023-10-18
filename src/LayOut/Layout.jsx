import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Layout = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Layout;