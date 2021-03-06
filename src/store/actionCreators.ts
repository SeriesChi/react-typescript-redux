import { ADD_ARTICLE, REMOVE_ARTICLE } from "./actionTypes"

export function addArticle (article: IArticle){
    const action: ArticleAction = {
        type: ADD_ARTICLE,
        article
    }

    return httpSimulateRequest(action);
}

export function removeArticle (article: IArticle) {
    const action: ArticleAction = {
        type: REMOVE_ARTICLE,
        article
    }

    return httpSimulateRequest(action);
}

export function httpSimulateRequest(action: ArticleAction){
    return ((dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    })
}