import { Outlet } from "react-router-dom";

import Header from "../Header/Header";


const Layout = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Layout;