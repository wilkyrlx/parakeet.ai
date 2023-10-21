import TextStory from "../types/TextStory";
import StoryList from "../components/StoryList"

function ReadPage() {
    const currentDate = new Date();
    const s1 = new TextStory("Title", "Content", currentDate)
    const s2 = new TextStory("Title2", "Content2", currentDate)
    const dummyStories: TextStory[] = [s1, s2]


    return (
        <div id="read-page">
            <StoryList stories={dummyStories}/>
        </div>
    )
}

export default ReadPage