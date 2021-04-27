import axios from 'axios';

class NewsService {
    static async fetchNews({ countReal = 5, countFake = 5, currentNewsIds = [] } = {}) {

        const previousGameNewsIds = JSON.parse(localStorage.getItem("previously-seen") || '[]');
        let excludeIds = [...currentNewsIds, ...previousGameNewsIds];

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/news`, {
                count_real: countReal,
                count_fake: countFake,
                exclude_news_with_ids: excludeIds
            })
            return response.data;
        }
        catch (err) {
            console.error(err);
            return [];
        }
    }

    static async setNewsAsSeen(newsIds = []) {
        localStorage.setItem("previously-seen", JSON.stringify(newsIds))
    }
}

export default NewsService;