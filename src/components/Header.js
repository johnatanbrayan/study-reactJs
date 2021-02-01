import React from 'react';

/**
 * JSX -> HTML dentro do javascript (Javascript XML).
 */
function Header({ title, children }) {
  return (
    <header>
      <h1>{ title }</h1>
      { children }
    </header>
  );
}

export default Header;