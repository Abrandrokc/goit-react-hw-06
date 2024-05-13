import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid/non-secure";
import { useSelector } from "react-redux";

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
        ]
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                        id: nanoid(),
                        name: text.name,
                       number: text.number
                    }
                };
            }
        },
        deleteContact(state, action) {
            const index = state.items.findIndex(item => item.id === action.payload);
           
                state.items.splice(index, 1);
            
        }
    }
});
const foundElement = slice.getInitialState().items.findIndex(item => item.id === "id-2");
console.log(foundElement)
console.log(slice.getInitialState());

export const item = (state) => state.contacts.items;


export default slice.reducer;
export const { addContact, deleteContact } = slice.actions;
