import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            userCurrent: null,
            isFetching: false,
            error: false,
            userDetailCurrent: null,
        },
    },
    reducers: {
        userStart: (state) => {
            state.user.isFetching = true;
        },
        userSuccess: (state, action) => {
            state.user.isFetching = false;
            state.user.error = false;
            state.user.userCurrent = action.payload;
        },
        userFailed: (state) => {
            state.user.isFetching = false;
            state.user.error = true;
        },
        userDetailStart: (state) => {
            state.user.isFetching = true;
        },
        userDetailSuccess: (state, action) => {
            state.user.isFetching = false;
            state.user.error = false;
            state.user.userDetailCurrent = action.payload;
        },
        userDetailFailed: (state) => {
            state.user.isFetching = false;
            state.user.error = true;
        },
        userDeleteStart: (state) => {
            state.user.isFetching = true;
        },
        userDeleteSuccess: (state, action) => {
            state.user.isFetching = false;
            state.user.error = false;
        },
        userDeleteFailed: (state) => {
            state.user.isFetching = false;
            state.user.error = true;
        },
    },
});

export const { userStart, userSuccess, userFailed,userDetailStart,userDetailSuccess,userDetailFailed,userDeleteStart,userDeleteSuccess,userDeleteFailed
} = userSlice.actions;

export default userSlice.reducer;
