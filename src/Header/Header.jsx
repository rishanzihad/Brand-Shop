import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Toggle from "../Toggle";





const Header = () => {
    const { user, logOut } = useContext(AuthContext)
 
    const links = <>
        <div className="gap-2 lg:flex  flex-row">
            <li className="text-xl"> <NavLink to='/' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-400 underline ' : ''}>Home</NavLink> </li>
            {
                user ? <li className="text-xl"> <NavLink to='/addedcart' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-400 underline ' : ''}>Add Cart</NavLink> </li> : <li className="text-xl"> <Link to='/login' >Add Product</Link> </li>
            }
            {
                user ? <li className="text-xl"> <NavLink to='/mycart' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-400 underline ' : ''}>My Cart</NavLink> </li> : <li className="text-xl"> <Link to='/login' >My Cart</Link> </li>
            }


        </div>


    </>

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/Q8x7YJf/OSO1XY0.jpg" className="max-h-[35px]" alt="" />
                    <Link to='/' className="btn btn-ghost font-bold normal-case text-s md:text-3xl">Technology And Electronics</Link>
                </div>
                <div className="ml-48 md:ml-64"><Toggle></Toggle></div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>



                <div className="navbar-end">

                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost" onClick={logOut}>Logout</button>
                                    
                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Header;
