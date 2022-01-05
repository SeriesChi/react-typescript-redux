import React, { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AddArticle } from "./components/AddArticle";
import { Dispatch } from "redux";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addArticle, removeArticle } from "./store/actionCreators";
import { Article } from "./components/Article";

function App() {
  const articles: IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = useCallback(
    (article) => {
      dispatch(addArticle(article));
    },
    [dispatch]
  );

  return (
    <div className="App">
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </div>
  );
}

export default App;
