import { useRef } from "react";

export function UploadImg({
   className = '',
 
}){
    const referenciaInput = useRef<HTMLInputElement | null>(null);

    const abrirSeletorArquivos = () => {
      referenciaInput?.current?.click();
    };

   
    return (
      <div className={`uploadImagemContainer ${className}`} onClick={abrirSeletorArquivos}>
        <button>Abrir seletor de arquivos</button>
        <input 
            type="file" 
            className="oculto" 
            accept="image/*"
            ref={referenciaInput}>         
        </input>     
      </div>
    );
}
