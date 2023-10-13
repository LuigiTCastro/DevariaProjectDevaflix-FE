import { useState } from 'react';
import { BsFillCaretDownFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import  {InputDrop}  from './InputDrop';
import { SearchServices } from '../../Services/SearchServices';

const searchServices = new SearchServices();



function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeInputIndex, setActiveInputIndex] = useState(null);
 


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleInput = (index) => {
    setActiveInputIndex(index === activeInputIndex ? null : index);
  };

  return (
    <div className={`NavbarDropdown ${isOpen ? 'open' : ''}`}>
      <button className='BtnDropdown' onClick={toggleDropdown}>   Categorias <BsFillCaretDownFill /></button>
      <ul className="DropdownMenu">
        <span className='DropdownSpan Inicio' onClick={closeDropdown}>Inicio <IoCloseCircleOutline className="iconClose" /> </span>
        <img/>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Ano">
        <span onClick={() => toggleInput(0)}> Ano </span>
          {activeInputIndex === 0 && <InputDrop tipo="Ano" />}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Ator">
          <span onClick={() => toggleInput(1)}> Ator </span>
          {activeInputIndex === 1 && <InputDrop tipo="Ator"/>}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Genero">
        <span onClick={() => toggleInput(2)}> Gênero </span>
          {activeInputIndex === 2 && <InputDrop tipo="Gênero" />}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Tipo">
        <span onClick={() => toggleInput(3)}> Tipo </span>
          {activeInputIndex === 3 && <InputDrop  tipo="Tipo" />}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Trailer">
        <span onClick={() => toggleInput(4)}> Trailer </span>
          {activeInputIndex === 4 && <InputDrop tipo="Trailer" />}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Diretor">
        <span onClick={() => toggleInput(5)}> Diretor </span>
          {activeInputIndex === 5 && <InputDrop tipo="Diretor" />}
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
