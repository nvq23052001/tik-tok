import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Image.module.scss';
import images from '~/assets';
const Image = forwardRef(({ src, alt = '', className, fallBack: customFallback = images.noImage, ...props }, ref) => {
  const [fallBack, setFallback] = useState('');

  const handleErrorImage = () => {
    setFallback(customFallback);
  };
  return (
    <img
      alt={alt}
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallBack || src}
      {...props}
      onError={handleErrorImage}
    />
  );
});

export default Image;
