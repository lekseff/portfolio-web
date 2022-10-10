import { IProject } from '../interfaces';

function Card(props: IProject) {
    const { title, desc, imagesUrl, githubUrl, linkUrl } = props;
    return (
        <div className='card'>
            <div className='card__image' style={{backgroundImage: `url(${imagesUrl})`}}></div>
            <h2 className='card__title'>{title}</h2>
            <p className='card__description'>{desc}</p>
            <div className='card__control'>
                {!!linkUrl && <a className='card__button-open' href={linkUrl} target='blank'>
                    Открыть
                </a>}
                <a className='card__button-github' href={githubUrl} target='blank'>
                    Посмотреть на GitHub
                </a>
            </div>
        </div>
    );
}

export default Card;
