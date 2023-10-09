import lupa from '../../assets/imagens/lupaPesquisas.svg';
import { useState } from 'react';
import { SearchServices } from '../../Services/SearchServices';

const searchService = new SearchServices();

const Search = () => {
  const [search, setSearch] = useState('');

  const aoDigitar = (e:any) =>{
    e.preventDefault();
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  
  const sendSearch = (search:string) => {
    const { data } = searchService.title(search)
    console.log("data.data   =>> ",data.data)
    return data.data;

  }
  
  const onKey = (e:any) => {
    if (e.key === 'Enter'){
      sendSearch(search)

    }
    console.log(search)
  }

  

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
