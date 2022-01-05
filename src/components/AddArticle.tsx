import React, { useState } from "react";

type AddArticleProps = {
  saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<AddArticleProps> = ({ saveArticle }) => {
  const [article, setArticle] = useState<IArticle | {}>();

  const handleChangeText = (event: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const addNewArticle = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(article, "article");
    saveArticle(article);
  };

  return (
    <>
      <form onSubmit={addNewArticle}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter title"
          onChange={handleChangeText}
        />
        <input
          type="text"
          name="body"
          id="body"
          placeholder="Enter body"
          onChange={handleChangeText}
        />
        <button disabled={article === undefined ? true : false}>
          Add Article
        </button>
      </form>
    </>
  );
};
