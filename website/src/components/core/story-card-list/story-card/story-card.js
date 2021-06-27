import './story-card.css';

export default function StoryCard({ title, author, imageUrl }) {
  return (
    <div 
    className="story__card"
    style={{ background: `url(${imageUrl}) no-repeat center center / cover` }}>
      <div className=""></div>
      <div className="story__card--body">
        <div className="story__card--details">
          <div className="details--name t-cap">{ title }</div>
          <div className="details--author">by <span className="t-cap">{ author }</span></div>
        </div>
        
        <div className="story__card--action">
            <span className="t-upper">read story</span>
            <span className="special--char">&#8594;</span>
        </div>
      </div>
    </div>
  );
}
