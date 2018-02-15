const TOGGLE_CREATE_ALBUM_MODAL = 'TOGGLE_CREATE_ALBUM_MODAL';

export const toggleCreateAlbumModal = () => {
  return {
    type: TOGGLE_CREATE_ALBUM_MODAL
  };
};

const initialState = {
  isOpenModal: false
};

const navigationReducer = (state = initialState, action) => {
  var newState;
  switch (action.type) {
    case TOGGLE_CREATE_ALBUM_MODAL:
      newState = {
        isOpenModal: !state.isOpenModal
      };
      break;

    default:
      return state;
  }

  return Object.assign({}, state, newState);
};

export default navigationReducer;
