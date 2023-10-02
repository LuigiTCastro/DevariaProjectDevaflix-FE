import lupa from '../../assets/imagens/lupaPesquisas.svg'


const Search = () => {
  return (
    <div className="SearchContainer SearchFooter">
       <img className='imgLupa'src={lupa} alt='Lupa'/>
      <input type="text" className="SearchInput" placeholder="Pesquisar..." />
     
    </div>
  );
};

export default Search;
