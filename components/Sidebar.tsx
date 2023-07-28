import React from 'react';
import Image from 'next/image';
import Logo from "@/public/assets/Images/Logo.jpg"
import { FiSettings } from 'react-icons/fi'
import { VscGraph, VscSettings } from 'react-icons/vsc'
import { TbPageBreak } from 'react-icons/tb'
import { GiSecurityGate } from 'react-icons/gi'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { sideMenuList } from '@/resources/sideMenuLists'

const Sidebar: React.FC = () => {
    const router = useRouter();
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay" />
            <aside className="bg-base-100 w-80 sidebar">
                <div className="h-4 " />
                <Image
                    style={{ maxHeight: '5rem' }}
                    src={Logo}
                    alt="Logo"
                    className="object-cover cursor-pointer"
                    height={100}
                    width={300}
                    layout="intrinsic"
                />
                <ul className="menu menu-sm lg:menu-md px-4 py-0 ">
                    <li />
                    {sideMenuList.map((_item: any, index: any) => (
                        <>
                            {_item.subMenu ?
                                <li key={`nav-${_item.menu}`} className='mt-4'>
                                    <details open={_item.subMenu.some((item: any) => item.redirect === router.pathname)}>
                                        <summary className='text-gray-500 hover:bg-indigo-100'><span
                                        >
                                            <VscGraph className='w-6 h-6' />

                                        </span ><span className='text-xl ml-4'>{_item.menu}</span></summary>
                                        {/* For Submenus */}
                                        <ul>
                                            {_item.subMenu.map((sub_menu: any) => (
                                                <li key={`nav-${sub_menu.menu}`} className={router.pathname === sub_menu.redirect ? 'bg-indigo-100 text-blue-500 rounded-xl mt-4' : 'text-gray-500 mt-4'}>
                                                    <Link href={sub_menu.redirect} data-sveltekit-preload-data="hover" id="" className={router.pathname === sub_menu.redirect ? '' : 'hover:bg-indigo-100'}>
                                                        <span className={router.pathname === sub_menu.redirect ? 'text-xl ml-2  text-blue-500' : "text-lg ml-2 text-gray-500 "}>{sub_menu.menu}</span>

                                                    </Link>
                                                </li>
                                            ))}

                                        </ul>
                                    </details>
                                </li>
                                :
                                <li key={`nav-${_item.menu}`} className={router.pathname === _item.redirect ? 'bg-indigo-100 text-blue-500 rounded-xl mt-4' : 'text-gray-500 mt-4'}>
                                    <Link href={_item.redirect} data-sveltekit-preload-data="hover" id="" className={router.pathname === _item.redirect ? '' : 'hover:bg-indigo-100 rounded-xl'}>

                                        <_item.Icons className='w-6 h-6' />
                                        <span className={router.pathname === _item.redirect ? 'text-xl ml-2  text-blue-500' : "text-lg ml-2 text-gray-500 "}>{_item.menu}</span>

                                    </Link>
                                </li>
                            }
                        </>
                    ))}
                </ul>
                {/* <li>
                        <a href="/" data-sveltekit-preload-data="hover" id="" className='text-gray-500 hover:bg-indigo-100 '
                        ><span
                        >
                                <FiSettings className='w-6 h-6' />
                            </span> <span className="text-xl ml-4">Configurations</span>
                        </a >
                    </li>

                    <li className='mt-4'>
                        <details open>
                            <summary className='text-gray-500 hover:bg-indigo-100'><span
                            >
                                <VscGraph className='w-6 h-6' />

                            </span ><span className='text-xl ml-4'> Masters</span></summary>
                            <ul>
                                <li className={router.pathname === '/masters/location-master' ? 'bg-indigo-100 text-blue-500 rounded-xl mt-4' : 'mt-4'}><Link href={'/masters/location-master'}><div  data-sveltekit-preload-data="hover" id="" className={router.pathname === '/masters/location-master' ? '' :'hover:bg-indigo-100'}><span className={router.pathname === '/masters/location-master' ? 'text-xl ml-2  text-blue-500' :"text-lg ml-2 text-gray-500 "}>Location</span></div></Link></li>
                                <li><a href="#" data-sveltekit-preload-data="hover" id="" className='hover:bg-indigo-100'><span className="text-lg ml-2 text-gray-500">Supplier</span></a></li>
                                <li><a href="#" data-sveltekit-preload-data="hover" id="" className='hover:bg-indigo-100'><span className="text-lg ml-2 text-gray-500">Customer</span></a></li>
                                <li><a href="#" data-sveltekit-preload-data="hover" id="" className='hover:bg-indigo-100'><span className="text-lg ml-2 text-gray-500">Carrier</span></a></li>
                                <li><a href="#" data-sveltekit-preload-data="hover" id="" className='hover:bg-indigo-100'><span className="text-lg ml-2 text-gray-500">Fleet</span></a></li>
                            </ul>
                        </details>
                    </li>

                    <li className='mt-4'>
                        <a href="/" data-sveltekit-preload-data="hover" id="" className="text-gray-500 hover:bg-indigo-100"
                        ><span
                        >
                                <VscSettings className='w-6 h-6' />
                            </span> <span className="text-xl ml-4">SKU Settings</span>
                        </a >
                    </li>

                    <li className='mt-4'>
                        <a href="/" data-sveltekit-preload-data="hover" id="" className="text-gray-500 hover:bg-indigo-100"
                        ><span
                        >
                                <TbPageBreak className='w-6 h-6' />
                            </span> <span className="text-xl ml-4">ASN</span>
                        </a >
                    </li>

                    <li className='mt-4 mb-4'>
                        <a href="/" data-sveltekit-preload-data="hover" id="" className="text-gray-500 hover:bg-indigo-100"
                        ><span
                        >
                                <GiSecurityGate className='w-6 h-6' />
                            </span> <span className="text-xl ml-4">Gate Operations</span>
                        </a >
                    </li> */}

                <ul className="menu menu-sm lg:menu-md px-4 py-0">
                    <li className='mt-4' />
                    {/*<li className="menu-title flex flex-row gap-4">
                        <span className="text-base-content"
                        >
                        </span> <span>System</span>
                    </li> */}

                    <li className='mt-4'>
                        <a href="/" data-sveltekit-preload-data="hover" id="" className="text-gray-500 hover:bg-indigo-100"
                        ><span
                        >
                                <FiSettings className='w-6 h-6' />
                            </span> <span className="text-xl ml-4">Settings</span>
                        </a >
                    </li>
                </ul>

                <div
                    className="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"
                />
            </aside>
        </div>
    )
}
export default Sidebar;