import * as actionTypes from "./actionTypes";

export const initialState: ArticleState = {
    articles: [{
        id: 0,
        title: "Post 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 1,
        title: "Post 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }]
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
 ): ArticleState => {
    switch(action.type){
        case actionTypes.ADD_ARTICLE:
            let newArticle: IArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body
            }

            return {...state, articles: state.articles.concat(newArticle)};

        case actionTypes.REMOVE_ARTICLE:
            let updatedState: IArticle[] = state.articles.filter((item) => item.id !== action.article.id);

            return {...state, articles: updatedState};
    }
    return state;
 }

 export default reducer;