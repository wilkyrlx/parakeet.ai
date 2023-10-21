import TextStory from "../types/TextStory";
import StoryListItem from "./StoryListItem";

function StoryList({stories }: { stories: TextStory[] }) {

    return(
        <div>
            <ul>
                { stories.map((story) => <StoryListItem story={story} />) }
            </ul>
        </div>
    )
}

export default StoryList