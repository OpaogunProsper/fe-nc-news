import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-676h.onrender.com/api",
});

function getArticles() {
  return api.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
}
function getArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}
function getComments (article_id) {
  return api.get(`/articles/${article_id}/comments`)
  .then(({ data }) =>{
    return data.comments
  })
}
function updateArticleVotes(article_id, inc_votes){
  return api.patch(`/articles/${article_id}`,{inc_votes})
}
export { getArticles, getArticleById, getComments, updateArticleVotes};
