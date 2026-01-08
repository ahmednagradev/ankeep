import { createSlice } from "@reduxjs/toolkit";

export type Note = {
    id: string;
    title?: string;
    text: string;
    imageUrl?: string;
    createdAt: number;
    archivedAt?: number;
    deletedAt?: number;
    status: "active" | "archived" | "deleted";
}

type NotesState = {
    notes: Note[];
}

const initialState: NotesState = {
    notes: []
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        
    }
})

export const {  } = notesSlice.actions;
export default notesSlice.reducer;