import TextStory from "../../types/TextStory";

function convertDate(d: Date): String {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return `${monthNames[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}`
}

function StoryListItem({ story }: { story: TextStory }) {
    return (
        <div className="list-item" >
            <div className="list-item-header">
                <h3 className="list-item-name">{story.title}</h3>
                <p className="list-item-date">{convertDate(story.date)}</p>
            </div>
            <p className="list-item-content">{story.content}</p>
        </div>
    )
}

export default StoryListItem