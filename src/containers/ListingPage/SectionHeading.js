import React from 'react';
// import { LINE_ITEM_NIGHT, LINE_ITEM_DAY } from '../../util/types';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import config from '../../config';

import css from './ListingPage.module.css';

const SectionHeading = props => {
  const {
    richTitle,
    category,
    address,
    room
  } = props;

  const unitType = config.bookingUnitType;
  // const isNightly = unitType === LINE_ITEM_NIGHT;
  // const isDaily = unitType === LINE_ITEM_DAY;

  return (
    <>
    <div className={css.sectionHeading}>
      <div className={css.heading}>
        <h1 className={css.title}>{richTitle}</h1>
        <div className={css.meta}>
          <p>
            {category}<br />{room}
          </p>
        </div>
      </div>
    </div>
    <div className={css.sectionAddress}>
      <h2 className={css.addressTitle}>
        <FormattedMessage id="ListingPage.venueAddress" />
      </h2>
      <p>{address}</p>
    </div>
    </>
  );
};

export default SectionHeading;
