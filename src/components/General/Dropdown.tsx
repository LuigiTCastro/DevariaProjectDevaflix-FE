import { useState } from 'react';
import { BsFillCaretDownFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { InputDrop } from './InputDrop';
// import { SearchServices } from '../../Services/SearchServices';

// const searchServices = new SearchServices();

function Dropdown() {
  const [openCategories, setOpenCategories] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleInput = (index) => {
    if (openCategories.includes(index)) {
      setOpenCategories(openCategories.filter((cat) => cat !== index));
    } else {
      setOpenCategories([...openCategories, index]);
    }
  };
  
  return (
    <div className={`NavbarDropdown ${isOpen ? 'open' : ''}`}>
      <button className='BtnDropdown' onClick={toggleDropdown}>
        Categorias <BsFillCaretDownFill />
      </button>
      <ul className="DropdownMenu">
        <span className='DropdownSpan Inicio' onClick={closeDropdown}>Inicio <IoCloseCircleOutline className="iconClose" /> </span>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Ano">
          <span onClick={() => toggleInput(0)}> Ano </span>
          {openCategories.includes(0) && <InputDrop filtro={"year"} texto={"Ano do Filme"} />}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Ator">
          <span onClick={() => toggleInput(1)}> Ator </span>
          {openCategories.includes(1) && <InputDrop filtro={"actor"} texto={"Atores"} />}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Genero">
          <span onClick={() => toggleInput(2)}> Gênero </span>
          {openCategories.includes(2) && <InputDrop filtro={"genre"} texto={"Gênero"} />}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Diretor">
          <span onClick={() => toggleInput(3)}> Diretor </span>
          {openCategories.includes(3) && <InputDrop filtro={"Director"} texto={"Diretor"} />}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Sinopse">
          <span onClick={() => toggleInput(4)}> Sinopse </span>
          {openCategories.includes(4) && <InputDrop filtro={"plot"} texto={"Sinopse"} />}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Nota/Score">
          <span onClick={() => toggleInput(5)}> Nota/Score </span>
          {openCategories.includes(5) && <InputDrop filtro={"imdbRating"} texto={"Nota/Score"} />}
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
