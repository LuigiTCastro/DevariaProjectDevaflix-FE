/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpApiServices } from "./HttpApiServices";


export class LoginServices extends HttpApiServices {
    async login(body: any, setToken: any) {
        //chamar na API
        const { data } = await this.post('/auth/login', body);
        //com a API de login dando certo  ,setamos no localstorage o email que voltou do data
        if (data) {
            localStorage.setItem('email', data.email);
            localStorage.setItem('token', data.token);
            //pega a reposta de segunda API,do nosso usuario
            const userResponse = await this.get('/user');
            if (userResponse && userResponse.data) {
                const user = userResponse.data;

                localStorage.setItem('id', user.id);
                localStorage.setItem('name', user.name);

                if (user.avatar) {
                    localStorage.setItem('avatar', user.avatar);
                }
            }
            setToken(data.token);
           
        }
    }
    //deslogar, limpar o localstorage
    logout(setToken: any) {
        localStorage.clear();
        setToken('');
    }
}
