import lupa from '../../assets/imagens/lupaPesquisas.svg';

export const InputDrop = (tipo:string) => {

   return(
   <div className='ContainerInputDrop'>
    <img className='imgLupa'src={lupa} alt='Lupa'/>
    <input className='inputDrop' placeholder={`Pesquisa ${tipo}.`} value={tipo} />
    </div>
   )
}
