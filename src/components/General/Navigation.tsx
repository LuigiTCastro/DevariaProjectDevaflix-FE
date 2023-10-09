import imgAvatar from '../../assets/imagens/imgAvatar.svg';
import iconHome from '../../assets/imagens/imgHome.svg';
import Dropdown from './Dropdown';
import Search from './Search';






export const Navigation = () =>{
    const id = localStorage.getItem('id') || "";
    const avatar= localStorage.getItem('avatar') || "";

   const rightButton = () => {
       let isAuth;
       if (!id){
         isAuth = "false";
       }else{
         isAuth = "true";
       }
       return isAuth;
     }

    



    return (
      <div className="ContainerNavigation">             
                  
           <Search />          
           <div className="IconeHome">
          <img src={iconHome} alt="Icone Home" onClick={() => (window.location.href = "/home")} />
           </div>      
           <div className="AvatarMini login">  
              {rightButton() ? (
                <img className='imgAvatar'
                src={!imgAvatar? avatar : imgAvatar} 
                onClick={() => (window.location.href = "/me")}
                alt="Avatar" />
              ) : (
                <button className='btnHeaderEntrar' 
                type="button" 
                onClick={() => (window.location.href = "/login")}>
                  Entrar!
                </button>
              )}
            </div>
              <Dropdown /> 
          </div>
    
     
    );

    

    }

