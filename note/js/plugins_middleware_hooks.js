
/**
 * // loader => transformer => add/split/modify => optimize
 * flow: previous -> next 
 */
const middleware = (next) => ({ ctx }) => {
  // before next 
  // pre-hooks
  next({
    ctx
  })
  // post-hooks
  // After next
}

const middlewareFactory = (options) => {
  const name = "milestone1"
  const constants = "foo"
  return middleware.bind({ name, constants })
}