import axios from "axios";

const request = axios.create({
  baseURL: "https://dgv-nc-news.herokuapp.com/api/"
});

export const fetchArticles = () => {
  return request.get("/articles");
};

export const fetchArticlesByTopic = topic => {
  return request
    .get(`articles`, {
      params: {
        topic: topic
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchArticleById = article_id => {
  return request.get(`articles/${article_id}`).then(({ data }) => {
    console.log(data, "FID");
    return data;
  });
};

export const fetchTopics = () => {
  return request.get("/topics");
};
