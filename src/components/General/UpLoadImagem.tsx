import { useRef } from "react";
import imgAvatar from  '../../assets/imagens/imgAvatar.svg'

export function UpLoadImagem({
   className = '',
 
}){
    const referenciaInput = useRef<HTMLInputElement | null>(null);

    const abrirSeletorArquivos = () => {
      referenciaInput?.current?.click();
    };

   
    return (
      <>
          <div className={`uploadImagemContainer oculto ${className}`} onClick={abrirSeletorArquivos}>
            <button>Abrir seletor de arquivos</button>
            <input 
                type="file" 
                className="oculto" 
                accept="image/*"
                ref={referenciaInput}>         
            </input>     
          </div>
          <div className="container-upload-image" onClick={abrirSeletorArquivos}>
            <div className="avatar" >
              <img src={imgAvatar} />
            </div>

          </div>
      </>
    );
}
