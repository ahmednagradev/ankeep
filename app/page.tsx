"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Archive, Check, Edit, Pin, PinOff, Save, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { appDispatch, rootState } from '@/store/store';
import { addNote, editNote, pinNote, archiveNote, deleteNote, activateNote, Note } from '@/store/notesSlice';

const Home = () => {
    const [showForm, setShowForm] = useState(false);
    const [inputText, setInputText] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const [editingId, setEditingId] = useState("");
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
        setShowForm(false);
    }

    let noteToEdit: Note | undefined;
    useEffect(() => {
        if (editingId) {
            setShowForm(true);
            noteToEdit = activeAndPinnedNotes.find(n => n.id === editingId);
            if (noteToEdit) {
                setInputTitle(noteToEdit.title);
                setInputText(noteToEdit.text);
            }
        }
    }, [editingId, noteToEdit]);


    const handleEdit = (id: string, title: string, text: string) => {
        if (!inputText.trim() || !inputTitle.trim()) return;
        dispatch(editNote({ id, title, text }))

        setInputTitle("");
        setInputText("");
        setShowForm(false);
        setEditingId("");
    }

    return (
        <div className='flex flex-1 flex-col py-6 md:py-8'>
            <div className='min-h-20 md:min-h-30 flex flex-col justify-center items-center'>

                <div
                    onClick={() => {
                        setShowForm(true)
                    }}
                    className={`${showForm ? "hidden" : ""} w-80 md:w-120 md:py-3.5 py-2.5 px-3 md:px-4 border border-[#5F6368] rounded-lg shadow-lg`}>
                    <p className='text-[#868789] font-semibold'>Take a note...</p>
                </div>

                <div className={`${!showForm ? "hidden" : ""} flex flex-col min-w-80 md:py-3 py-2 px-3 md:px-4 md:w-110 gap-1 md:gap-2 border-[#5F6368] border border-[#5F6368]-[#5F6368] rounded-lg shadow-lg`}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder='Title'
                        required={true}
                        className='outline-none text-xl'
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                    />
                    <textarea
                        ref={textareaRef}
                        placeholder='Take a note...'
                        required={true}
                        rows={3}
                        className='outline-none resize-none'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <div className='text-right'>
                        <button
                            type='submit'
                            onClick={() => !editingId ? handleAdd(inputTitle, inputText) : handleEdit(editingId, inputTitle, inputText)}
                            className='p-2 md:p-3 rounded-full text-gray-300 hover:bg-gray-900 hover:text-white'
                        >
                            {!editingId ? <Save size={17} /> : <Check size={17} />}
                        </button>
                    </div>
                </div>

            </div>

            <div className='flex flex-wrap gap-4 items-center justify-center mt-6 md:mt-8'>
                {
                    activeAndPinnedNotes.map((note, index) => (
                        <div key={note.id} className='border border-[#5F6368] rounded-lg w-80 px-3 py-3 shadow-lg wrap-break-word whitespace-pre-wrap'>
                            <h1 className='text-xl mb-2'>{note.title}</h1>
                            <p>{note.text}</p>
                            <div className='flex justify-end'>
                                <div className='flex'>
                                    <button
                                        onClick={() => note.status === "active" ? dispatch(pinNote({ id: note.id })) : dispatch(activateNote({ id: note.id }))}
                                        className={`${note.status === "pinned" ? "bg-gray-800" : ""} md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-900 hover:text-white transition`}
                                    >
                                        <Pin size={16} />
                                    </button>
                                    <button
                                        onClick={() => dispatch(archiveNote({ id: note.id }))}
                                        className='md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-900 hover:text-white transition'
                                    >
                                        <Archive size={16} />
                                    </button>
                                    <button
                                        onClick={() => setEditingId(note.id)}
                                        className='md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-900 hover:text-white transition'
                                    >
                                        <Edit size={16} />
                                    </button>
                                    <button
                                        onClick={() => dispatch(deleteNote({ id: note.id }))}
                                        className='md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-900 hover:text-red-500 transition'
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