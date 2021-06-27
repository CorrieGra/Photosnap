import './home.css';
import Card from "../../components/core/card/card";
import StoryCardList from '../../components/core/story-card-list/story-card-list';
import Features from '../../components/core/features/features';
import { default as mountains } from '../../assets/stories/desktop/mountains.jpg';
import { default as cityscapes } from '../../assets/stories/desktop/cityscapes.jpg';
import { default as voyage } from '../../assets/stories/desktop/18-days-voyage.jpg';
import { default as architecturals } from '../../assets/stories/desktop/architecturals.jpg';
import { default as responsive } from '../../assets/features/desktop/responsive.svg';
import { default as noLimit } from '../../assets/features/desktop/no-limit.svg';
import { default as embed } from '../../assets/features/desktop/embed.svg';


const cardDetails = [
    {
        title: 'Create and share your photo stories.',
        subTitle: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
        imageName: 'create-and-share.jpg',
        theme: 'dark',
    },
    {
        title: 'beautiful stories every time',
        subTitle: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
        imageName: 'beautiful-stories.jpg',
    },
    {
        title: 'designed for everyone',
        subTitle: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
        imageName: 'designed-for-everyone.jpg',
    },
];

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
];

const features = [
    {
        title: '100% responsive',
        description: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
        image: responsive,
    },
    {
        title: 'no photo upload limit',
        description: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
        image: noLimit,
    },
    {
        title: 'available to embed',
        description: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
        image: embed,
    },
]

export default function HomePage() {
    return (
        <div>
            { cardDetails.map((details, index) => (<Card key={index + 1} index={index + 1} title={ details.title } subTitle={ details.subTitle } theme={ !!details.theme ? details.theme : 'light' } />))}
            <StoryCardList stories={stories} />
            <Features features={features} />
        </div>
    );
}