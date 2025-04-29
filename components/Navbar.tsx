import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='px-4 md:px-12 py-4 md:py-6 bg-slate-100 border border-slate-300 text-black shadow-sm'>
            <div className='flex items-center justify-between'>
                <Link href={'/'} className='hidden md:inline-block text-lg font-semibold'>ZWatches</Link>
                <div className='relative max-w-[300px] md:w-[400px]'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                        <Search className='w-4 h-4 ' />
                    </div>
                    <input 
                    type="text" 
                    className='h-[36px] relative pl-10 border-[1px] border-black/[0.7] text-sm rounded-[8px] w-full py-2 px-3 focus:outline-none bg-transparent' placeholder='Search' />
                </div>
                <Link href={'/add-product'}>
                    <button 
                    className='bg-[#212529] text-white px-3 py-2 rounded-md cursor-pointer hover:bg-[#444] transition-all duration-300 ease-in-out'>
                        Add Product
                        </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;