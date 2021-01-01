import React, { Component } from 'react';
import { array, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm, Field } from 'react-final-form';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { nonEmptyArray, composeValidators } from '../../util/validators';
import { isUploadFileOverLimitError } from '../../util/errors';
import { AddFiles, Button, Form, ValidationError } from '../../components';

import css from './EditListingAttachmentsForm.module.css';

const ACCEPT_FILES = 'file/*';

export class EditListingAttachmentsFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { fileUploadRequested: false };
    this.onFileUploadHandler = this.onFileUploadHandler.bind(this);
    this.submittedFiles = [];
  }

  onFileUploadHandler(file) {
    if (file) {
      this.setState({ fileUploadRequested: true });
      this.props
        .onFileUpload({ id: `${file.name}_${Date.now()}`, file })
        .then(() => {
          this.setState({ fileUploadRequested: false });
        })
        .catch(() => {
          this.setState({ fileUploadRequested: false });
        });
    }
  }

  render() {
    return (
      <FinalForm
        {...this.props}
        onFileUploadHandler={this.onFileUploadHandler}
        fileUploadRequested={this.state.fileUploadRequested}
        initialValues={{ files: this.props.files }}
        render={formRenderProps => {
          const {
            form,
            className,
            fetchErrors,
            handleSubmit,
            files,
            fileUploadRequested,
            intl,
            invalid,
            onFileUploadHandler,
            onRemoveFile,
            disabled,
            ready,
            saveActionMsg,
            updated,
            updateInProgress,
          } = formRenderProps;

          const chooseFileText = (
            <span className={css.chooseFileText}>
              <span className={css.chooseFile}>
                <FormattedMessage id="EditListingAttachmentsForm.chooseFile" />
              </span>
              <span className={css.fileTypes}>
                <FormattedMessage id="EditListingAttachmentsForm.fileTypes" />
              </span>
            </span>
          );

          const fileRequiredMessage = intl.formatMessage({
            id: 'EditListingAttachmentsForm.fileRequired',
          });

          const { publishListingError, showListingsError, updateListingError, uploadFileError } =
            fetchErrors || {};
          const uploadOverLimit = isUploadFileOverLimitError(uploadFileError);

          let uploadFileFailed = null;

          if (uploadOverLimit) {
            uploadFileFailed = (
              <p className={css.error}>
                <FormattedMessage id="EditListingAttachmentsForm.fileUploadFailed.uploadOverLimit" />
              </p>
            );
          } else if (uploadFileError) {
            uploadFileFailed = (
              <p className={css.error}>
                <FormattedMessage id="EditListingAttachmentsForm.fileUploadFailed.uploadFailed" />
              </p>
            );
          }

          // NOTE: These error messages are here since Photos panel is the last visible panel
          // before creating a new listing. If that order is changed, these should be changed too.
          // Create and show listing errors are shown above submit button
          const publishListingFailed = publishListingError ? (
            <p className={css.error}>
              <FormattedMessage id="EditListingAttachmentsForm.publishListingFailed" />
            </p>
          ) : null;
          const showListingFailed = showListingsError ? (
            <p className={css.error}>
              <FormattedMessage id="EditListingAttachmentsForm.showListingFailed" />
            </p>
          ) : null;

          const submittedOnce = this.submittedFiles.length > 0;
          // imgs can contain added files (with temp ids) and submitted files with uniq ids.
          const arrayOfImgIds = imgs =>
            imgs.map(i => (typeof i.id === 'string' ? i.fileId : i.id));
          const fileIdsFromProps = arrayOfImgIds(files);
          const fileIdsFromPreviousSubmit = arrayOfImgIds(this.submittedFiles);
          const fileArrayHasSameFiles = isEqual(fileIdsFromProps, fileIdsFromPreviousSubmit);
          const pristineSinceLastSubmit = submittedOnce && fileArrayHasSameFiles;

          const submitReady = (updated && pristineSinceLastSubmit) || ready;
          const submitInProgress = updateInProgress;
          const submitDisabled =
            invalid || disabled || submitInProgress || fileUploadRequested || ready;

          const classes = classNames(css.root, className);

          return (
            <Form
              className={classes}
              onSubmit={e => {
                this.submittedFiles = files;
                handleSubmit(e);
              }}
            >
              {updateListingError ? (
                <p className={css.error}>
                  <FormattedMessage id="EditListingAttachmentsForm.updateFailed" />
                </p>
              ) : null}
              <AddFiles
                className={css.filesField}
                files={files}
                thumbnailClassName={css.thumbnail}
                savedFileAltText={intl.formatMessage({
                  id: 'EditListingAttachmentsForm.savedFileAltText',
                })}
                onRemoveFile={onRemoveFile}
              >
                <Field
                  id="addFile"
                  name="addFile"
                  accept={ACCEPT_FILES}
                  form={null}
                  label={chooseFileText}
                  type="file"
                  disabled={fileUploadRequested}
                >
                  {fieldprops => {
                    const { accept, input, label, disabled: fieldDisabled } = fieldprops;
                    const { name, type } = input;
                    const onChange = e => {
                      const file = e.target.files[0];
                      form.change(`addFile`, file);
                      form.blur(`addFile`);
                      onFileUploadHandler(file);
                    };
                    const inputProps = { accept, id: name, name, onChange, type };
                    return (
                      <div className={css.addFileWrapper}>
                        <div className={css.aspectRatioWrapper}>
                          {fieldDisabled ? null : (
                            <input {...inputProps} className={css.addFileInput} />
                          )}
                          <label htmlFor={name} className={css.addFile}>
                            {label}
                          </label>
                        </div>
                      </div>
                    );
                  }}
                </Field>

                <Field
                  component={props => {
                    const { input, meta } = props;
                    return (
                      <div className={css.fileRequiredWrapper}>
                        <input {...input} />
                        <ValidationError fieldMeta={meta} />
                      </div>
                    );
                  }}
                  name="files"
                  type="hidden"
                  validate={composeValidators(nonEmptyArray(fileRequiredMessage))}
                />
              </AddFiles>
              {uploadFileFailed}

              <p className={css.tip}>
                <FormattedMessage id="EditListingAttachmentsForm.addFilesTip" />
              </p>
              {publishListingFailed}
              {showListingFailed}

              <Button
                className={css.submitButton}
                type="submit"
                inProgress={submitInProgress}
                disabled={submitDisabled}
                ready={submitReady}
              >
                {saveActionMsg}
              </Button>
            </Form>
          );
        }}
      />
    );
  }
}

EditListingAttachmentsFormComponent.defaultProps = { fetchErrors: null, files: [] };

EditListingAttachmentsFormComponent.propTypes = {
  fetchErrors: shape({
    publishListingError: propTypes.error,
    showListingsError: propTypes.error,
    uploadFileError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  files: array,
  intl: intlShape.isRequired,
  onFileUpload: func.isRequired,
  onUpdateFileOrder: func.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  onRemoveFile: func.isRequired,
};

export default compose(injectIntl)(EditListingAttachmentsFormComponent);
