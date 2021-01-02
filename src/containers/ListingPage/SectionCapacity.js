import React from 'react';
import { FormattedMessage } from 'react-intl';

import css from './ListingPage.module.css';

const SectionCapacity = props => {
  const { publicData, options } = props;

  if (!publicData) {
    return null;
  }

  const capacity = publicData && publicData.capacity ? publicData.capacity : null;

  const capacityOption = options.find(
    option => option.key === capacity
  );

  return capacityOption ? (
    <div className={css.sectionCapacity}>
      <h2 className={css.capacityTitle}>
        <FormattedMessage id="ListingPage.capacityTitle" />
      </h2>
      <p className={css.capacity}>{capacityOption.label}</p>
    </div>
  ) : null;
};

export default SectionCapacity;
