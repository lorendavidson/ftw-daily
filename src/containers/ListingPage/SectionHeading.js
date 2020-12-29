import React from 'react';
import { LINE_ITEM_NIGHT, LINE_ITEM_DAY } from '../../util/types';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import config from '../../config';

import css from './ListingPage.module.css';

const SectionHeading = props => {
  const {
    richTitle,
    category,
    address
  } = props;

  const unitType = config.bookingUnitType;
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  return (
    <div className={css.sectionHeading}>
      <div className={css.heading}>
        <h1 className={css.title}>{richTitle}</h1>
        <div className={css.author}>
          <p>{category} <br />Hotel name (todo)</p>
          <h2 className={css.featuresTitle}>
            <FormattedMessage id="ListingPage.venueAddress" />
          </h2>
          <p>{address}</p>
          <h2 className={css.featuresTitle}>
            Capacity
          </h2>
          <p>8 guests (general capacity)​,​ 4-6 guests (current COVID-regulations)</p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
