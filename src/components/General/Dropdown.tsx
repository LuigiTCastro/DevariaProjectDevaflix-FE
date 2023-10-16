import { useState } from 'react';
import { BsFillCaretDownFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { InputDrop } from './InputDrop';
import { SearchServices } from '../../Services/SearchServices';

const searchServices = new SearchServices();

function Dropdown() {
  const [openCategories, setOpenCategories] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Variável para armazenar a string de pesquisa

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleInput = (index: number) => {
    if (openCategories.includes(index)) {
      setOpenCategories(openCategories.filter((cat) => cat !== index));
    } else {
      setOpenCategories([...openCategories, index]);
    }
  };

  // Função para atualizar a string de pesquisa quando um filtro é adicionado
  const updateSearchQuery = (filter: string) => {
    setSearchQuery((prevSearchQuery) => prevSearchQuery + filter);
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
          {openCategories.includes(0)  && (<InputDrop filtro={"actor"} texto={"Ano de lançamento"} />) }
          {/* {openCategories.includes(0) ? updateSearchQuery("&year=") : console.log("nada")}  */}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Ator">
          <span onClick={() => toggleInput(1)}> Ator </span>
          {openCategories.includes(1) && (
          <InputDrop filtro={"actor"} texto={"Atores"} />
          )}
          {/* {openCategories.includes(1) && updateSearchQuery("&actor=")} */}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Genero">
          <span onClick={() => toggleInput(2)}> Gênero </span>
          {openCategories.includes(2) && (
          <InputDrop filtro={"genre"} texto={"Gênero"} />
          )}
          {/* {openCategories.includes(2) && updateSearchQuery("&genre=")} */}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Diretor">
          <span onClick={() => toggleInput(3)}> Diretor </span>
          {openCategories.includes(3) && (
          <InputDrop filtro={"director"} texto={"Diretor"} />
          )}
          {/* {openCategories.includes(3) && updateSearchQuery("&director=")} */}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Sinopse">
          <span onClick={() => toggleInput(4)}> Sinopse </span>
          {openCategories.includes(4) && (
          <InputDrop filtro={"plot"} texto={"Sinopse"} />
          )}
          {/* {openCategories.includes(4) && updateSearchQuery("&plot=")} */}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Nota/Score">
          <span onClick={() => toggleInput(5)}> Nota/Score </span>
          {openCategories.includes(5) && (
          <InputDrop filtro={"imdbRating"} texto={"Nota/Score"} />
          )}
          {/* {openCategories.includes(5) && updateSearchQuery("&imdbRating=")} */}
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
