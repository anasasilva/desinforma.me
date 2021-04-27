import axios from 'axios';

class NewsService {
    static fetchNews({ countReal = 10, countFake = 10, currentNewsIds = [] } = {}) {

        const previousGameNewsIds = JSON.parse(localStorage.getItem("previously-seen") || '[]');
        let excludeIds = [...currentNewsIds, ...previousGameNewsIds];

        return axios.post(`${process.env.REACT_APP_API_URL}/api/news`, {
            count_real: countReal,
            count_fake: countFake,
            exclude_news_with_ids: excludeIds
        })
    }

    static async setNewsAsSeen(newsIds = []) {
        const previousGameNewsIds = JSON.parse(localStorage.getItem("previously-seen") || '[]');
        const allIds = [...newsIds, ...previousGameNewsIds];
        localStorage.setItem("previously-seen", JSON.stringify(allIds))
    }
}

export default NewsService;