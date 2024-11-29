import React from 'react';
import PropTypes from 'prop-types';

const Single = ({ item }) => {
  const {
    image = 'https://via.placeholder.com/150',
    title = 'Untitled Course',
    description = 'No description available.',
    release_date = 'N/A',
    views = 0,
    link = '#',
  } = item;

  return (
    <li className="col l6 s12">
      <div className="card">
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{description}</p>
          <div className="row">
            <div className="col l6 center">
              <blockquote><h5>Released: {release_date}</h5></blockquote>
            </div>
            <div className="col l6 center">
              <blockquote><h5>Views: {views}</h5></blockquote>
            </div>
          </div>
        </div>
        <div className="card-action">
          <a href={link} target="_blank" rel="noopener noreferrer">Link to course</a>
        </div>
      </div>
      <br />
    </li>
  );
};

Single.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    release_date: PropTypes.string,
    views: PropTypes.number,
    link: PropTypes.string,
  }).isRequired,
};

export default Single;
