import './buttons.css';

export const PrimaryButton = ({ type, text, theme = 'light' }) => {
    return ( <button className={`btn btn--primary ${theme === 'light' ? 'btn--light' : 'btn--dark'}`} type={ type }>{ text }</button> );
}

export const SecondaryButton = ({ type, text, theme = 'light' }) => {
    return ( 
        <button className={`btn btn--secondary ${theme === 'light' ? 'btn--light' : 'btn--dark'}`} type={ type }>{ text } <span className="special--char">&#8594;</span></button> 
    );
}