import { combineReducers } from "redux";

import counterReducer from "./counter.reducer";
import newsReducer from "./news.reducer";

//state = {count:5}
//state = {allNews: []}
export default combineReducers({
  counter: counterReducer,
  news: newsReducer,
});
/* 
    state = {
        counter: {count:5},
        news: {allNews: []}
    }


const count = useSelector(state => state.counter.count)

*/
