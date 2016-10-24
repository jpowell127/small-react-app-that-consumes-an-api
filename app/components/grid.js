import React from 'react';
import Axios from 'axios';
import Image from './image';
import Config from '../config/config';

const Grid = React.createClass({
  getInitialState: () => {
    return {
      images: []
    }
  },
  componentDidMount: function() {
    Axios
      .get(Config.url)
      .then((response) => {
        this.setState({
          images: response.data.filter((image, index) => index <= 24)
        })
      })
      .catch((error) => {
        console.log('Error getting data in grid.js: ' + error);
      })
  },
  render: function () {
    return (
      <section className="section">
        <div className="columns is-multiline is-mobile">
          {this.state.images.map((image, index) => {
            return <Image key={index} {...image} />
          })}
        </div>
      </section>
    )
  }
});

export default Grid;
