import { Menu, MoreHorizontal, Search } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <div className='border-b md:px-6 px-4 md:py-4 py-3 flex items-center'>
            <div>
                <Menu size={20} />
            </div>
            <div>
                <h2 className='md:mx-5 mx-3 text-xl md:text-2xl'>Notes</h2>
            </div>
            <div className='bg-amber-50 flex items-center px-3 md:py-1.5 py-1 rounded gap-2 md: hidden'>
                <span className="">
                    <Search color='gray' size={20}/>
                </span>
                <input className='outline-none text-black' type="text" />
            </div>
        </div>
    )
}

export default Navbar