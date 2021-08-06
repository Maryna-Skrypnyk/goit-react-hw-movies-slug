import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import slugify from 'slugify';

import styles from './MovieListItem.module.scss';

const makeSlug = string =>
  slugify(string, {
    lower: true,
  });

export default function MoviesListItem({ id, title, original_title }) {
  const location = useLocation();

  const titleMovie = title === '' || !title ? original_title : title;

  return (
    <li className={styles.MovieListItem}>
      <Link
        className={styles.MovieLink}
        to={{
          // pathname: `/movies/${id}`,
          pathname: `/movies/${makeSlug(`${titleMovie} ${id}`)}`,
          state: { from: location },
        }}
      >
        {titleMovie}
      </Link>
    </li>
  );
}

MoviesListItem.defaultProps = {
  title: '',
  original_title: '',
};

MoviesListItem.propTypes = {
  title: PropTypes.string,
  original_title: PropTypes.string,
  id: PropTypes.number.isRequired,
};
