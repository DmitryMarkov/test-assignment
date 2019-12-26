export const errorHandle = reducer => {
  return (state, action) => {
    const { error, payload } = action
    if (error) {
      console.log(payload)
      return state
    }
    return reducer(state, action)
  }
}
