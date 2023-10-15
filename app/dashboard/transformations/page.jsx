'use client'

import { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';
import { useRouter } from 'next/navigation'



const Transformations = () => {
    const router = useRouter()

    useEffect(()=> {
        const userData = localStorage.getItem('userDetails')

        if(userData === null) {
            router.push('/')
        }
    }, [router])


   






    return (
        <section className='min-h-screen  overflow-y-auto flex flex-col mb-44'>
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

            <div class="grid grid-cols-3 gap-1 mt-8 py-5  border rounded-md overflow-y-auto">
                <div class="col-span-1 p-4 font-normal text-sm text-gray-600">Name</div>
                <div class="col-span-1 p-4 font-normal text-sm text-gray-600">Creation Date</div>
                <div class="col-span-1 p-4 font-normal text-sm text-gray-600 pl-6">Status</div>

                <div class="col-span-3 grid grid-cols-3 gap-4 border-b border-gray-200">
                    <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">Gotham Asylum</div>
                    <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">10th Aug, 2023</div>
                    <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center pr-8"
                    >
                        <span className='px-3 py-1 bg-hover-bg rounded font-medium text-xs text-primary'>Paused</span> <BsThreeDotsVertical color="#828282" />
                    </div>
                </div>

                <div class="col-span-3 grid grid-cols-3 gap-4 border-b border-gray-200">
                    <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">Gotham Asylum</div>
                    <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">10th Aug, 2023</div>
                    <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center pr-8"
                    >
                        <span className='px-3 py-1 bg-gray-200 rounded font-medium text-xs text-white'>Archived</span> <BsThreeDotsVertical color="#828282" />
                    </div>
                </div>

                <div class="col-span-3 grid grid-cols-3 gap-4 border-b border-gray-200">
                    <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">Gotham Asylum</div>
                    <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">10th Aug, 2023</div>
                    <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center pr-8"
                    >
                        <span className='px-3 py-1 bg-hover-bg rounded font-medium text-xs text-primary'>Paused</span> <BsThreeDotsVertical color="#828282" />
                    </div>
                </div>

                <div class="col-span-3 grid grid-cols-3 gap-4 border-b border-gray-200">
                    <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">Gotham Asylum</div>
                    <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center">10th Aug, 2023</div>
                    <div class="col-span-1 p-4 font-normal text-sm text-gray-600 flex justify-between items-center pr-8"
                    >
                        <span className='px-3 py-1 bg-gray-200 rounded font-medium text-xs text-white'>Archived</span> <BsThreeDotsVertical color="#828282" />
                    </div>
                </div>

                

                <div className='flex gap-1 mt-80 ml-6'>

                    <div className='justify-end'>
                        <div className="w-6 h-6 bg-primary flex justify-center items-center rounded ">
                            <p className="text-sm font-sm  text-white leading-3">5</p>
                        </div>
                    </div>
                    <div className='justify-end'>
                        <div className="w-6 h-6 bg-gray-200 flex justify-center items-center rounded ">
                            <p className="text-sm font-sm  text-white leading-3">10</p>
                        </div>
                    </div>
                    <div className='justify-end'>
                        <div className="w-6 h-6 bg-gray-200 flex justify-center items-center rounded ">
                            <p className="text-sm font-sm  text-white leading-3">15</p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
 
export default Transformations;