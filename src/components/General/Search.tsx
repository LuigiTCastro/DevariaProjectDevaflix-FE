import lupa from '../../assets/imagens/lupaPesquisas.svg';
import { useState } from 'react';
import { SearchServices } from '../../Services/SearchServices';

const searchService = new SearchServices();

const Search = ({ updateResults:any }) => {
    const [search, setSearch] = useState("");

    const aoDigitar = (e:any) => {
      e.preventDefault();
      console.log(e.target.value);
      setSearch(e.target.value);
    };
  
    const sendSearch = async (search:string) => {
      try {
        const response = await searchService.title(search);
        updateResults(response.data); // Atualize os resultados no componente pai (TelaPrincipal)
      } catch (error) {
        console.error("Erro na pesquisa", error);
      }
    };
  
    const onKey = (e:any) => {
      if (e.key === "Enter") {
        sendSearch(search);
      }
    };
  

  
  // const sendSearch = (search: string) => {
  //   return searchService.title(search);
  // };

  // const onKey = (e: any) => {
  //   if (e.key === "Enter") {
  //     sendSearch(search);
  //   }
  // };

  return (
  <div className="SearchContainer SearchFooter">
     <img className='imgLupa'src={lupa} alt='Lupa'/>
    <input type="text" 
        className="SearchInput" 
        placeholder="Pesquisar..." 
        value={search}
        onChange={aoDigitar}
        onKeyDown={onKey}
    />     
  </div>
  );
};

export default Search;
