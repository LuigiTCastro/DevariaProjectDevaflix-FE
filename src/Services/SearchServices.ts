/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpApiServices } from "./HttpApiServices";


export class SearchServices extends HttpApiServices {
    async title(title: string) {
        const { data } = await this.get(`/search/title/?title=${title}`);

        if (data) {
            for (const iten of data) {
                console.log(iten.title);
            }
        }else{
            console.log('Não retornou nenhum titulo')
        }
    }
}