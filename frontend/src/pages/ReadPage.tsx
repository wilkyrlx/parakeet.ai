import TextStory from "../types/TextStory";
import StoryList from "../components/StoryList"
import { useEffect, useState } from "react";
import apiService from "../api/ApiService";
import NoStories from "../components/NoStories";

// TODO: something should be shown if there are no stories

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

    console.log(stories.length)

    return (
        <div id="read-page">
            { stories.length > 0 && <StoryList stories={stories}/> }
            { stories.length == 0 && <NoStories /> }
        </div>
    )
}

export default ReadPage