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

    async delete(article){
        return httpService.delete(`articles/${article.id}`);
    }

    async findById(id){
        return httpService.get(`articles/${id}`);
    }
}

export const articleService = Object.freeze(new ArticleHttpService());