import TextStory from "../types/TextStory";
import StoryList from "../components/storyList/StoryList"
import { useEffect, useState } from "react";
import apiService from "../api/ApiService";
import NoStories from "../components/storyList/NoStories";


function ReadPage() {
    // const currentDate = new Date();
    // const s1 = new TextStory("Title", "Content", currentDate)
    // const s2 = new TextStory("Title2", "Content2", currentDate)
    // const dummyStories: TextStory[] = [s1, s2]

    const [stories, setStories] = useState<TextStory[]>([])

    useEffect(() => {
        getStories()
    }, [])

    async function getStories() {
        const storiesRaw = await apiService.getAllStoriesFromDB()
        if (storiesRaw == null) {
            return
        }
        const stories: TextStory[] = storiesRaw.map((story: any) => new TextStory(story.title, story.content, new Date(story.date)))
        setStories(stories)
    }

    return (
        <div id="read-page">
            { stories.length > 0 && <StoryList stories={stories}/> }
            { stories.length == 0 && <NoStories /> }
        </div>
    )
}

export default ReadPage