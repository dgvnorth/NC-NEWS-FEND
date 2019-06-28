import axios from "axios";

const request = axios.create({
  baseURL: "https://dgv-nc-news.herokuapp.com/api/"
});

// export const fetchArticles = params => {
//   return request.get("/articles", { params });
// };

export const getArticles = (topic, sort_by, order) => {
  return request
    .get(`articles`, {
      params: {
        topic: topic,
        sort_by: sort_by,
        order: order
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

export const removeComment = comment_id => {
  return request.delete(`comments/${comment_id}`).then(res => {});
};

export const patchArticleVotes = (article_id, increament) => {
  return request
    .patch(`articles/${article_id}`, { inc_votes: increament })
    .then(({ data }) => {
      return data.article;
    });
};

export const patchCommentVotes = (comment_id, increament) => {
  return request
    .patch(`comments/${comment_id}`, { inc_votes: increament })
    .then(({ data }) => {
      return data.comment;
    });
};

export const fetchUser = username => {
  return request.get(`users/${username}`).then(({ data }) => {
    return data;
  });
};
