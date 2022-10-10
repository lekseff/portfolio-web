import {v4} from 'uuid';
import trello from './assets/trello.jpg';

// export const filters = [
//   { name: 'Все', value: 'all' },
//   { name: 'React', value: 'react' },
//   { name: 'JavaScript', value: 'javascript' },
// ];

// export const filters = [
//   { all: 'Все' },
//   { react: 'React' },
//   { javascript: 'JavaScript' },
// ];

// enum FiltersItems {all, React, JavaScript}

export const filters: string[] = ['all', 'React', 'JavaScript']; // список фильтров

export const projects = [
  {
    id: v4(),
    title: 'Название проекта 1',
    desc: 'Описание проекта 1',
    stack: 'React',
    imagesUrl: '',
    githubUrl: 'https://github.com/lekseff/Trello',
    linkUrl: 'https://lekseff.github.io/Trello/',
  },
  {
    id: v4(),
    title: 'Название проекта 2',
    desc: 'Описание проекта 2',
    stack: 'JavaScript',
    imagesUrl: trello,
    githubUrl: 'url',
    linkUrl: 'url',
  },
  {
    id: v4(),
    title: 'Название проекта 3',
    desc: 'Описание проекта 3',
    stack: 'JavaScript',
    imagesUrl: trello,
    githubUrl: 'https://github.com/lekseff/Trello',
    linkUrl: 'https://lekseff.github.io/Trello/',
  },
  {
    id: v4(),
    title: 'Название проекта 4',
    desc: 'Описание проекта 4',
    stack: 'React',
    imagesUrl: trello,
    githubUrl: 'https://github.com/lekseff/Trello',
    linkUrl: 'https://lekseff.github.io/Trello/',
  },
  {
    id: v4(),
    title: 'Название проекта 5',
    desc: 'Описание проекта 5',
    stack: 'React',
    imagesUrl: trello,
    githubUrl: 'https://github.com/lekseff/Trello',
    linkUrl: 'https://lekseff.github.io/Trello/',
  },
  {
    id: v4(),
    title: 'Название проекта 6',
    desc: 'Описание проекта 6',
    stack: 'React',
    imagesUrl: trello,
    githubUrl: 'https://github.com/lekseff/Trello',
    linkUrl: 'https://lekseff.github.io/Trello/',
  },
  {
    id: v4(),
    title: 'Название проекта 7',
    desc: 'Описание проекта 7',
    stack: 'JavaScript',
    imagesUrl: trello,
    githubUrl: 'https://github.com/lekseff/Trello',
    linkUrl: 'https://lekseff.github.io/Trello/',
  },
]