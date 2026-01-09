// "use client"

import { Archive, Notebook, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Sidebar = ({ showSidebar = false }) => {
  const router = useRouter();

  return (
    <div className={`${!showSidebar ? "hidden" : ""} fixed flex flex-1 bg-[#202124] border-r border-[#5F6368] opacity-90 w-40 md:w-60 min-h-[calc(100vh-58px)] md:min-h-[calc(100vh-70px)] py-2`}>
      <div className='flex flex-col w-full'>
        <div
          onClick={() => router.push("/")}
          className='flex items-center gap-4 w-full font-sm md:gap-6 px-4 md:px-6 py-3 rounded-r-full cursor-pointer hover:bg-gray-800 transition'
        >
          <Notebook size={17} />
          Notes
        </div>
        <div
          onClick={() => router.push("/archived")}
          className='flex items-center gap-4 w-full font-sm md:gap-6 px-4 md:px-6 py-3 rounded-r-full cursor-pointer hover:bg-gray-800 transition'
        >
          <Archive size={17} />
          Archives
        </div>
        <div
          onClick={() => router.push("/deleted")}
          className='flex items-center gap-4 w-full font-sm md:gap-6 px-4 md:px-6 py-3 rounded-r-full cursor-pointer hover:bg-gray-800 transition'
        >
          <Trash2 size={17} />
          Trash
        </div>
      </div>
    </div>
  )
}

export default Sidebar