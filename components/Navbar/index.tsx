import Image from 'next/image'
import WomenProfile from '../../public/Images/Women_Profile.jpg'
import HelpIcon from '../../public/Images/HelpIcon.png'
import 'tailwindcss/tailwind.css'
export default function Home() {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="navbar bg-base-100" style={{ boxShadow: '0px 0px 10px #4b89dc' }}>
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

                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">ABC Company</a>
                        <a className="btn btn-ghost normal-case text-xl">BLR</a>
                        <a className="btn btn-ghost normal-case text-xl">Appliances</a>
                    </div>
                    <div className="flex-none">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>

                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>

                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>

                        <button className="btn btn-ghost btn-circle">
                            <Image
                                src={HelpIcon}
                                alt="Logo"
                                className="object-cover cursor-pointer"
                                height={100}
                                width={320}
                                layout="intrinsic"
                            />

                        </button>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image
                                        src={WomenProfile}
                                        alt="Logo"
                                        className="object-cover cursor-pointer"
                                        height={100}
                                        width={320}
                                        layout="intrinsic"
                                    />
                                </div>
                            </label>
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
            </div>
            <div className="drawer-side">
                <label htmlFor={"my-drawer"} className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>

                </ul>
            </div>
        </div>

    )
}
