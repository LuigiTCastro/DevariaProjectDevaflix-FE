
import Logo from '../../assets/imagens/logo.svg';
import { Navigation } from './navigation';

export const Header = () =>{
    return (
      <div className="ContainerHeader">        
        <img className='ImgLogo'src={Logo} alt="Logo Devaflix" />               
            <Navigation/>  
      </div>
    );
} 
