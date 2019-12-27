import { createNextState } from '@reduxjs/toolkit'

export const errorHandle = reducer => {
  return (state, action) => {
    const { error, payload } = action
    if (error) {
      return createNextState(state, draft => {
        draft.error = payload.error
      })
    }
    return reducer(state, action)
  }
}
