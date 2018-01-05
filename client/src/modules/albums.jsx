const FETCH_ALBUMS = 'fetchAlbums';
export const fetchAlbums = {type: FETCH_ALBUMS};

const initialAlbums = {albums: []};

const albumsReducer = (state = {initialAlbums}, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      const exampleAlbums = [
        {
          id: 1,
          name: 'Album for krasi',
          user: {
            name: 'krasi',
            age: 21
          }
        },
        {
          id: 2,
          name: 'Album for marto',
          user: {
            name: 'marto',
            age: 21
          }
        },
        {
          id: 3,
          name: 'Album for ivo',
          user: {
            name: 'ivo',
            age: 22
          }
        }
      ];

      return Object.assign({}, state, {albums: exampleAlbums});
    default:
      return state;
  }
};

export default albumsReducer;
