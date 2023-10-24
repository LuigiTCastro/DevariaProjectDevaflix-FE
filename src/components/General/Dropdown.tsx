/*import { useState } from 'react';
import { BsFillCaretDownFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { InputDrop } from './InputDrop';
import { SearchServices } from '../../Services/SearchServices';
import { useNavigate } from 'react-router';

const searchServices = new SearchServices();

function Dropdown() {
  const [openCategories, setOpenCategories] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  // const [query, setQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  const queryString = Object.entries(selectedFilters)
  .map(([atributo, valor]) => `&${atributo}=${valor}`)
  .join("");
  const navigate = useNavigate();

  const sendFilterParams = async (queryString:string) =>{
    console.log("vamos filtrar!",queryString)
    try {
      console.log(`filtrou ${queryString}`);
      const { data } = await searchServices.filter(queryString);
      console.log(data)
      navigate(`/search-results/${queryString}`, { state: { results: data } });
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleInput = (index:number) => {
    if (openCategories.includes(index)) {
      setOpenCategories(openCategories.filter((cat) => cat !== index));
    } else {
      setOpenCategories([...openCategories, index]);
    }
  };

  const updateQuery = (filtro: string, valor: string) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filtro]: valor,
    }));
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
          {openCategories.includes(0) && (
          <InputDrop filtro="year" texto="Ano do Filme" 
          updateQuery={updateQuery}/>
          )}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Ator">
          <span onClick={() => toggleInput(1)}> Ator </span>
          {openCategories.includes(1) && (
          <InputDrop filtro="actor" texto="Atores" 
          updateQuery={updateQuery}/>
          )}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Genero">
          <span onClick={() => toggleInput(2)}> Gênero </span>
          {openCategories.includes(2) && (
          <InputDrop filtro="genre" texto="Gênero" 
          updateQuery={updateQuery}/>
          )}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Diretor">
          <span onClick={() => toggleInput(3)}> Diretor </span>
          {openCategories.includes(3) && (
          <InputDrop filtro="director" texto="Diretor"
          updateQuery={updateQuery}/>
          )}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Sinopse">
          <span onClick={() => toggleInput(4)}> Sinopse </span>
          {openCategories.includes(4) && (
          <InputDrop filtro="plot" texto="Sinopse" 
          updateQuery={updateQuery}/>
          )}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Nota/Score">
          <span onClick={() => toggleInput(5)}> Nota/Score </span>
          {openCategories.includes(5) && (
          <InputDrop filtro="imdbRating" texto="Nota/Score"
          updateQuery={updateQuery}/>
          )}
        </li>
        <button className='SendFilters' onClick={() => sendFilterParams(queryString)}>
        Filtrar! 
      </button>
      </ul>
    </div>
  );
}

export default Dropdown;*/

import { useState } from 'react';
import { BsFillCaretDownFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { InputDrop } from './InputDrop';
import { SearchServices } from '../../Services/SearchServices';
import { useNavigate } from 'react-router';

const searchServices = new SearchServices();

function Dropdown() {
  const [openCategories, setOpenCategories] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const queryString = Object.entries(selectedFilters)
    .map(([atributo, valor]) => `&${atributo}=${valor}`)
    .join("");
  const navigate = useNavigate();

  const sendFilterParams = async (queryString: string) => {
    console.log("Vamos filtrar!", queryString);
    try {
      console.log(`Filtrou ${queryString}`);
      const { data } = await searchServices.filter(queryString);
      console.log(data);

      // Após obter os resultados com sucesso, limpe as categorias abertas
      clearOpenCategories();

      navigate(`/search-results/${queryString}`, { state: { results: data } });
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

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

  const updateQuery = (filtro: string, valor: string) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filtro]: valor,
    }));
  };

  // Função para limpar as categorias abertas
  const clearOpenCategories = () => {
    setOpenCategories([]);
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
          {openCategories.includes(0) && (
            <InputDrop filtro="year" texto="Ano do Filme" updateQuery={updateQuery} />
          )}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Ator">
          <span onClick={() => toggleInput(1)}> Ator </span>
          {openCategories.includes(1) && (
            <InputDrop filtro="actor" texto="Atores" updateQuery={updateQuery} />
          )}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Genero">
          <span onClick={() => toggleInput(2)}> Gênero </span>
          {openCategories.includes(2) && (
            <InputDrop filtro="genre" texto="Gênero" updateQuery={updateQuery} />
          )}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Diretor">
          <span onClick={() => toggleInput(3)}> Diretor </span>
          {openCategories.includes(3) && (
            <InputDrop filtro="director" texto="Diretor" updateQuery={updateQuery} />
          )}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Sinopse">
          <span onClick={() => toggleInput(4)}> Sinopse </span>
          {openCategories.includes(4) && (
            <InputDrop filtro="plot" texto="Sinopse" updateQuery={updateQuery} />
          )}
        </li>
        <hr className='linhaDivisoria' />
        <li className="Dropdown-li Nota/Score">
          <span onClick={() => toggleInput(5)}> Nota/Score </span>
          {openCategories.includes(5) && (
            <InputDrop filtro="imdbRating" texto="Nota/Score" updateQuery={updateQuery} />
          )}
        </li>
        <button className='SendFilters' onClick={() => sendFilterParams(queryString)}>
          Filtrar!
        </button>
      </ul>
    </div>
  );
}

export default Dropdown;



