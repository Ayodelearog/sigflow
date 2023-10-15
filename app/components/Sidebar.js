'use client'
import Image from "next/image";
import { LuLink } from 'react-icons/lu';
import { BsFileText } from 'react-icons/bs';
import { SlSettings } from 'react-icons/sl';

import { RxTransform } from 'react-icons/rx';
import { LuUser } from 'react-icons/lu';
import { GoBook } from 'react-icons/go';
import { CiShare1 } from 'react-icons/ci';

import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Sidebar = () => {
    const pathname = usePathname()


    const style = {
        backgroundColor: '#ECFDF3',
        textColor: '#32D583'
    }

    return (
        <div className=" h-screen">
        <div className="px-8 pt-10 pb-5 border-b border-gray-200">
            <Image
                src="/Sigflow logo.png"
                width={90}
                height={25}
                alt="Sigflow logo"
                className=''
            />

            <div className="flex justify-between items-center
             mt-7 p-4 w-full border-2px rounded-md bg-gray-100 h-8">
                <p className="font-bold text-sm text-gray-900">Sigflow</p>
                <Image 
                    src='/chevron-selector-vertical.png'
                    width={15}
                    height={15}
                    alt=""
                />
            </div>

            <div className="mt-1 flex flex-col gap-1 ml-3 w-full">
                <Link href='/dashboard'>

                    <div className={`flex gap-3 items-center w-full py-2 px-3 rounded-md group hover:bg-hover-bg cursor-pointer
                    transition ease-in-out duration-500 ${pathname === '/dashboard' ? 'bg-hover-bg text-primary' : ''}`}>
                        <BsFileText size={20} className={`text-gray-500 ${pathname === '/dashboard' ? ' text-primary' : ''}`}/>
                        
                        <p className={`font-md text-sm text-gray-600 group-hover:text-primary
                            group-hover:font-semibold group-transition ease-in-out duration-500
                            ${pathname === '/dashboard' ? ' text-primary font-medium' : ''}`}
                        >
                            Events
                      </p>
                    </div>
                </Link>

                <div className="flex gap-3 items-center w-full py-2 px-3 rounded-md group hover:bg-hover-bg cursor-pointer
                transition ease-in-out duration-500">
                    <LuLink size={20} className="text-gray-500"/>
                    <p className="font-md text-sm text-gray-600 group-hover:text-primary
                        group-hover:font-semibold group-transition ease-in-out duration-500"
                        >
                            Pipeline
                    </p>
                </div>

                <div className="flex gap-3 items-center w-full py-2 px-3 rounded-md group hover:bg-hover-bg cursor-pointer
                transition ease-in-out duration-500">
                    <CiShare1 size={20} className="text-gray-500"/>
                    <p className="font-md text-sm text-gray-600 group-hover:text-primary
                     group-hover:font-semibold group-transition ease-in-out duration-500"
                    >
                        Source
                    </p>
                </div>

                <div className="flex gap-3 items-center w-full py-2 px-3 rounded-md group hover:bg-hover-bg cursor-pointer
                transition ease-in-out duration-500">
                    <CiShare1 size={20} className="text-gray-500"/>
                    <p className="font-md text-sm text-gray-600 group-hover:text-primary
                        group-hover:font-semibold group-transition ease-in-out duration-500"
                    >
                        Destination
                    </p>
                </div>

                <Link href='/dashboard/transformations'>
                    <div className={`flex gap-3 items-center w-full py-2 px-3 rounded-md group hover:bg-hover-bg cursor-pointer
                        transition ease-in-out duration-500 ${pathname === '/dashboard/transformations' ? 'group bg-hover-bg text-primary' : ''}`}>
                        <RxTransform size={20} className={` text-gray-500 ${pathname === '/dashboard/transformations' ? 'text-primary' : ''}`}/>

                        <p className={`font-md text-sm text-gray-600 group-hover:text-primary
                            group-hover:font-semibold group-transition ease-in-out duration-500
                            ${pathname === '/dashboard/transformations' ? 'text-primary font-md' : ''}`}
                        >
                            Transformations
                        </p>
                    </div>
                </Link>

            </div>
            
        </div>

        <div className="px-8 pb-2 flex flex-col justify-between gap-80 ">
            <div className="mt-6 flex flex-col gap-1 ml-3 w-full ">
                <div className="flex gap-3 items-center w-full py-2 px-3 rounded-md group hover:bg-hover-bg cursor-pointer
                transition ease-in-out duration-500">
                    <LuUser size={20} className="text-gray-500"/>
                    
                    <p className="font-md text-sm text-gray-600 group-hover:text-primary
                        group-hover:font-semibold group-transition ease-in-out duration-500"
                    >
                        Account
                    </p>
                </div>

                <div className="flex gap-3 items-center w-full py-2 px-3 rounded-md group hover:bg-hover-bg cursor-pointer
                    transition ease-in-out duration-500">
                    <SlSettings size={20} className="text-gray-500"/>
                    <p className="font-md text-sm text-gray-600 group-hover:text-primary
                        group-hover:font-semibold group-transition ease-in-out duration-500"
                    >
                        Settings
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-1 ml-3 w-full ">
                <div className="flex gap-3 items-center w-full py-2 px-3 rounded-md group hover:bg-hover-bg cursor-pointer
                transition ease-in-out duration-500">
                    <GoBook size={20} className="text-primary"/>
                    
                    <p className="font-semibold text-sm text-primary ">Help</p>
                </div>

                <div className="flex gap-3 items-center w-full py-2 px-3 rounded-md group hover:bg-hover-bg cursor-pointer
                    transition ease-in-out duration-500">
                    <GoBook size={20} className="text-primary"/>
                    <p className="font-semibold text-sm text-primary ">Documentation</p>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default Sidebar;