import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.module.css';

const SectionFeaturesMaybe = props => {
  const { options, publicData } = props;

  if (!publicData) {
    return null;
  }

  const selectedOptions = publicData && publicData.amenities ? publicData.amenities : [];
  const amenitiesDescription = publicData && publicData.amenitiesDescription ? publicData.amenitiesDescription : null;

  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.featuresTitle" />
      </h2>
      <PropertyGroup
        id="ListingPage.amenities"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
      />
      <p>{amenitiesDescription}</p>
    </div>
  );
};

export default SectionFeaturesMaybe;
