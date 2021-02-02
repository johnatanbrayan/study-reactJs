import React, { useState } from 'react';
import Header from './components/Header';

import './App.css'
import background from './assets/HgflTDf.jpg'

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
      <img width={ 300 } src={ background } alt="Bridge"/>
       
      <ul>
        { projects.map( p => <li key={ p }> { p } </li> ) }
      </ul>

      <button type="button" onClick={ handleAddProject }>Add Project</button>
    </>

  );
}

export default App;