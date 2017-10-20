import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiKeys from '../apiKeys';
import Card from './Card';
import { Carousel } from 'react-materialize';

export default class CardList extends Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   // this.props.fetchData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKeys.lukeApi}&language=en-US&page=1`);
  // }

  // mapOverData() {
  //   this.props.items.results.map( result => {
  //     return (
  //       <Card title={result.title}/>
  //     )
  //   })
  // }

  render() {
    return (
      <div>
        {
          Object.keys(this.props.items).length &&
          <div>{this.props.items.results.map((result)=>{
            return(<div>{result.title}</div>)
          })}</div>
        }
      {/* {Object.keys(this.props.items).length ?
        <div>{this.mapOverData()}</div> : <div>nothing in here!</div> } */}
        <div>

        </div>
      </div>
    );
  }
}

CardList.propTypes = {
  fetchData: PropTypes.func
};
