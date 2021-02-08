import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

import css from './ListingPage.module.css';

const SectionAddress = props => {
  const {
    address,
  } = props;

  return (
    <div className={css.sectionAddress}>
      <h2 className={css.addressTitle}>
        <FormattedMessage id="ListingPage.venueAddress" />
      </h2>
      <p>{address}</p>
    </div>
  );
};

export default SectionAddress;