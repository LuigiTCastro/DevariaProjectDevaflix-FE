import logo from '../assets/imagens/logo.svg';
import iconUser from '../assets/imagens/imgUser.svg';
import iconEmail from '../assets/imagens/imgEmail.svg';
import iconChave from '../assets/imagens/imgChave.svg';
import { PublicInput } from '../components/General/PublicInput';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AvatarInput } from '../components/General/AvatarInput';
import { UploadImg } from '../components/General/UploadImg';


export const Register = () => { 

   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');
    
   return(
    
      <div className="ContainerPublic register">
       <img src={logo} alt='Logo Devaflix' className="logo" />  
           
        <form>
               <UploadImg />
               <AvatarInput/>               
              {/*<p className='error'> Favor preencher os campos</p>*/}      
              <PublicInput icon={iconUser} alt="Usuario" name="Usuario" placeholder="Usuario" type="text"  modelValue={login} setValue={setLogin} />      

              <PublicInput icon={iconEmail} alt="Login" name="Login" placeholder="Login" type="text" modelValue={login} setValue={setLogin} />

              <PublicInput icon={iconChave} alt="Senha" name="Senha" placeholder="Senha" type="password" modelValue={password} setValue={setPassword} />

              <PublicInput icon={iconChave} alt="Confirme a Senha" name="Confirme a Senha" placeholder="Confirmar Senha" type="password" modelValue={password} setValue={setPassword} />  
                        
              <button type='button' className='$DesktopBreakpoint'> Cadastrar </button>

                <div className='link'>
                      <p> Já possui uma conta!</p>
                      <Link to='/'> Faça seu login agora!</Link>
                    </div>
        </form>    
     </div>
  
   )
}