/**
 * Usage without sizes:
 *   <ResponsiveFile
 *     alt="ListingX"
 *     file={fileDataFromSDK}
 *     variants={['landscape-crop', 'landscape-crop2x']}
 *   />
 *   // produces:
 *   <img
 *     alt="ListingX"
 *     src="url/to/landscape-crop.jpg"
 *     srcSet="url/to/landscape-crop.jpg 400w, url/to/landscape-crop2x.jpg 800w" />
 *
 * Usage with sizes:
 *   <ResponsiveFile
 *     alt="ListingX"
 *     file={fileDataFromSDK}
 *     variants={['landscape-crop', 'landscape-crop2x']}
 *     sizes="(max-width: 600px) 100vw, 50vw"
 *   />
 *   // produces:
 *   <img
 *     alt="ListingX"
 *     src="url/to/landscape-crop.jpg"
 *     srcSet="url/to/landscape-crop.jpg 400w, url/to/landscape-crop2x.jpg 800w"
 *     sizes="(max-width: 600px) 100vw, 50vw" />
 *
 *   // This means that below 600px file will take as many pixels there are available on current
 *   // viewport width (100vw) - and above that file will only take 50% of the page width.
 *   // Browser decides which file it will fetch based on current screen size.
 *
 * NOTE: for all the possible file variant names and their respective
 * sizes, see the API documentation.
 */

import React from 'react';
import { arrayOf, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';

import NoFileIcon from './NoFileIcon';
import css from './ResponsiveFile.module.css';

const ResponsiveFile = props => {
  const { className, rootClassName, alt, noFileMessage, file, variants, ...rest } = props;
  const classes = classNames(rootClassName || css.root, className);

  if (file == null || variants.length === 0) {
    const noFileClasses = classNames(rootClassName || css.root, css.noFileContainer, className);

    // NoFileMessage is needed for listing files on top the map (those component lose context)
    // https://github.com/tomchentw/react-google-maps/issues/578
    const noFileMessageText = noFileMessage || <FormattedMessage id="ResponsiveFile.noFile" />;
    return (
      <div className={noFileClasses}>
        <div className={css.noFileWrapper}>
          <NoFileIcon className={css.noFileIcon} />
          <div className={css.noFileText}>{noFileMessageText}</div>
        </div>
      </div>
    );
  }

  const fileVariants = file.attributes.variants;

  const srcSet = variants
    .map(variantName => {
      const variant = fileVariants[variantName];

      if (!variant) {
        // Variant not available (most like just not loaded yet)
        return null;
      }
      return `${variant.url} ${variant.width}w`;
    })
    .filter(v => v != null)
    .join(', ');

  const imgProps = {
    className: classes,
    alt,
    srcSet,
    ...rest,
  };

  return <img {...imgProps} />;
};

ResponsiveFile.defaultProps = {
  className: null,
  rootClassName: null,
  file: null,
  noFileMessage: null,
};

ResponsiveFile.propTypes = {
  className: string,
  rootClassName: string,
  alt: string.isRequired,
  file: propTypes.file,
  variants: arrayOf(string).isRequired,
  noFileMessage: string,
};

export default ResponsiveFile;
