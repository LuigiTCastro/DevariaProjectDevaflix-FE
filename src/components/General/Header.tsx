
import Logo from '../../assets/imagens/logo.svg';
import { Navigation } from './Navigation';

export const Header = () =>{
    return (
      <div className="ContainerHeader">        
        <img className='ImgLogo'src={Logo} alt="Logo Devaflix" />               
            <Navigation/>  
      </div>
    );
} 
