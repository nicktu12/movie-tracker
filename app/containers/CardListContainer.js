import CardList from '../components/CardList';
import { connect } from 'react-redux';
import { postToFavorites } from '../helpers/movieHelper';

const mapStateToProps = (store) => ({
  items: store.items,
  hasErrored: store.itemsHasErrored,
  isLoading: store.itemsIsLoading,
  userId: store.activeUser.id,
  userFavArray: store.userFavArray,
  dupFav: store.dupFav,
  loginRequired: store.loginRequired
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorites: (movieCard, userId, userFavArray) =>
      dispatch(postToFavorites(movieCard, userId, userFavArray))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
