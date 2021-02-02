import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [ projects, setProject ] = useState( ['Curso1', 'Curso2'] );

  function handleAddProject() {
    const newProject = "New Project" + Date.now();
    setProject([...projects, newProject]);
    console.log(projects);
  }

  return (
    <>
      <Header title='Projets'/>
      <ul>
        { projects.map( p => <li key={ p }> { p } </li> ) }
      </ul>

      <button type="button" onClick={ handleAddProject }>Add Project</button>
    </>

  );
}

export default App;