import { httpService } from "./httpService";

class ArticleHttpService {
    async findAll(){
        return httpService.get('articles');
    }

    async save(article) {
        return httpService.post('articles', article);
    }
}

export const articleService = Object.freeze(new ArticleHttpService());