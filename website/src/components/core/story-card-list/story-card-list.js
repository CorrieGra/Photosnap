import './story-card-list.css';
import StoryCard from "./story-card/story-card"

export default function StoryCardList({ stories }) {
    return (
        <div className="story__card--list">
            { stories.map((story, index) => (<StoryCard key={index + 1} title={ story.title } author={ story.author } imageUrl={ story.image } />)) }
        </div>
    )
}