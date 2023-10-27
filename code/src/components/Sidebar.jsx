import React from 'react'
import { links } from "../data/dummy";
import { Link, NavLink } from 'react-router-dom';
import { SiShopware ,SiFauna} from 'react-icons/si';
import { UseStateContext } from "../context/ContextProvider";
import { MdOutlineCancel } from 'react-icons/md';
import { IoIosCar } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { TbMessage2Question, TbUserCheck } from "react-icons/tb";
import { MdQuiz, MdGolfCourse } from "react-icons/md";
import { VscTypeHierarchy } from "react-icons/vsc";
import { LuUserCheck } from "react-icons/lu";
const Sidebar = () => {

    const { currentColor, activeMenu, setActiveMenu, screenSize } = UseStateContext();

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
            setActiveMenu(false);
        }
    };
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';


    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                            <SiFauna /> <span>Dryver</span>
                        </Link>
                        {/* <TooltipComponent content="Menu" position="BottomCenter"> */}
                        <button
                            type="button"
                            onClick={() => setActiveMenu(!activeMenu)}
                            style={{ color: currentColor }}
                            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block "
                        >
                            <MdOutlineCancel />
                        </button>
                        {/* </TooltipComponent> */}
                    </div>
                    <div className="mt-10 ">
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                                    {item.title}
                                </p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.name}`}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        style={({ isActive }) => ({
                                            backgroundColor: isActive ? currentColor : '',
                                        })}
                                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                    >
                                        {link.icon}
                                        <span className="capitalize ">{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Sidebar