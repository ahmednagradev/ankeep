"use client";

import { Archive, Pin, Trash2, Undo2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { appDispatch, rootState } from '@/store/store';
import { activateNote, deleteNotePermanently } from '@/store/notesSlice';

const Deleted = () => {
    const notesData = useSelector((state: rootState) => state.notes.notes);
    const dispatch = useDispatch<appDispatch>();

    const deletedNotes = notesData.filter(n => n.status === "deleted");

    return (
        <div className='flex flex-1 flex-col py-4 md:py-8'>
            <div className='flex flex-wrap gap-4 items-center justify-center mt-4 md:mt-8'>
                {
                    deletedNotes.map((note, index) => (
                        <div key={note.id} className='border border-[#5F6368] rounded-lg w-80 px-3 py-3 shadow-lg wrap-break-word whitespace-pre-wrap'>
                            <h1 className='text-xl mb-2'>{note.title}</h1>
                            <p>{note.text}</p>
                            <div className='flex justify-end'>
                                <div className='flex'>
                                    <button
                                        onClick={() => dispatch(activateNote({ id: note.id }))}
                                        className='md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-800 hover:text-white transition'
                                    >
                                        <Undo2 size={16} />
                                    </button>
                                    <button
                                        onClick={() => dispatch(deleteNotePermanently({ id: note.id }))}
                                        className='md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-800 hover:text-red-500 transition'
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Deleted;