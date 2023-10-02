import { useState } from 'react';
import { BsFillCaretDownFill } from "react-icons/bs";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`NavbarDropdown ${isOpen ? 'open' : ''}`}>
    <button className='BtnDropdown' onClick={toggleDropdown}>   Categorias <BsFillCaretDownFill/></button>
      <ul className="DropdownMenu">
        <span className='DropdownSpan'>Inicio</span>
        <li className="Dropdown-li">Ano</li>  
        <hr className='linhaDivisoria'/>  
        <li className="Dropdown-li">Ator</li>   
        <hr className='LinhaDivisoria'/>       
        <li className="Dropdown-li">Gênero</li>
        <hr className='LinhaDivisoria'/>
        <li className="Dropdown-li">Tipo</li>      
        <hr className='LinhaDivisoria'/>
        <li className="Dropdown-li">Trailer</li> 
        <hr className='LinhaDivisoria'/>
        <li className="Dropdown-li">Diretor</li> 
        <hr className='LinhaDivisoria'/>
        <li className="Dropdown-li">Classificação de idade</li>        

      </ul>
    </div>
  );
}

export default Dropdown;