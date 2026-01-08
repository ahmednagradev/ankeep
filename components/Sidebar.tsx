import { Archive, Notebook, Trash2 } from 'lucide-react'

const Sidebar = ({ showSidebar = false }) => {
  return (
    <div className={`${!showSidebar ? "hidden" : ""} fixed flex flex-1 bg-[#202124] w-40 md:w-60 min-h-[calc(100vh-58px)] md:min-h-[calc(100vh-70px)] py-2`}>
      <div className='flex flex-col w-full'>
        <div className='flex gap-4 w-full font-sm md:gap-6 px-4 md:px-6 py-3 rounded-r-full cursor-pointer hover:bg-gray-800 transition'>
          <span><Notebook size={19} /></span>
          Notes
        </div>
        <div className='flex gap-4 w-full font-sm md:gap-6 px-4 md:px-6 py-3 rounded-r-full cursor-pointer hover:bg-gray-800 transition'>
          <span><Archive size={19} /></span>
          Archives
        </div>
        <div className='flex gap-4 w-full font-sm md:gap-6 px-4 md:px-6 py-3 rounded-r-full cursor-pointer hover:bg-gray-800 transition'>
          <span><Trash2 size={19} /></span>
          Trash
        </div>
      </div>
    </div>
  )
}

export default Sidebar