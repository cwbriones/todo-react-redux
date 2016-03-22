import React, { PropTypes } from 'react';

function Link({ children, onClick }) {
  return (
    <li className="filter">
      <a href="#"
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </a>
    </li>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
