import './features.css';
import Features from '../../components/core/features/features';
import Card from '../../components/core/card/card';
import BetaFooter from '../../components/core/beta-foot/beta-foot';
import { default as responsive } from '../../assets/features/desktop/responsive.svg';
import { default as noLimit } from '../../assets/features/desktop/no-limit.svg';
import { default as embed } from '../../assets/features/desktop/embed.svg';
import { default as customDomain } from '../../assets/features/desktop/custom-domain.svg';
import { default as boostExposure } from '../../assets/features/desktop/boost-exposure.svg';
import { default as dragDrop } from '../../assets/features/desktop/drag-drop.svg';

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
    {
        title: 'custom domain',
        description: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
        image: customDomain,
    },
    {
        title: 'boost your exposure',
        description: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
        image: boostExposure,
    },
    {
        title: 'drag & drop image',
        description: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories. ',
        image: dragDrop,
    },
]

export default function FeaturesPage() {
    return (
        <div>
            <Card 
            index="4"
            theme="dark"
            title="features"
            subTitle="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
            hasButton={false}
            />
            <Features features={features} />
            <BetaFooter />
        </div>
    );
}