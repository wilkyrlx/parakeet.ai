import apiService from "../api/ApiService"

function HomePage() {
    return (
        <div id="home-page">
            Home Page
            <button onClick={() => apiService.register()}>RegisterTest</button>
        </div>
    )
}

export default HomePage