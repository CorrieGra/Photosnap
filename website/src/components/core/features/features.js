import './features.css';
import Feature from './feature/feature';

export default function Features({ features }) {
    return (
        <div className="features">
          { features.map((feature, index) => (<Feature key={ index + 1 } item={ feature } />)) }
        </div>
    );
}