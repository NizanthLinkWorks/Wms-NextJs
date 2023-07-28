import Image from 'next/image'
import WomenProfile from '@/public/assets/Images/Women_Profile.jpg'
import HelpIcon from '@/public/assets//Images/HelpIcon.png'
import { RiArrowDropDownLine } from 'react-icons/ri'
import 'tailwindcss/tailwind.css'
import React from 'react'
import Sidebar from './Sidebar'
interface NavbarProps {
    children: React.ReactNode;
}
const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* style={{ boxShadow: '0px 0px 10px #4b89dc' }} */}
                <div className="navbar bg-base-100 shadow-2xl border-b" >
                    <div className="flex-none">
                        <label htmlFor="my-drawer" tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                /></svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">Location</a>
                    </div>

                    <div className="flex-none">
                        <label className="btn btn-ghost tn m-1 normal-case">ABC Company</label>
                        <label className="btn btn-ghost tn m-1 normal-case">BLR</label>
                        <label className="btn btn-ghost tn m-1 normal-case">Appliances</label>
                        {/* <button className="btn btn-ghost btn-circle">
                            <Image
                                src={HelpIcon}
                                alt="Logo"
                                className="object-cover cursor-pointer"
                                height={100}
                                width={320}
                                layout="intrinsic"
                            /> 

                        </button>*/}
                        <div className="avatar" tabIndex={0}>
                            <div className="w-12 rounded-full">
                                <Image
                                    src={WomenProfile}
                                    alt="Logo"
                                    className="object-cover cursor-pointer"
                                    height={100}
                                    width={320}
                                    layout="intrinsic"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col ml-4 mr-4">
                                <span className='text-2xl font-medium'>Anna George</span>
                                <span className='text-sm '>Admin</span>
                            </div>
                        </div>

                        <div className="dropdown dropdown-end">
                            <RiArrowDropDownLine className='text-3xl cursor-pointer' tabIndex={0} />
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div >{children}</div>
            </div>
            <Sidebar />
        </div>

    )
}

export default Navbar;
