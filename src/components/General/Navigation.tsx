import imgAvatar from '../../assets/imagens/imgAvatar.svg';
import iconHome from '../../assets/imagens/imgHome.svg';
import Dropdown from './Dropdown';
import Search from './Search';
import { useState } from 'react';





export const Navigation = () =>{
   //const [searchQuery, setSearchQuery] = useState('');
   const [dropdownOpen, setDropdownOpen] = useState(false);
   //const loggedIn = false; 

   //const handleSearch = (query) => {
  //  setSearchQuery(query);
  //};
  //const cliqueDropdown = () => {
   // setDropdownOpen(!dropdownOpen);
  //};


    return (
      <div className="ContainerNavigation">             
           <Dropdown />        
           <Search />          
           <div className="IconeHome">
          <img src={iconHome} alt="Icone Home" onClick={() => (window.location.href = "/home")} />
           </div>      
            <div className="AvatarMini">           
              <img className='imgAvatar'src={imgAvatar} alt="Avatar" />    
            </div>
            <div className='BtnEntrar'>
              <button className='btnHeaderEntrar' type="button" onClick={() => (window.location.href = "/login")}>
                   Entrar!
              </button>
            </div>
          </div>
    
     
    );
} 
