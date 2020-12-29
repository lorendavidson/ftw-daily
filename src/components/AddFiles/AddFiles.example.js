/* eslint-disable no-console */
import React, { Component } from 'react';
import findIndex from 'lodash/findIndex';
import uniqueId from 'lodash/uniqueId';
import { types as sdkTypes } from '../../util/sdkLoader';
import AddFiles from './AddFiles';
import css from './AddFilesExample.module.css';

const { UUID } = sdkTypes;

const getId = () => {
  return uniqueId();
};

class AddFilesTest extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      files: [],
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const file = event.target.files[0];
    const fileId = getId();
    const fileData = { file, id: fileId, fileId: null };

    // Show loading overlay
    this.setState({
      files: this.state.files.concat([fileData]),
    });

    // Fake file uploaded state: show file thumbnail
    setTimeout(() => {
      this.setState(prevState => {
        const files = prevState.files;
        const fileIndex = findIndex(files, i => i.id === fileId);
        const updatedFile = { ...fileData, fileId: new UUID(fileId) };
        const updatedFiles = [
          ...files.slice(0, fileIndex),
          updatedFile,
          ...files.slice(fileIndex + 1),
        ];
        return {
          files: updatedFiles,
        };
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <AddFiles
          files={this.state.files}
          savedFileAltText="Saved file"
          onRemoveFile={fileId => console.log('remove file:', fileId)}
        >
          <div className={css.addFileWrapper}>
            <div className={css.aspectRatioWrapper}>
              <label className={css.addFile} htmlFor="addFileExampleInput">
                + Add file
              </label>
              <input
                id="addFileExampleInput"
                type="file"
                accept="files/*"
                onChange={this.onChange}
                className={css.addFileInput}
              />
            </div>
          </div>
        </AddFiles>
      </div>
    );
  }
}

export const Empty = {
  component: AddFilesTest,
  group: 'custom inputs',
};
