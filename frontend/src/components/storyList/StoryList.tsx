import TextStory from "../../types/TextStory";
import StoryListItem from "./StoryListItem";

function StoryList({stories }: { stories: TextStory[] }) {

    return(
        <div>
            <ul>
                { stories.map((story, i) => <StoryListItem story={story} key={i.toString()}/>) }
            </ul>
        </div>
    )
}

export default StoryList