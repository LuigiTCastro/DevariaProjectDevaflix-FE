import imgAvatar from '../../assets/imagens/imgAvatar.svg';
import iconHome from '../../assets/imagens/imgHome.svg';
import Dropdown from './Dropdown';
import Search from './Search';
// import { useState } from 'react';





export const Navigation = () => {
  const id = localStorage.getItem("id") || "";


  const handleHomeClick = () => {
    const isOnMyPage = window.location.pathname === "/me";

    if (!isOnMyPage) {
      window.location.href = "/home";
    }
  };

  const handleLoginClick = () => {
    window.location.href = id ? "/me" : "/login";
  };

  const handleLogoutClick = () => {
    localStorage.clear();
    window.location.href = "/home";
  };

    return (
      <div className="ContainerNavigation">             
           <Dropdown />        
           <Search updateResults={""} />          
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
