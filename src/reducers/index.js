export const rootReducer = (state, action) => {
  switch (action.type) {
    case "user":
      return {
        ...state,
        user: action.payload
      }
    case "drafts":
      return {
        ...state,
        drafts: action.payload
      }
    case "twit":
      return {
        ...state,
        twit: action.payload
      }
    case "animations":
      return {
        ...state,
        animations: action.payload
      }
    case "toggleLoader":
      return {
        ...state,
        isLoading: action.payload
      }
    case "toggleLogout":
      return {
        ...state,
        toggleLogout: action.payload
      }
    case "modify":
      return {
        ...state,
        modify: action.payload
      }
    default:
      return state
  }
}