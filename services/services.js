export const API_KEY = `bb5dfc1860e7468184c46683fd32ca3e`;
export const endpoint = `https://newsapi.org/v2/top-headlines`;
export const category = 'general';
export const country = 'us'


export async function services(category = 'general') {
    let articles = await fetch(`${endpoint}?country=${country}&category=${category}`, {
        headers: {
            'X-API-KEY': API_KEY
        }
    });

    let result = await articles.json();
    articles = null;

    return result.articles;
}