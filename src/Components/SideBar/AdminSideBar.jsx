import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { PiStudentBold } from 'react-icons/pi';
import { RiDashboardFill } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';
import { TiGroupOutline } from "react-icons/ti";
import { FcDepartment } from "react-icons/fc";
import { FaPersonChalkboard } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import { SiGoogleclassroom } from "react-icons/si";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: 'Staff' },
    { title: 'Department' },
    { title: 'Staff advisor' },
    // {
    //   title: '',
    //   submenu: 'true',
    //   submenuItem: [
    //     { title: 'submenu menu 1' },
    //     { title: 'submenu menu 2 ' },
    //     { title: 'submenu menu 2' },
    //   ],
    // },
    { title: 'student' },
    
    {title:'Branch'},
    
    { title: 'logout' },
  ];

  const Icons = [
    <TiGroupOutline key='Staff'/>,
    <FcDepartment key='Department'/>,
    <FaPersonChalkboard key="Staff Advisor" />,
    <PiStudent key="student" />,
    <SiGoogleclassroom key="Branch"/>,

    <IoIosLogOut key="logout" />,
    <RiDashboardFill key="dashboard" />,
    <RiDashboardFill key="dashboard" />,
    <RiDashboardFill key="dashboard" />,
    <RiDashboardFill key="dashboard" />,
    <RiDashboardFill key="dashboard" />,
    
  ];

  let containerClass = 'bg-dark-black h-full p-5 pt-8 fixed top-0 left-0';
  if (open) {
    containerClass += ' w-[17rem]';
  } else {
    containerClass += ' w-20';
  }
  containerClass += ' relative duration-300';

  return (
    <div className="flex">
      <div className={containerClass}>
        <AiOutlineArrowLeft
          onClick={() => {
            setOpen(!open);
          }}
          className={`sm : block bg-white text-dark-purple text-3xl rounded-full absolute  hidden -right-3 top-9 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}`}
        ></AiOutlineArrowLeft>
        <div></div>
        <div className="flex gap-5 items-center ">
          <PiStudentBold className="bg-yellow-400 text-red text-5xl"></PiStudentBold>
          <div className={`text-3xl text-white ${!open && 'hidden'} duration-300`}> Admin </div>
        </div>
        <div className="flex items-center rounded-md bg-light-white mt-6 px-2.5 py-2">
          <BsSearch className=" text-lg block float-left cursor-pointer mr-2.5"></BsSearch>
          <input
            type="search"
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`}
          />
        </div>
        <ul className="pb-3 pt-3 ">
          {Menus.map((menuitem, index) => (
            <li
              key={index}
              className="text-gray-50  flex pl-[30px] items-center text-sm gap-x-4 cursor-pointer p-2 hover:bg-light-white mt-2 rounded-lg"
            >
              <span className="text-white block float-left text-4xl">{Icons[index]}</span>
              <Link to={`/${menuitem.title.toLowerCase()}`} className={`${!open && 'hidden '}`}>{menuitem.title}</Link>
            </li>
          ))}
          <li className=''></li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
