import axios from "axios"

// const clientId = "a8fbcc714f0a4a158f2d4baee62667d6"
const clientId = "7d9076b6d77a491b90dc025d916afa3b"
const authEndpoint = "https://accounts.spotify.com/authorize?"
const redirectUri = "http://localhost:3000"
const scopes = ["user-library-read", "playlist-read-private"]

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
})

export const setClientToken = (token)=>{
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

export default apiClient;