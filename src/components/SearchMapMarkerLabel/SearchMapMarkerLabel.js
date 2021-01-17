import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { formatMoney } from '../../util/currency';
import { ensureListing } from '../../util/data';
import config from '../../config';

import css from './SearchMapMarkerLabel.module.css';

class SearchMapMarkerLabel extends Component {
  shouldComponentUpdate(nextProps) {
    const currentListing = ensureListing(this.props.listing);
    const nextListing = ensureListing(nextProps.listing);
    const isSameListing = currentListing.id.uuid === nextListing.id.uuid;
    const hasSameActiveStatus = this.props.isActive === nextProps.isActive;
    const hasSameRefreshToken =
      this.props.mapComponentRefreshToken === nextProps.mapComponentRefreshToken;

    return !(isSameListing && hasSameActiveStatus && hasSameRefreshToken);
  }

  render() {
    const { className, rootClassName, intl, listing, onListingClicked, isActive } = this.props;
    const currentListing = ensureListing(listing);
    const { title } = currentListing.attributes;

    const classes = classNames(rootClassName || css.root, className);
    const markerLabelClasses = classNames(css.markerLabel, { [css.markerLabelActive]: isActive });
    const caretClasses = classNames(css.caret, { [css.caretActive]: isActive });

    return (
      <button className={classes} onClick={() => onListingClicked(currentListing)}>
        <div className={css.caretShadow} />
        <div className={markerLabelClasses}>{title}</div>
        <div className={caretClasses} />
      </button>
    );
  }
}

SearchMapMarkerLabel.defaultProps = {
  className: null,
  rootClassName: null,
};

const { func, string } = PropTypes;

SearchMapMarkerLabel.propTypes = {
  className: string,
  rootClassName: string,
  listing: propTypes.listing.isRequired,
  onListingClicked: func.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

export default injectIntl(SearchMapMarkerLabel);
