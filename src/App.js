import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import newsActions from "./redux/actions/news.action";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleCount = () => {
    dispatch({ type: "increase" }); //action object type, info go with that action
  };

  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };

  // const [dataNews, setDataNews] = useState();
  const data = useSelector((state) => state.news.allNews);
  const isLoading = useSelector((state) => state.news.isLoading);
  useEffect(() => {
    dispatch(newsActions.getAllNews());
  }, []);
  console.log("loading", isLoading);
  return (
    <div className="App">
      <button onClick={handleCount}>I have been clicked {count} times</button>
      <button onClick={handleDecrease}>don't click me </button>
      {isLoading || data.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        data.articles.map((article) => <p>{article.title}</p>)
      )}
    </div>
  );
}

export default App;
