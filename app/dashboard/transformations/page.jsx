'use client'

import { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';
import { LiaEyeSolid } from 'react-icons/lia';
import { BsArchive } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation'



const Transformations = () => {
    const [viewMore, setViewMore] = useState(false)

    const router = useRouter()

    useEffect(()=> {
        const userData = localStorage.getItem('userDetails')

        if(userData === null) {
            router.push('/')
        }
    }, [router])

    const toggleViewMore = () => {
        setViewMore(prevState=> !prevState)
    }

    return (
        <section className='  flex flex-col scroll-smooth'>
            <div className=' min-h-screen '>
                <div className="flex justify-between">
                    <h1 className="font-semi-bold text-lg">Transformations</h1>

                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3">
                            <button className="h-9 px-4 py-2 bg-primary rounded-md flex justify-center
                            items-center font-bold text-sm text-white"
                            >
                                Create a new Transformation
                            </button>

                            <button className="h-9 px-4 py-2 bg-primary rounded-md flex justify-center
                            items-center font-bold text-sm text-white"
                            >
                                Filters
                            </button>
                        </div>

                        <div className=' w-full '>
                            <div className="relative">
                                <input 
                                    type="search" name='email'
                                    placeholder="Search transformation"
                                    className='border border-solid rounded-lg border-gray-200 py-1 px-2 w-full'
                                />
                                <div className="absolute right-3 top-2">
                                    <IoSearch size={20} className="text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' border rounded-md mt-8 flex flex-col justify-between pb-6 h-full'>
                    <div class="grid grid-cols-3 gap-1 py-5 mb-28">
                        <div class="col-span-1 p-4 font-normal text-sm text-gray-600">Name</div>
                        <div class="col-span-1 p-4 font-normal text-sm text-gray-600 ml-1">Creation Date</div>
                        <div class="col-span-1 p-4 font-normal text-sm text-gray-600 pl-6">Status</div>

                        <div class="col-span-3 grid grid-cols-3 gap-4 border-b border-gray-200">

                            <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">Gotham Asylum</div>
                            <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">10th Aug, 2023</div>
                            <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center pr-8 relative">
                                <span className='px-3 py-1 bg-hover-bg rounded font-medium text-xs text-primary'>Paused</span> <BsThreeDotsVertical size={20} color="#828282" />
                            </div>
                        </div>

                        <div class="col-span-3 grid grid-cols-3 gap-4 border-b border-gray-200">
                            <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">Gotham Asylum</div>
                            <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">10th Aug, 2023</div>
                            <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center pr-8"
                            >
                                <span className='px-3 py-1 bg-gray-200 rounded font-medium text-xs text-white'>Archived</span> <BsThreeDotsVertical size={20} color="#828282" />
                            </div>
                        </div>

                        <div class="col-span-3 grid grid-cols-3 gap-4 border-b border-gray-200">
                            <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">Gotham Asylum</div>
                            <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">10th Aug, 2023</div>
                            <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center pr-8"
                            >
                                <span className='px-3 py-1 bg-hover-bg rounded font-medium text-xs text-primary'>Paused</span> <BsThreeDotsVertical size={20} color="#828282" />
                            </div>
                        </div>

                        <div class="col-span-3 grid grid-cols-3 gap-4 border-b border-gray-200">
                            <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">Gotham Asylum</div>
                            <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">10th Aug, 2023</div>
                            <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center pr-8 relative">
                                <span className='px-3 py-1 bg-gray-200 rounded font-medium text-xs text-white'>Archived</span> <BsThreeDotsVertical size={20} color="#828282" onClick={toggleViewMore} className='cursor-pointer active:text-primary' />
                                { viewMore && <div className='p-4 w-max rounded flex flex-col gap-2 bg-white absolute top-10 right-10 transition-all duration-300 shadow-md'>
                                    <div className='flex gap-2 items-center'><LiaEyeSolid size={13} className='text-gray-800' /> <p className='font-normal text-xs text-gray-800'>View Transformation</p></div>
                                    <div className='flex gap-2 items-center'><BsArchive size={13} className='text-gray-800' /> <p className='font-normal text-xs text-gray-800'>Archive Transformation</p></div>
                                    <div className='flex gap-2 items-center'><RiDeleteBinLine size={13} className='text-red-600' /> <p className='font-normal text-xs text-red-600 '>Delete</p></div>
                                </div>}
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-1 ml-6 '>
                        <div className='justify-end'>
                            <div className="w-6 h-6 bg-primary flex justify-center items-center rounded ">
                                <p className="text-sm font-sm  text-white leading-3">5</p>
                            </div>
                        </div>
                        <div className='justify-end'>
                            <div className="w-6 h-6 bg-gray-200 flex justify-center items-center rounded ">
                                <p className="text-sm font-sm  text-gray-400 leading-3">10</p>
                            </div>
                        </div>
                        <div className='justify-end'>
                            <div className="w-6 h-6 bg-gray-200 flex justify-center items-center rounded ">
                                <p className="text-sm font-sm  text-gray-400 leading-3">15</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Transformations;