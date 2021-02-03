import React, { useState, useEffect } from 'react';
import Header from './components/Header';

import './App.css'
import background from './assets/HgflTDf.jpg'
import api from './service/api';

function App() {
  const [ projects, setProject ] = useState( [] );

  useEffect(() => {
    api.get('projects').then(res => {
      setProject(res.data);
      console.log(res);
    })
  }, []);

  async function handleAddProject() {
    const newProject = `New Project ${ Date.now() }`;

    const res = await api.post('projects', {
      title: newProject,
      owner: 'John'
    });

    const project = res.data;

    setProject([...projects, project]);
  }

  return (
    <>
      <Header title='Projets'/>
      <img width={ 300 } src={ background } alt="Bridge"/>
       
      <ul>
        { projects.map( p => <li key={ p.id }> { p.title } </li> ) }
      </ul>

      <button type="button" onClick={ handleAddProject }>Add Project</button>
    </>

  );
}

export default App;