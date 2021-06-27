import './card.css';
import { SecondaryButton } from '../buttons/buttons';

export default function Card({ title, subTitle, index, theme, hasButton = true }) {
    return (
        <div className="card">
            <div className="card__introduction">
                <div className="card__introduction--header">
                    <h1 className="t-upper">
                        { title }
                    </h1>
                </div>

                <div className="card__introduction--sub-header">
                    <p>
                        { subTitle }
                    </p>
                </div>

                { hasButton && (
                    <div className="card__introduction--action">
                        <SecondaryButton type="button" text={ index === 1 ? 'get an invite' : 'view the stories' } theme={ theme }/>
                    </div>
                )}
            </div>

            <div className={`card__showcase card__showcase--${ index }`}></div>
        </div>
    );
}