
import Logo from '../../assets/imagens/logo.svg';
import { Navigation } from './Navigation';
import { useNavigate } from 'react-router';

export const Header = () =>{
  const navigate = useNavigate();
  const id = localStorage.getItem("id") || "";

  const goHome = () =>{
    console.log(id)
    if (id === "" || id === undefined){
      navigate('/')
    }else{
      console.log(typeof(id))
      navigate('/me')
    }
  } 
    return (
      <div className="ContainerHeader">        
        <img className='ImgLogo'src={Logo} alt="Logo Devaflix" onClick={goHome}/>               
            <Navigation/>  
      </div>
    );
} 
