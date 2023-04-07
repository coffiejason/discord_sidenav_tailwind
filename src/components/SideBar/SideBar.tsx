import React from 'react'
import {FaFire} from 'react-icons/fa'
import {BsPlus} from 'react-icons/bs'
import { BsFillLightningFill } from 'react-icons/bs'
import {FaPoo} from 'react-icons/fa'

const items = ["A","B","C","D"]

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 flex flex-col bg-primary text-secondary shadow-lg'>
        <SideBarIcon icon={<FaFire size="28"/>} />
        <SideBarIcon icon={<BsPlus size="32"/>} />
        <SideBarIcon icon={<BsFillLightningFill size="20"/>} />
        <SideBarIcon icon={<FaPoo size="20"/>} />
    </div>
  )
};

const SideBarIcon = ({icon,text="Tooltip💡"}:any) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

export default SideBar