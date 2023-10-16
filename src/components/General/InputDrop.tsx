import lupa from '../../assets/imagens/lupaPesquisas.svg';
import { useState } from "react";


export const InputDrop = ({
   filtro,
   texto
}: {
   filtro: string;
   texto: string;
}) => {
   const [filter, setFilter] = useState('');

   const aoDigitar = (e: any) => {
      e.preventDefault();
      console.log(e.target.value);
      setFilter(e.target.value);
   };
   
   const filterString = (filter: string) => {
      console.log(`&${filtro}=${filter}`)
      return `&${filtro}=${filter}`;
    };
  
    const onKey = (e: any) => {
      if (e.key === "Enter") {
        filterString(filter);
        console.log(filter)
      }
    };

   return(
   <div className='ContainerInputDrop'>
    <img className='imgLupa'src={lupa} alt='Lupa'/>
    <input 
      className='inputDrop' 
      placeholder={texto}   
      onChange={aoDigitar}      
      onKeyDown={onKey}
      value={filter} 
    />
    </div>
   )
}
