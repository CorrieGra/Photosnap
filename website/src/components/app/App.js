import { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
// Pages
import HomePage from '../../pages/home/home';
import FeaturesPage from '../../pages/features/features';
import StoryPage from '../../pages/stories/stories';
import PricingPage from '../../pages/pricing/pricing';
// Components
import Navigation from '../../shared/layout/nav/nav';
import Footer from "../../shared/layout/footer/footer";

function App() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <div className="app">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/features">
            <FeaturesPage />
          </Route>
          <Route path="/stories">
            <StoryPage />
          </Route>
          <Route path="/pricing">
            <PricingPage />
          </Route>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
