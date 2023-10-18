import lupa from '../../assets/imagens/lupaPesquisas.svg';
import { useState } from "react";


export const InputDrop = ({
   filtro,
   texto,
   updateQuery
}: {
   filtro: string;
   texto: string;
   updateQuery: (filtro: string) => void; // Altere o tipo de retorno para string
}) => {
   const [filter, setFilter] = useState('');

   const aoDigitar = (e: any) => {
      setFilter(e.target.value);
   };
   
   const sendSearch = (filter: string) => {
      const newQueryString = `&${filtro}=${filter}`; 
      updateQuery(newQueryString); // Chame a função e retorne o novo valor
    };
  
    const onKey = (e: any) => {
      if (e.key === "Enter") {
        sendSearch(filter);
      }
    };
   
   return (
      <div className='ContainerInputDrop'>
         <img className='imgLupa' src={lupa} alt='Lupa' />
         <input 
            className='inputDrop' 
            placeholder={texto}   
            onChange={aoDigitar}      
            onKeyDown={onKey}
            value={filter} 
         />
      </div>
   );
};









// export const InputDrop = ({
//    filtro,
//    texto,
//    updateQuery
// }: {
//    filtro: string;
//    texto: string;
//    updateQuery: (filtro: string) => void;
// }) => {
//    const [filter, setFilter] = useState('');

//    const aoDigitar = (e: any) => {
//       setFilter(e.target.value);
//    };
   
//    const sendSearch = (filter: string) => {
//        updateQuery(`&${filtro}=${filter}`)
//       //  return `&${filtro}=${filter}`
//     };
  
//     const onKey = (e: any) => {
//       if (e.key === "Enter") {
//         sendSearch(filter);
//       }
//     };




//    return(
//    <div className='ContainerInputDrop'>
//     <img className='imgLupa'src={lupa} alt='Lupa'/>
//     <input 
//       className='inputDrop' 
//       placeholder={texto}   
//       onChange={aoDigitar}      
//       onKeyDown={onKey}
//       value={filter} 
//     />
//     </div>
//    )
// }