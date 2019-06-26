import axios from "axios";

const request = axios.create({
  baseURL: "https://dgv-nc-news.herokuapp.com/api/"
});

export const fetchArticles = params => {
  return request.get("/articles", { params });
};

export const fetchArticlesByTopic = (topic, sort_by) => {
  return request
    .get(`articles`, {
      params: {
        topic: topic,
        sort_by: sort_by
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchArticleById = article_id => {
  return request.get(`articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const fetchTopics = () => {
  return request.get("/topics");
};

export const fetchComments = article_id => {
  return request.get(`articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const fetchAddedComment = (article_id, newComment) => {
  return request
    .post(`articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = comment_id => {
  return request.delete(`comments/${comment_id}`).then(res => {
    console.log(res, "inside deleteComment");
  });
};
