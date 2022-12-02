import {createAction, createReducer} from '@reduxjs/toolkit'

interface CallSendStatus {
    isOpen: boolean
}

const callSend = createAction<boolean>('isOpenCallSend')

const initialState: CallSendStatus = {isOpen: false}

export const callSendReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(callSend, (state, action) => {
            console.log(action)
            state.isOpen = action.payload;
        })
})
