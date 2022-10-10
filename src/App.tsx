import React, {useState} from 'react';
import Filters from './components/Filters';
import Card from './components/Card';
import {filters, projects} from './data';

function App() {  
  const [activeFilter, setActiveFilter] = useState('all'); // Активный фильтр
  
  /**
   * Смена состояния фильтра
   * @param filter - название фильтра
   */
  const changeFilter = (filter: string) => {
    setActiveFilter(filter);
  }

  const filtered = activeFilter === 'all' ? projects : projects.filter(item => item.stack === activeFilter);
  
  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">Портфолио</h1>        
      </header>

      <Filters items={filters} active={activeFilter} changeFilter={changeFilter}/>

      <main className="content">

        <div className="content__cards cards">
          {filtered.map(project => <Card {...project} key={project.id}/>)}
        </div>
      </main>
    </div>
  );
}

export default App;
