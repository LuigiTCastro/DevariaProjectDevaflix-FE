/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpApiServices } from "./HttpApiServices";


export class FilterServices extends HttpApiServices {
    async filter(body: any) {
        const { data } = await this.get(`/search/filter/?${body}`);

        if (data) {
            for (const iten of data) {
                console.log(iten.title);
            }
        }else{
            console.log('Não retornou nenhum titulo')
        }
    }
}