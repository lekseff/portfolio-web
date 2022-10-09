import React, {useState} from 'react';
import Filters from './components/Filters';
import {filters, projects} from './data';

function App() {  
  const [activeFilter, setActiveFilter] = useState('all');
  
  const changeFilter = (filter: string) => {
    setActiveFilter(filter);
  }
  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">Портфолио</h1>        
      </header>

      <Filters items={filters} active={activeFilter} changeFilter={changeFilter}/>

      <main className="content">

        <div className="content__cards cards">

          <div className="card">
            <div className="card__image"></div>
            <h2 className="card__title">Название проекта</h2>
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti excepturi cum unde soluta voluptas debitis facilis odio mollitia rerum minus illo quia doloribus! At accusantium facere eaque quis enim sapiente aliquid tempore voluptate dolores rem nam, sit repudiandae esse vero tempora dolorum doloremque totam iusto atque odit officia. Exercitationem.
            </p>
            <div className="card__control">
              <a className="card__button-open" href="#">Открыть</a>
              <a className="card__button-github" href="#">Посмотреть на GitHub</a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
