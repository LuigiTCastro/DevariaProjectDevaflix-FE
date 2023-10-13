/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpApiServices } from "./HttpApiServices";

export class SearchServices extends HttpApiServices {
    async title(title: string) {
        return await this.get(`/search/title/?title=${title}`);
    }

    async filter(query: any) {
        return await this.get(`/search/filter/?${query}`);
    }

    async details(query: any) {
        return await this.get(`/search/movie/?${query}`);
    }

    async like(id:string){
        return await this.put(`/search/like/${id}`,{});
    }

    async dislike(id:string) {
        return await this.put(`/search/dislike/${id}`, {});
    }
}
