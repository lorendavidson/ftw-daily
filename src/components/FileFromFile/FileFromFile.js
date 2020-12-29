import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { Promised } from '../../components';

import css from './FileFromFile.module.css';

// readFile returns a promise which is resolved
// when FileReader has loaded given file as dataURL
const readFile = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = e => {
      // eslint-disable-next-line
      console.error('Error (', e, `) happened while reading ${file.name}: ${e.target.result}`);
      reject(new Error(`Error reading ${file.name}: ${e.target.result}`));
    };
    reader.readAsDataURL(file);
  });

// Create elements out of given thumbnail file
class FileFromFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promisedFile: readFile(this.props.file),
    };
  }

  render() {
    const { className, rootClassName, aspectRatioClassName, file, id, children } = this.props;
    const classes = classNames(rootClassName || css.root, className);
    const aspectRatioClasses = aspectRatioClassName || css.aspectWrapper;
    return (
      <Promised
        key={id}
        promise={this.state.promisedFile}
        renderFulfilled={dataURL => {
          return (
            <div className={classes}>
              <div className={css.threeToTwoWrapper}>
                <div className={aspectRatioClasses}>
                  <img src={dataURL} alt={file.name} className={css.rootForFile} />
                </div>
              </div>
              {children}
            </div>
          );
        }}
        renderRejected={() => (
          <div className={classes}>
            <FormattedMessage id="FileFromFile.couldNotReadFile" />
          </div>
        )}
      />
    );
  }
}

FileFromFile.defaultProps = {
  className: null,
  children: null,
  rootClassName: null,
  aspectRatioClassName: null,
};

const { any, node, string } = PropTypes;

FileFromFile.propTypes = {
  className: string,
  rootClassName: string,
  aspectRatioClassName: string,
  file: any.isRequired,
  id: string.isRequired,
  children: node,
};

export default FileFromFile;
