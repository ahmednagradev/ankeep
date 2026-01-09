import { Menu, RotateCcw, Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

const Navbar = ({ onToggleSidebar }: any) => {
    const searchParams = useSearchParams();
    console.log(searchParams);
    return (
        <div className='border-b border-[#5F6368] md:px-3 px-1 md:py-3 py-2 flex items-center justify-between bg-[#202124] fixed w-screen'>
            <div className='flex items-center gap-2 md:gap-3'>
                <span
                    onClick={onToggleSidebar}
                    className='p-2.5 md:p-3 rounded-full hover:bg-gray-800 transition'>
                    <Menu size={20} />
                </span>
                <h2 className='text-xl md:text-2xl text-gray-200'>Ankeep</h2>
            </div>
            <div className='flex items-center gap-2 md:gap-4'>
                <span className='p-2.5 md:p-3 rounded-full hover:bg-gray-800 transition'>
                    <Search size={20} />
                </span>
                <span className='p-2.5 md:p-3 rounded-full hover:bg-gray-800 transition'>
                    <RotateCcw size={20} />
                </span>
                <div className='h-9 w-9 md:h-10 md:w-10 bg-amber-200 rounded-full mx-1 md:mx-2'>
                </div>
            </div>
        </div>
    )
}

export default Navbar