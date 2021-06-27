import './stories.css';
import StoryCardList from '../../components/core/story-card-list/story-card-list';
import { SecondaryButton } from "../../components/core/buttons/buttons";
// images
import { default as mountains } from '../../assets/stories/desktop/mountains.jpg';
import { default as cityscapes } from '../../assets/stories/desktop/cityscapes.jpg';
import { default as voyage } from '../../assets/stories/desktop/18-days-voyage.jpg';
import { default as architecturals } from '../../assets/stories/desktop/architecturals.jpg';
import { default as worldTour } from '../../assets/stories/desktop/world-tour.jpg';
import { default as unforseenCorners } from '../../assets/stories/desktop/unforeseen-corners.jpg';
import { default as kingOfAfrica } from '../../assets/stories/desktop/king-on-africa.jpg';
import { default as tripToNowhere } from '../../assets/stories/desktop/trip-to-nowhere.jpg';
import { default as rageOfTheSea } from '../../assets/stories/desktop/rage-of-the-sea.jpg';
import { default as runningFree } from '../../assets/stories/desktop/running-free.jpg';
import { default as behindTheWaves } from '../../assets/stories/desktop/behind-the-waves.jpg';
import { default as calmWaters } from '../../assets/stories/desktop/calm-waters.jpg';
import { default as milkyWay } from '../../assets/stories/desktop/milky-way.jpg';
import { default as nightAtTheForest } from '../../assets/stories/desktop/dark-forest.jpg';
import { default as somwarpet } from '../../assets/stories/desktop/somwarpet.jpg';
import { default as landOfDreams } from '../../assets/stories/desktop/land-of-dreams.jpg';


const stories = [
    {
        title: 'the mountains',
        author: 'john appleseed',
        image: mountains,
    },
    {
        title: 'sunset cityscapes',
        author: 'benjamin cruz',
        image: cityscapes,
    },
    {
        title: '18 days voyage',
        author: 'alexei borodin',
        image: voyage,
    },
    {
        title: 'architecturals',
        author: 'samantha brooke',
        image: architecturals,
    },
    {
        title: 'world tour 2019',
        author: 'timothy wagner',
        image: worldTour,
    },
    {
        title: 'unforseen corners',
        author: 'william malcom',
        image: unforseenCorners,
    },
    {
        title: 'king on africa: part II',
        author: 'tim hillenburg',
        image: kingOfAfrica,
    },
    {
        title: 'the trip to nowhere',
        author: 'felicia rourke',
        image: tripToNowhere,
    },
    {
        title: 'rage of the sea',
        author: 'mohammed abdul',
        image: rageOfTheSea,
    },
    {
        title: 'running free',
        author: 'michelle',
        image: runningFree,
    },
    {
        title: 'behind the waves',
        author: 'lamarr wilson',
        image: behindTheWaves,
    },
    {
        title: 'calm waters',
        author: 'samantha brooke',
        image: calmWaters,
    },
    {
        title: 'the milky way',
        author: 'benjamin cruz',
        image: milkyWay,
    },
    {
        title: 'night at the dark forest',
        author: 'mohammed abdul',
        image: nightAtTheForest,
    },
    {
        title: 'somwarpet\'s beauty',
        author: 'michelle',
        image: somwarpet,
    },
    {
        title: 'land of dreams',
        author: 'william malcom',
        image: landOfDreams,
    },
];

export default function StoryPage(){
    return (
      <div className="story__page">
        <div className="hero">
          <div className="container">
            <div className="hero__introduction">
              <div className="hero__introduction--headline">
                  <h4 className="t-upper">last month's featured story</h4>
              </div>
              <div className="hero__introduction--title">
                  <h1 className="t-upper">hazy full moon of appalachia</h1>
              </div>
              <div className="hero__introduction--details">
                <div className="details--date">march 2nd 2020</div>
                <div className="details--author">by <span>john appleseed</span></div>
              </div>
              <div className="hero__introduction--description">
                  <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
              </div>
              <div className="hero__introduction--action">
                <SecondaryButton text="read the story" theme="dark" />
              </div>
            </div>
          </div>
        </div>

        <StoryCardList stories={stories} />
      </div>
    );
}