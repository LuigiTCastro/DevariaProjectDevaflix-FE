import { useState } from "react";
import lupa from "../../assets/imagens/lupaPesquisas.svg";
import { SearchServices } from "../../Services/SearchServices";
import SearchResult from "./searchResults"; // Componente para exibir os resultados da pesquisa

const searchService = new SearchServices();

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Estado para armazenar os resultados da pesquisa

  const aoDigitar = (e) => {
    setSearch(e.target.value);
  };

  const sendSearch = async (searchQuery) => {
    try {
      const { data } = await searchService.title(searchQuery);
      setSearchResults(data); // Armazena os resultados da pesquisa no estado
      onSearch(data); // Passa os dados de pesquisa para o componente pai
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const onKey = (e) => {
    if (e.key === "Enter") {
      sendSearch(search);
    }
  };

  return (
    <div className="SearchContainer SearchFooter">
      <img className="imgLupa" src={lupa} alt="Lupa" />
      <input
        type="text"
        className="SearchInput"
        placeholder="Pesquisar..."
        value={search}
        onChange={aoDigitar}
        onKeyDown={onKey}
      />
      {searchResults.length > 0 && ( // Renderiza o componente SearchResult se houver resultados de pesquisa
        <SearchResult results={searchResults} />
      )}
    </div>
  );
};

export default Search;

