import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import { LINE_ITEM_DAY, LINE_ITEM_NIGHT, propTypes } from '../../util/types';
import { findOptionsForSelectFilter } from '../../util/search';
import { ensureListing, ensureUser } from '../../util/data';
import { richText } from '../../util/richText';
import { createSlug } from '../../util/urlHelpers';
import config from '../../config';
import { NamedLink, ResponsiveImage } from '../../components';
// import { loadData } from '../../containers/ListingPage/ListingPage.duck';

import css from './ListingCard.module.css';

const MIN_LENGTH_FOR_LONG_WORDS = 10;

const categoryLabel = (categories, key) => {
  const cat = categories.find(c => c.key === key);
  return cat ? cat.label : key;
};

class ListingImage extends Component {
  render() {
    return <ResponsiveImage {...this.props} />;
  }
}
const LazyImage = lazyLoadWithDimensions(ListingImage, { loadAfterInitialRendering: 3000 });

export const ListingCardComponent = props => {
  const { className, rootClassName, filterConfig, getListing, listing, renderSizes, setActiveListing } = props;
  
  // console.log(listing);

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const id = currentListing.id.uuid;
  const { publicData, title = '' } = currentListing.attributes;
  const slug = createSlug(title);
  const firstImage =
    currentListing.images && currentListing.images.length > 0 ? currentListing.images[0] : null;

  // const amenityOptions = findOptionsForSelectFilter('amenities', filterConfig);
  const categoryOptions = findOptionsForSelectFilter('category', filterConfig);
  const capacityOptions = findOptionsForSelectFilter('capacity', filterConfig);

  // console.log(filterConfig);
  // console.log(currentListing);
  // console.log(capacityOptions);

  const category =
  publicData && publicData.category ? (
    <span>
      {categoryLabel(categoryOptions, publicData.category)}
    </span>
  ) : null;

  const room = publicData && publicData.room ? publicData.room : null;
  const hood = publicData && publicData.hood ? publicData.hood : null;
  const capacity = publicData && publicData.capacity ? publicData.capacity : null;
  const address = publicData && publicData.location ? publicData.location.address : null;

  // const selectedOptions = publicData && publicData.amenities ? publicData.amenities : [];
  const people = capacityOptions.find(
    option => option.key === capacity
  );

  // const people = capacityOptions[capacity];
  // console.log(people);

  return (
    <NamedLink className={classes} name="ListingPage" params={{ id, slug }}>
      <div
        className={css.threeToTwoWrapper}
        onMouseEnter={() => setActiveListing(currentListing.id)}
        onMouseLeave={() => setActiveListing(null)}
      >
        <div className={css.aspectWrapper}>
          <LazyImage
            rootClassName={css.rootForImage}
            alt={title}
            image={firstImage}
            variants={['landscape-crop', 'landscape-crop2x']}
            sizes={renderSizes}
          />
        </div>
      </div>
      <div className={css.info}>
        <div className={css.mainInfo}>
          <div className={css.title}>
            {richText(title, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
              longWordClass: css.longWord,
            })}
          </div>
        </div>
        <div>
          { room ? (<p>{room}</p>) : null }
          { hood ? (<p>{hood}</p>) : null }
          { people ? (<p>{people.label} guests</p>) : null }
          { address ? (<p>{address}</p>) : null }
        </div>
      </div>
    </NamedLink>
  );
};

ListingCardComponent.defaultProps = {
  className: null,
  rootClassName: null,
  renderSizes: null,
  filterConfig: config.custom.filters,
  
  setActiveListing: () => null,
};

ListingCardComponent.propTypes = {
  className: string,
  rootClassName: string,
  // getListing: func.isRequired,
  intl: intlShape.isRequired,
  listing: propTypes.listing.isRequired,

  // Responsive image sizes hint
  renderSizes: string,

  setActiveListing: func,
};

export default injectIntl(ListingCardComponent);
