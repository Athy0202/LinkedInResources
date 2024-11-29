import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Single from './Single';

export default class Grid extends Component {
  renderList() {
    return this.props.items.map((item) => (
      <Single key={item.id} item={item} />
    ));
  }

  render() {
    return (
      <div>
        <div className="row">
          <ul>
            {this.renderList()}
          </ul>
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      release_date: PropTypes.string,
      views: PropTypes.number,
      link: PropTypes.string,
    })
  ).isRequired,
};
