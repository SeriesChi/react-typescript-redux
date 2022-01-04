import React, { useState } from "react";

export const Home = () => {
  const [article, setArticle] = useState<IArticle | null>(null);

  const handleChangeText = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event, "event");
  };

  const addNewArticle = () => {};

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter title"
          onChange={handleChangeText}
        />
        <input type="text" name="body" id="body" placeholder="Enter body" />
        <button disabled={article === null ? true : false}>Add Article</button>
      </form>
    </>
  );
};
