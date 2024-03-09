import React from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean,
  /**
   * What background color to use
   */
  backgroundColor?: string,
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large',
  /**
   * Button contents
   */
  label: string,
  /**
   * Optional click handler
   */
  onClick?: () => void,
}

/**
 * Primary UI component for user interaction
 */
export default function Button({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  const mode = primary ? styles.storybookButton__primary : styles.storybookButton__secondary;
  return (
    <button
      type="button"
      className={clsx(
        styles.storybookButton,
        { [styles.storybookButton__small]: size === 'small' },
        { [styles.storybookButton__medium]: size === 'medium' },
        { [styles.storybookButton__large]: size === 'large' },
        mode,
      )}
      {...props}
    >
      {label}
      <style jsx>
        {`
        button {
          background-color: ${backgroundColor};
        }
      `}
      </style>
    </button>
  );
}
