import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionRooms.module.css';

const roomLink = (name, searchQuery) => {
  const roomText = <span className={css.roomName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.room}>
      <div className={css.linkText}>
        {roomText}
      </div>
    </NamedLink>
  );
};

const SectionRooms = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionRooms.title" />
      </div>
      <div className={css.rooms}>
        {roomLink(
          'Hotel Meeting Rooms',
          '?bounds=49.89195575%2C-122.02876476%2C48.46456829%2C-123.68380465&pub_category=hotel'
        )}
        {roomLink(
          'Private Dining Rooms',
          '?bounds=49.89195575%2C-122.02876476%2C48.46456829%2C-123.68380465&pub_category=dining'
        )}
        {roomLink(
          'Unique Meeting Spaces',
          '?bounds=49.89195575%2C-122.02876476%2C48.46456829%2C-123.68380465&pub_category=unique'
        )}
      </div>
    </div>
  );
};

SectionRooms.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionRooms.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionRooms;
