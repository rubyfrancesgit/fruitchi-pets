import { createSlice } from '@reduxjs/toolkit';

export const myFruitchiPetSlice = createSlice({
    name: 'myFruitchiPet',
    initialState: {value: null},
    reducers: {
        choosePet: (state, action) => {
            state.value = action.payload
        },
    }
});

export const { choosePet } = myFruitchiPetSlice.actions;
export default myFruitchiPetSlice.reducer