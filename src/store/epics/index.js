const basicEpics = () => next => action => {
  switch (action.type) {
    default:
      return next(action)
  }
}

export default [basicEpics]
