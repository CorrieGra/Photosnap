import './beta-foot.css';
import { SecondaryButton } from '../buttons/buttons';

export default function BetaFooter() {
  return (
    <div className="beta">
      <div className="container">
        <div className="beta__description">
          <h1 className="t-upper">We’re in beta. Get your invite today!</h1>
        </div>
        <div className="beta__action">
          <SecondaryButton theme="dark" text="get an invite" />
        </div>
      </div>
    </div>
  );
}
