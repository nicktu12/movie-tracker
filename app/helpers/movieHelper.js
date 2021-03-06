import {
  itemsHasErrored,
  itemsIsLoading,
  itemsFetchDataSuccess,
  populateFavArray,
  duplicateFav,
  redirectToLogin
} from '../actions';

export const fetchCurrentMovies = (url) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
};

export const postToFavorites = (movieCard, userId, userArray) => {
  if (!userId) {
    return (dispatch) => dispatch(redirectToLogin(true));
  }
  if (userArray.find( movie => movie.movie_id === movieCard.movie_id)) {
    return (dispatch) => dispatch(duplicateFav(true));
  } else {
    return (dispatch) => {
      fetch('api/users/favorites/new/', {
        method: 'POST',
        body: JSON.stringify(Object.assign({}, movieCard, {user_id: userId})),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(dispatch(fetchFavorites(userId)));
    };
  }
};

export const fetchRemoveFavorite = (userId, favId) => {
  return (dispatch) => {
    fetch(`api/users/${userId}/favorites/${favId}`, {
      method:'delete',
      headers: {'Content-Type': 'application/json'}
    } )
      .then(response => response.json())
      .then(dispatch(fetchFavorites(userId)))
      .catch(error => alert(error));
  };
};

export const fetchFavorites = (userId) => {

  return (dispatch) => {
    fetch(`api/users/${userId}/favorites/`)
      .then(res => res.json())
      .then(favs => dispatch(populateFavArray(favs.data)));
  };
};
