import React from 'react'
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";

const TopBar = () => {
    return (
        <div className='text-white text-sm'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between py-2 px-4'>
                <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-5'>
                    <div className='flex items-center gap-2'>
                        <LuPhone />
                        <p>+92 xxx xxxxxxx</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <AiOutlineMail />
                        <p>info@example.com</p>
                    </div>
                </div>
                <p>742 Evergreen Terrace Springfield, IL 62704, USA</p>
            </div>
        </div>
    )
}

export default TopBar