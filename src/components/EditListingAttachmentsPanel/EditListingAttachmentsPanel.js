import React, { Component } from 'react';
import { array, bool, func, object, string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { EditListingAttachmentsForm } from '../../forms';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';

import css from './EditListingAttachmentsPanel.module.css';

class EditListingAttachmentsPanel extends Component {
  render() {
    const {
      className,
      rootClassName,
      errors,
      disabled,
      ready,
      files,
      listing,
      onFileUpload,
      submitButtonText,
      panelUpdated,
      updateInProgress,
      onChange,
      onSubmit,
      onRemoveFile,
    } = this.props;

    const rootClass = rootClassName || css.root;
    const classes = classNames(rootClass, className);
    const currentListing = ensureOwnListing(listing);

    const isPublished =
      currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
    const panelTitle = isPublished ? (
      <FormattedMessage
        id="EditListingAttachmentsPanel.title"
        values={{ listingTitle: <ListingLink listing={listing} /> }}
      />
    ) : (
      <FormattedMessage id="EditListingAttachmentsPanel.createListingTitle" />
    );

    return (
      <div className={classes}>
        <h1 className={css.title}>{panelTitle}</h1>
        <EditListingAttachmentsForm
          className={css.form}
          disabled={disabled}
          ready={ready}
          fetchErrors={errors}
          initialValues={{ files }}
          files={files}
          onFileUpload={onFileUpload}
          onSubmit={values => {
            const { addFile, ...updateValues } = values;
            onSubmit(updateValues);
          }}
          onChange={onChange}
          onRemoveFile={onRemoveFile}
          saveActionMsg={submitButtonText}
          updated={panelUpdated}
          updateInProgress={updateInProgress}
        />
      </div>
    );
  }
}

EditListingAttachmentsPanel.defaultProps = {
  className: null,
  rootClassName: null,
  errors: null,
  files: [],
  listing: null,
};

EditListingAttachmentsPanel.propTypes = {
  className: string,
  rootClassName: string,
  errors: object,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  files: array,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  onFileUpload: func.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  onRemoveFile: func.isRequired,
};

export default EditListingAttachmentsPanel;
