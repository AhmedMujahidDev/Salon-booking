import React from 'react'
import Logo from '../Navbar/Logo'
import DesktopNav from '../Navbar/DesktopNav'
import MobileNav from '../Navbar/MobileNav'
import RightActions from '../Navbar/RightActions'
import SideView from '../Navbar/SideView'


const MainHeader = () => {
    return (
        <header className="relative pt-10">
            <div className="container-custom">
                <div className="relative flex h-16 sm:h-20 items-center justify-between rounded-xl bg-background px-8 shadow-sm">
                    {/* Left Menu */}
                    <div className="w-[53%]">
                        <DesktopNav />
                    </div>

                    {/* Center Logo */}
                    <Logo />

                    {/* Right Side */}
                    <RightActions />

                    <SideView />
                </div>
            </div>
        </header>
    )
}

export default MainHeader