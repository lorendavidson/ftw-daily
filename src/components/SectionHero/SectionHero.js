import React from 'react';
import { string, PropTypes } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import routeConfiguration from '../../routeConfiguration';
import { createResourceLocatorString } from '../../util/routes';
import { NamedLink } from '../../components';
import { LocationSearchForm } from '../../forms';

import css from './SectionHero.module.css';

const SectionHero = props => {
  const {
    rootClassName,
    className,
    history,
  } = props;

  const classes = classNames(rootClassName || css.root, className);

  const handleSearchSubmit = values => {
    const { search, selectedPlace } = values.location;
    const { origin, bounds } = selectedPlace;
    const searchParams = { address: search, origin, bounds };
    history.push(
      createResourceLocatorString('SearchPage', routeConfiguration(), {}, searchParams)
    );
  };

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h2>
        <LocationSearchForm className={css.searchForm} onSubmit={handleSearchSubmit} />
      </div>
    </div>
  );
};

const { func, object, shape } = PropTypes;

SectionHero.defaultProps = {
  rootClassName: null,
  className: null,
};

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
  initialSearchFormValues: object,

  history: shape({
    push: func.isRequired,
  }).isRequired,
};

export default SectionHero;
