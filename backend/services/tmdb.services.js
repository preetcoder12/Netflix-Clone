require("dotenv").config();
const axios = require("axios") //for fetching

const fetchfromTMDB = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        }
    };

    const response = await axios.get(url, options);
    if (response.status !== 200) {
        throw new Error("unable to fetch from tmdb: " + response.statusText);
    }
    return response.data;

}

module.exports = {
    fetchfromTMDB,
}