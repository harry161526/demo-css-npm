import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({
  children,
  primary,
  size,
  isDisabled
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isDisabled: PropTypes.bool,
}

Button.defaultProps = {
  primary: true,
  size: 'medium',
  isDisabled: false
}
