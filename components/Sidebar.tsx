import { Archive, Notebook, Trash2 } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='w-50 py-2'>
      <div className='flex flex-col'>
        <div className='flex font-semibold gap-6 text-sm px-6 py-3 rounded-r-full cursor-pointer hover:bg-gray-800 transition'>
          <span><Notebook size={18}/></span>
          Notes
        </div>
        <div className='flex font-semibold gap-6 text-sm px-6 py-3 rounded-r-full cursor-pointer hover:bg-gray-800 transition'>
          <span><Archive size={18}/></span>
          Archives
        </div>
        <div className='flex font-semibold gap-6 text-sm px-6 py-3 rounded-r-full cursor-pointer hover:bg-gray-800 transition'>
          <span><Trash2 size={18}/></span>
          Trash
        </div>
      </div>
    </div>
  )
}

export default Sidebar