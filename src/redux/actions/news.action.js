const newsActions = {};

newsActions.getAllNews = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_ALL_NEWS_REQUEST", payload: null });
      const url =
        "https://newsapi.org/v2/everything?q=everything&apiKey=97a8df3625884a2da87308f934ecfbbd";
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_ALL_NEWS", payload: data });
    } catch (err) {
      console.log("error", err);
      dispatch({ type: "GET_ALL_NEWS_FAIL" });
    }
  };
};
export default newsActions;

/* newsActions {
    getAllNews : ()=>{}
} */
