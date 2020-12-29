import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import aImage from './images/location_a.jpg';
import bImage from './images/location_b.jpg';
import cImage from './images/location_c.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Yaletown',
          aImage,
          '?address=Vancouver%2C%20Canada&bounds=49.28194777%2C-123.11405828%2C49.26761211%2C-123.12846419'
        )}
        {locationLink(
          'Gastown',
          bImage,
          '?address=Vancouver%2C%20Canada&bounds=49.2869034%2C-123.1033659%2C49.27973681%2C-123.11056885'
        )}
        {locationLink(
          'Downtown',
          cImage,
          '?address=Vancouver%2C%20Canada&bounds=49.2904974%2C-123.10854839%2C49.27616422%2C-123.1229543'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
