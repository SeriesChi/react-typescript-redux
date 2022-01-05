import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

type ArticleProps = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

export const Article: React.FC<ArticleProps> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = useCallback(
    (article: IArticle) => {
      dispatch(removeArticle(article));
    },
    [dispatch, removeArticle]
  );

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  );
};
