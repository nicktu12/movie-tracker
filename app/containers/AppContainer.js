import App from '../components/App';
import { connect } from 'react-redux';
import { fetchCurrentMovies, fetchFavorites } from '../helpers/movieHelper';

const mapStateToProps = (store) => ({
  items: store.items,
  hasErrored: store.itemsHasErrored,
  isLoading: store.itemsIsLoading,
  userId: store.activeUser.id
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchCurrentMovies(url)),
    fetchFavorites: (userId) => dispatch(fetchFavorites(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
