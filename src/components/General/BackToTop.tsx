import imgSetaParaCima from "../../assets/imagens/seta-cima.svg"

export const BackToTop = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
          });      
    };

    return (
        <div className="backToTop" onClick={handleClick}>
          <img src={imgSetaParaCima} alt="Voltar ao Topo" />
        </div>
      );
}
