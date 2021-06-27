import './feature.css';

export default function Feature({ item }) {
    return (
        <div className="feature">
            <div className="feature__logo">
                <img src={ item.image } alt="" />
            </div>
            <div className="feature__title t-cap">
                <p style={{ fontSize: '1.8rem' }}>{ item.title }</p>
            </div>
            <div className="feature__description">
                <p>{ item.description }</p>
            </div>
        </div>
    );
}