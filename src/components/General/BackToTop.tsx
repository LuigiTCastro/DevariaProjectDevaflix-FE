import imgSetaParaCima from "../../assets/imagens/seta-cima.svg";
import { useEffect, useState } from 'react';

// export const BackToTop = () => {
//   const handleClick = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <div className="backToTop" onClick={handleClick}>
//       <img src={imgSetaParaCima} alt="Voltar ao Topo" />
//     </div>
//   );
// }

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const buttonStyle = {
    display: isVisible ? 'flex' : 'none'
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="backToTop" style={buttonStyle} onClick={handleClick}>
      <img src={imgSetaParaCima} alt="Voltar ao Topo" />
    </div>
  );
};
