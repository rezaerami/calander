export function modalOpen(status) {
  return {
    type: "MODAL_OPEN",
    payload: status,
  };
}

export function noEventModal(status) {
  return {
    type: "NO_EVENT_MODAL",
    payload: status,
  };
}

export function withEventModal(status) {
  return {
    type: "WITH_EVENT_MODAL",
    payload: status,
  };
}

const modalStatus = {
  modalOpen: false,
  noEvent: false,
  addEvent: false,
  withEvent: false,
};

export default function modalStatusReducer(state = modalStatus, action) {
  switch (action.type) {
    case "MODAL_OPEN":
      return {
        ...state,
        modalOpen: action.payload,
      };
    case "NO_EVENT_MODAL":
      return {
        ...state,
        noEvent: action.payload,
      };
    case "WITH_EVENT_MODAL":
      return {
        ...state,
        withEvent: action.payload,
      };
    default:
      return state;
  }
}
