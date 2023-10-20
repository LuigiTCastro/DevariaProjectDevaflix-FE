import React, { useState } from "react";
import lupa from "../../assets/imagens/lupaPesquisas.svg";
import { SearchServices } from "../../Services/SearchServices";
import { useNavigate } from "react-router-dom"; // Importe useNavigate

const Search = () => {
  const [search, setSearch] = useState("");
  const searchService = new SearchServices();
  const navigate = useNavigate(); // Use useNavigate para navegação

  const aoDigitar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKey = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      try {
        const { data } = await searchService.title(search);
        navigate(`/search-results/${search}`, { state: { results: data } });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
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
    </div>
  );
};

export default Search;
