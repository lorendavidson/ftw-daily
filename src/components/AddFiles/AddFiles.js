/**
 * Creates a sortable file grid with children added to the end of the created grid.
 *
 * Example:
 * // files = [{ id: 'tempId', fileId: 'realIdFromAPI', file: File }];
 * <AddFiles files={files}>
 *   <input type="file" accept="files/*" onChange={handleChange} />
 * </AddFiles>
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FileFromFile, ResponsiveFile, IconSpinner } from '../../components';

import css from './AddFiles.module.css';
import RemoveFileButton from './RemoveFileButton';

const ThumbnailWrapper = props => {
  const { className, file, savedFileAltText, onRemoveFile } = props;
  const handleRemoveClick = e => {
    e.stopPropagation();
    onRemoveFile(file.id);
  };

  if (file.file) {
    // Add remove button only when the file has been uploaded and can be removed
    const removeButton = file.fileId ? <RemoveFileButton onClick={handleRemoveClick} /> : null;

    // While file is uploading we show overlay on top of thumbnail
    const uploadingOverlay = !file.fileId ? (
      <div className={css.thumbnailLoading}>
        <IconSpinner />
      </div>
    ) : null;

    return (
      <FileFromFile
        id={file.id}
        className={className}
        rootClassName={css.thumbnail}
        file={file.file}
      >
        {removeButton}
        {uploadingOverlay}
      </FileFromFile>
    );
  } else {
    const classes = classNames(css.thumbnail, className);
    return (
      <div className={classes}>
        <div className={css.threeToTwoWrapper}>
          <div className={css.aspectWrapper}>
            <ResponsiveFile
              rootClassName={css.rootForFile}
              file={file}
              alt={savedFileAltText}
              variants={['landscape-crop', 'landscape-crop2x']}
            />
          </div>
          <RemoveFileButton onClick={handleRemoveClick} />
        </div>
      </div>
    );
  }
};

ThumbnailWrapper.defaultProps = { className: null };

const { array, func, node, string, object } = PropTypes;

ThumbnailWrapper.propTypes = {
  className: string,
  file: object.isRequired,
  savedFileAltText: string.isRequired,
  onRemoveFile: func.isRequired,
};

const AddFiles = props => {
  const {
    children,
    className,
    thumbnailClassName,
    files,
    savedFileAltText,
    onRemoveFile,
  } = props;
  const classes = classNames(css.root, className);
  return (
    <div className={classes}>
      {files.map((file, index) => {
        return (
          <ThumbnailWrapper
            file={file}
            index={index}
            key={file.id.uuid || file.id}
            className={thumbnailClassName}
            savedFileAltText={savedFileAltText}
            onRemoveFile={onRemoveFile}
          />
        );
      })}
      {children}
    </div>
  );
};

AddFiles.defaultProps = { className: null, thumbnailClassName: null, files: [] };

AddFiles.propTypes = {
  files: array,
  children: node.isRequired,
  className: string,
  thumbnailClassName: string,
  savedFileAltText: string.isRequired,
  onRemoveFile: func.isRequired,
};

export default AddFiles;
