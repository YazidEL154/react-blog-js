import { httpService } from "./httpService";

class ArticleHttpService {
    async findAll(){
        return httpService.get('articles');
    }

    async save(article) {
        return httpService.post('articles', article);
    }

    async update(article){
        return httpService.put(`articles/${article.id}`, article);
    }
}

export const articleService = Object.freeze(new ArticleHttpService());