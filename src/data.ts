import {v4} from 'uuid';
import trello from './assets/trello-min.jpg';
import retroGame from './assets/retro-game-min.jpg';
import chat from './assets/chat-min.jpg';
import listEditor from './assets/list-editor-min.jpg';
import imageGallery from './assets/image-gallery-min.jpg';
import topTaskList from './assets/top-task-list-min.jpg';
import goblinGame from './assets/goblin-game-min.jpg';
import cardValidator from './assets/card-validator-min.jpg';
import modernGallery from './assets/modern-gallery-min.jpg';
import timeline from './assets/timeline-min.jpg';
import converter from './assets/converter-min.jpg';
import training from './assets/training-min.jpg';
import clock from './assets/clock-min.jpg';
import bot from './assets/bot-min.jpg';
import bosanoga from './assets/bosanoga.jpg';


export const filters = [
  { title: 'Все', value: 'all' },
  { title: 'React', value: 'react' },
  { title: 'JavaScript', value: 'javascript' },
];

// export const filters = [
//   { all: 'Все' },
//   { react: 'React' },
//   { javascript: 'JavaScript' },
// ];

// enum FiltersItems {all, React, JavaScript}

// Технология
const stack = {
  javascript: 'javascript',
  react: 'react',
}

// export const filters: string[] = ['all', 'React', 'JavaScript']; // список фильтров

// Список проектов
export const projects = [
  {
    id: v4(),
    title: 'Retro Game',
    desc: 'Двухмерная игра в стиле фэнтези, где игроку предстоит выставлять своих персонажей против персонажей нечисти. После каждого раунда, восстанавливается жизнь уцелевших персонажей игрока и повышается их уровень. Максимальный уровень - 4.',
    stack: stack.javascript,
    imagesUrl: retroGame,
    githubUrl: 'https://github.com/lekseff/RetroGame',
    linkUrl: 'https://lekseff.github.io/RetroGame/',
  },
  {
    id: v4(),
    title: 'Trello',
    desc: 'Доска состоящая из колонок, в каждой колонке может быть несколько карточек.',
    stack: stack.javascript,
    imagesUrl: trello,
    githubUrl: 'https://github.com/lekseff/Trello',
    linkUrl: 'https://lekseff.github.io/Trello/',
  },
  {
    id: v4(),
    title: 'Чат',
    desc: 'В данном проекте имеется серверная и клиентская часть. Соединение устанавливается через WebSocket. Серверная часть реализована с помощью Express.',
    stack: stack.javascript,
    imagesUrl: chat,
    githubUrl: 'https://github.com/lekseff/Messenger__Frontend',
    linkUrl: '',
  },
  {
    id: v4(),
    title: 'Список товаров',
    desc: 'Редактор списка, который позволяет добавлять, редактировать и удалять записи.',
    stack: stack.javascript,
    imagesUrl: listEditor,
    githubUrl: 'https://github.com/lekseff/AHJ_5-2',
    linkUrl: 'https://lekseff.github.io/AHJ_5-2/',
  },
  {
    id: v4(),
    title: 'Галерея изображений с проверкой URL',
    desc: 'Добавляет изображение по ссылке в галерею. ',
    stack: stack.javascript,
    imagesUrl: imageGallery,
    githubUrl: 'https://github.com/lekseff/AHJ_3-3',
    linkUrl: 'https://lekseff.github.io/AHJ_3-3/',
  },
  {
    id: v4(),
    title: 'TOP Tasks List',
    desc: 'Список задач, который позволяет добавлять, редактировать, удалять и закреплять задачи. Также есть поиск по задачам.',
    stack: stack.javascript,
    imagesUrl: topTaskList,
    githubUrl: 'https://github.com/lekseff/AHJ_3-2',
    linkUrl: 'https://lekseff.github.io/AHJ_3-2/',
  },
  {
    id: v4(),
    title: 'Игра с гоблинами',
    desc: 'Увлекательная игра в которой нужно попадать по появляющемуся гоблину. В ростом количества попаданий скорость игры возрастает.',
    stack: stack.javascript,
    imagesUrl: goblinGame,
    githubUrl: 'https://github.com/lekseff/AHJ_3-1',
    linkUrl: 'https://lekseff.github.io/AHJ_3-1/',
  },
  {
    id: v4(),
    title: 'Credit Card Validator',
    desc: 'Валидатор позволяет по номеру карты определить одну из платежных систем: Visa, Mastercard, Мир, Maestro, Amexp, Discover, Dinners, Unionpay, Jcb',
    stack: stack.javascript,
    imagesUrl: cardValidator,
    githubUrl: 'https://github.com/lekseff/AHJ_4_1',
    linkUrl: 'https://lekseff.github.io/AHJ_4_1/',
  },
  {
    id: v4(),
    title: 'Modern Image Manager',
    desc: 'Позволяет добавлять файлы в галерею через DnD. Достаточно перетащить файл из проводника в поле или щелкнуть по нему для добавления через выбор файлов.',
    stack: stack.javascript,
    imagesUrl: modernGallery,
    githubUrl: 'https://github.com/lekseff/Modern-Image-Manager',
    linkUrl: 'https://lekseff.github.io/Modern-Image-Manager/',
  },
  {
    id: v4(),
    title: 'Timeline',
    desc: 'Проект "Timeline" - некая лента постов человека, где он может прикреплять текстовые посты, а также записывать аудио в привязке к своей геопозиции.',
    stack: stack.javascript,
    imagesUrl: timeline,
    githubUrl: 'https://github.com/lekseff/Timeline',
    linkUrl: 'https://lekseff.github.io/Timeline/',
  },
  {
    id: v4(),
    title: 'Конвертер цветов из HEX в RGB',
    desc: 'Показывает представление цвета в формате RGB и меняет цвет фона. Нужно ввести 7 символов (включая решётку), чтобы получить результат.',
    stack: stack.react,
    imagesUrl: converter,
    githubUrl: 'https://github.com/lekseff/Hex_to_RGB_converter',
    linkUrl: 'https://lekseff.github.io/Hex_to_RGB_converter/',
  },
  {
    id: v4(),
    title: 'Учёт тренировок',
    desc: 'Небольшое приложение, которое хранит данные о тренировках (прогулках).',
    stack: stack.react,
    imagesUrl: training,
    githubUrl: 'https://github.com/lekseff/Training_accounting',
    linkUrl: 'https://lekseff.github.io/Training_accounting/',
  },
  {
    id: v4(),
    title: 'Мировые часы',
    desc: 'Часы показывающие время в разных часовых поясах',
    stack: stack.react,
    imagesUrl: clock,
    githubUrl: 'https://github.com/lekseff/World-Clock',
    linkUrl: 'https://lekseff.github.io/World-Clock/',
  },
  {
    id: v4(),
    title: 'Бот',
    desc: 'Бот предназначен как для хранения информации в виде текстовых сообщений, изображений, аудио и видео файлов. Также бот имеет интеграцию с несколькими сервисами API. Он может получать погоду используя Ваше местоположение, новости, курсы таких валют как доллар(USD), евро(EUR), Bitcoin(BTC). В данном проекте имеется серверная часть.',
    stack: stack.javascript,
    imagesUrl: bot,
    githubUrl: 'https://github.com/lekseff/Bot_Frontend',
    linkUrl: '',
  },
  {
    id: v4(),
    title: 'Онлайн магазин',
    desc: 'Небольшой онлайн магазин.',
    stack: stack.react,
    imagesUrl: bosanoga,
    githubUrl: 'https://github.com/lekseff/online-store',
    linkUrl: 'https://lekseff.github.io/online-store/',
  },  
]