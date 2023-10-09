import lupa from '../../assets/imagens/lupaPesquisas.svg';

export const InputDrop = () => {
   return(
   <div className='ContainerInputDrop'>
    <img className='imgLupa'src={lupa} alt='Lupa'/>
    <input className='inputDrop' placeholder='Pesquisa...' />
    </div>
   )
}
