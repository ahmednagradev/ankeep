"use client";
import React, { useRef, useState } from 'react'
import { Archive, Pin, PinOff, Save, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { appDispatch, rootState } from '@/store/store';
import { addNote, pinNote, archiveNote, deleteNote, activateNote } from '@/store/notesSlice';

const Home = () => {
    const [showForm, setShowForm] = useState(false);
    const [inputText, setInputText] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const inputRef = useRef(null);  //
    const textareaRef = useRef(null);  //
    const notesData = useSelector((state: rootState) => state.notes.notes);
    const dispatch = useDispatch<appDispatch>();

    const activeNotes = notesData.filter(n => n.status === "active");
    const pinnedNotes = notesData.filter(n => n.status === "pinned");

    const activeAndPinnedNotes = [...pinnedNotes, ...activeNotes]

    const handleAdd = (title: string, text: string) => {
        if (!inputText.trim() || !inputTitle.trim()) return;
        dispatch(addNote({ title, text }))

        setInputTitle("");
        setInputText("");
    }

    return (
        <div className='flex flex-1 flex-col py-4 md:py-8'>
            <div className='min-h-20 md:min-h-30 flex flex-col justify-center items-center'>

                <div
                    onClick={() => {
                        setShowForm(true)
                    }}
                    className={`${showForm ? "hidden" : ""} w-80 md:w-120 md:py-3.5 py-2.5 px-3 md:px-4 border border-[#5F6368] rounded-lg shadow-lg`}>
                    <p className='text-[#868789]'>Take a note...</p>
                </div>

                <div className={`${!showForm ? "hidden" : ""} flex flex-col min-w-80 md:py-3 py-2 px-3 md:px-4 md:w-110 gap-1 md:gap-2 border-[#5F6368] border border-[#5F6368]-[#5F6368] rounded-lg shadow-lg`}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder='Title'
                        className='outline-none text-xl'
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                    />
                    <textarea
                        ref={textareaRef}
                        placeholder='Take a note...'
                        rows={3}
                        className='outline-none resize-none'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <div className='text-right'>
                        <button
                            type='submit'
                            onClick={() => handleAdd(inputTitle, inputText)}
                            className='p-2 md:p-3 rounded-full text-gray-300 hover:bg-gray-800 hover:text-white'
                        >
                            <Save size={17} />
                        </button>
                    </div>
                </div>

            </div>

            <div className='flex flex-wrap gap-4 items-center justify-center mt-4 md:mt-8'>
                {
                    activeAndPinnedNotes.map((note, index) => (
                        <div key={note.id} className='border border-[#5F6368] rounded-lg w-80 px-3 py-3 shadow-lg wrap-break-word whitespace-pre-wrap'>
                            <h1 className='text-xl mb-2'>{note.title}</h1>
                            <p>{note.text}</p>
                            <div className='flex justify-end'>
                                <div className='flex'>
                                    <button
                                        onClick={() => note.status === "active" ? dispatch(pinNote({ id: note.id })) : dispatch(activateNote({ id: note.id }))}
                                        className='md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-800 hover:text-white transition'
                                    >
                                        {note.status === "active" ? <Pin size={16} /> : <PinOff size={16} />}
                                    </button>
                                    <button
                                        onClick={() => dispatch(archiveNote({ id: note.id }))}
                                        className='md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-800 hover:text-white transition'
                                    >
                                        <Archive size={16} />
                                    </button>
                                    <button
                                        onClick={() => dispatch(deleteNote({ id: note.id }))}
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

export default Home


// new Date(Date.now()).toLocaleDateString()
// new Date(Date.now()).toLocaleTimeString()