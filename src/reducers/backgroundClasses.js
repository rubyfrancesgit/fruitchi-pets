import { createSlice } from '@reduxjs/toolkit';

export const backgroundClassesSlice = createSlice({
    name: "backgroundClasses",
    initialState: {value: 'choose-fruitchi green-bg'},
    reducers: {
        setBackgroundClasses: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { setBackgroundClasses } = backgroundClassesSlice.actions;
export default backgroundClassesSlice.reducer;