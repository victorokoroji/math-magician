import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, id, children }) => (
  <>
    <button type="button" className={className} id={id}>
      {children}
    </button>
  </>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default Button;
