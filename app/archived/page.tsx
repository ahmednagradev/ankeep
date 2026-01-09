"use client";

import { Archive, ArchiveRestore, Pin, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { appDispatch, rootState } from '@/store/store';
import { deleteNote, activateNote } from '@/store/notesSlice';

const Archived = () => {
	const notesData = useSelector((state: rootState) => state.notes.notes);
	const dispatch = useDispatch<appDispatch>();

	const archivedNotes = notesData.filter(n => n.status === "archived");

	return (
		<div className='flex flex-1 flex-col py-4 md:py-8'>
			<div className='flex flex-wrap gap-4 items-center justify-center mt-4 md:mt-8'>
				{
					archivedNotes.map((note, index) => (
						<div key={note.id} className='border border-[#5F6368] rounded-lg w-80 px-3 py-3 shadow-lg wrap-break-word whitespace-pre-wrap'>
							<h1 className='text-xl mb-2'>{note.title}</h1>
							<p>{note.text}</p>
							<div className='flex justify-end'>
								<div className='flex'>
									<button
										onClick={() => dispatch(activateNote({ id: note.id }))}
										className='md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-800 hover:text-white transition'
									>
										<ArchiveRestore size={16} />
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

export default Archived;