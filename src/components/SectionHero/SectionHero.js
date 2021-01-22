import React from 'react';
import { string, PropTypes } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';
import { SearchForm } from '../../forms';

import css from './SectionHero.module.css';

const SectionHero = props => {
  const {
    rootClassName,
    className,
    onSearchSubmit,
    initialSearchFormValues,
  } = props;

  const classes = classNames(rootClassName || css.root, className);

  // const search = (
  //   <SearchForm
  //     className={css.searchLink}
  //     desktopInputRoot={css.heroSearchWithLeftPadding}
  //     onSubmit={handleSubmit}
  //     initialValues={initialSearchFormValues}
  //   />
  // );

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              '?address=Vancouver&bounds=49.35803758%2C-123.04487604%2C49.19276408%2C-123.22211236',
          }}
          className={css.heroButton}
        >
          <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink>
      </div>
    </div>
  );
};

const { func, object } = PropTypes;

SectionHero.defaultProps = {
  rootClassName: null,
  className: null,
  initialSearchFormValues: {},
};

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
  onSearchSubmit: func.isRequired,
  initialSearchFormValues: object,
};

export default SectionHero;
