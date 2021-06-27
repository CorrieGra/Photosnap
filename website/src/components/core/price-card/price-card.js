import './price-card.css';
import { PrimaryButton } from '../buttons/buttons';
import { useEffect, useState } from 'react';

export default function PriceCard({ title, description, price, subscriptionType, theme }) {
    const [previousPrice, setPreviousPrice] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [countHasStarted, setCountHasStarted] = useState(false);
    const [countInterval, setCountInterval] = useState(null);

    const startCount = () => {
        setPreviousPrice(price);
        const difference = price - previousPrice;
        const interval = setInterval(() => { difference < 0 ? setCurrentPrice(c => c - 1) : setCurrentPrice(c => c + 1) }, .0001);
        setCountInterval(interval);
    }

    const stopCount = (interval) => {
        clearInterval(interval);
    }

    useEffect(() => {
        if (!countHasStarted) {
            setCountHasStarted(() => true);
            startCount();
        } else if (price === currentPrice)  {
            stopCount(countInterval);
            setCountHasStarted(() => false);
        }
    }, [price, currentPrice]);

    return (
        <div className={ `price__card ${ theme === 'dark' ? 'dark' : '' }` }>
            <div className="price__card--header">
                <h2 className="price__card--title t-upper">{ title }</h2>
                <p className="price__card--description">{ description }</p>
            </div>
            <div className="price__card--body">
                <h1 className="t-upper">$ { parseInt(currentPrice).toFixed(2) }</h1>
                <span>per { subscriptionType }</span>
            </div>
            <div className="price__card--action">
                <PrimaryButton type="button" text="pick plan" theme={ theme }/>
            </div>
        </div>
    );
}