import React, { useState } from "react";
import lupa from "../../assets/imagens/lupaPesquisas.svg";
import { SearchServices } from "../../Services/SearchServices";
import { useNavigate } from "react-router-dom";

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const searchService = new SearchServices();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const aoDigitar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKey = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      realizarPesquisa();
    }
  };

  const realizarPesquisa = async () => {
    try {
      setLoading(true);
      const { data } = await searchService.title(search);
      navigate(`/search-results/${search}`, { state: { results: data } });
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="SearchContainer SearchFooter">
      <div className="SearchInputContainer">
        <input
          type="text"
          className="SearchInput"
          placeholder="Pesquisar..."
          value={search}
          onChange={aoDigitar}
          onKeyDown={onKey}
        />
        {!loading && (
          <img
            className="imgLupa"
            src={lupa}
            alt="Lupa"
            onClick={realizarPesquisa}
          />
        )}
      </div>
      {loading && <div className="spinner"></div>}
    </div>
  );
};

export default Search;
