import React from 'react';

/**
 * JSX -> HTML dentro do javascript (Javascript XML).
 */
function Header({ title }) {
  return (
    <header>
      <h1>{ title }</h1>
    </header>
  );
}

export default Header;