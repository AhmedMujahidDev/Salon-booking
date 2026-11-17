import React from 'react'
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className="hidden text-fluid-sm text-primary-foreground lg:block">
      <div className="container-custom flex items-center justify-between gap-1 px-4 py-2">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <LuPhone />
            <p>+92 xxx xxxxxxx</p>
          </div>

          <div className="flex items-center gap-2">
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