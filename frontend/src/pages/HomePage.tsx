import apiService from "../api/ApiService"
import TextStory from "../types/TextStory"


/*
    This is a dummy page. Not used in production
*/
function HomePage() {

    const currentDate = new Date();
    const s1 = new TextStory("Title", "Content", currentDate)
    const s2 = new TextStory("Title2", "Content2", currentDate)
    const dummyStories: TextStory[] = [s1, s2]

    return (
        <div id="home-page">
            Home Page
            <button onClick={() => apiService.register("john@email.com", "password")}>RegisterTest</button>
            <button onClick={() => apiService.login("john@email.com", "password")}>LoginTest</button>
            <button onClick={() => apiService.addStoryToDB(s1)}> add Story test</button>
            <button onClick={() => apiService.getAllStoriesFromDB()}> get Stories test</button>
        </div>
    )
}

export default HomePage