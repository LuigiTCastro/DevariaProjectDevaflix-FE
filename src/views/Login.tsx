import logo from '../assets/imagens/logo.svg'
import iconEmail from '../assets/imagens/imgEmail.svg';
import iconChave from '../assets/imagens/imgChave.svg';
import { PublicInput } from '../components/General/PublicInput';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Login = () => {

   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');
   return(
    
      <div className="ContainerPublic">
       <img src={logo} alt='Logo Devaflix' className="logo" />
        <form>
           
        <PublicInput icon={iconEmail} alt="Login" name="Login" placeholder="Login" type="text"
          modelValue={login} setValue={setLogin} />

        <PublicInput icon={iconChave} alt="Senha" name="Senha" placeholder="Senha" type="password"
          modelValue={password} setValue={setPassword} />

            <button type='button' className='$DesktopBreakpoint'> Login
            </button>

            <div className='link'>
                    <p> Não possui uma conta? </p>
                    <Link to='/register'> Faça seu cadastro agora!</Link>
                </div>
        </form>    
     </div>
  
   )
}