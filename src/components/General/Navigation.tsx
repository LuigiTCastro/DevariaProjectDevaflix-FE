
import imgAvatar from "../../assets/imagens/imgAvatar.svg";
import iconHome from "../../assets/imagens/imgHome.svg";
import iconSair from "../../assets/imagens/imgsair.svg";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { SearchServices } from "../../Services/SearchServices";

const searchServices = new SearchServices();

export const Navigation = () => {
  const id = localStorage.getItem("id") || "";

  const handleHomeClick = () => {
    // Verifica se o usuário está na página "MyPage"
    const isOnMyPage = window.location.pathname === "/me";

    if (!isOnMyPage) {
      // Redireciona para a página inicial se não estiver na "MyPage"
      window.location.href = "/home";
    }
  };

  const handleLoginClick = () => {
    window.location.href = id ? "/me" : "/login";
  };

  const handleLogoutClick = () => {
    // Lógica para deslogar e redirecionar para a página inicial (por exemplo, "/home")
    // Aqui, vamos apenas limpar o localStorage e redirecionar para a página inicial
    localStorage.clear();
    window.location.href = "/home";
  };

  return (
    <div className="ContainerNavigation">
      <Search />
      {!id && (
        <div className="IconeHome">
          <img src={iconHome} alt="Icone Home" onClick={handleHomeClick} />
        </div>
      )}
      <div className="AvatarMini login">
        {id ? (
          <>
            <img
              className="imgAvatar"
              src={imgAvatar}
              onClick={() => (window.location.href = "/me")}
              alt="Avatar"
            />
           
          </>
        ) : (
          <button
            className="btnHeaderEntrar"
            type="button"
            onClick={handleLoginClick}
          >
            Entrar!
          </button>
        )}
      </div>
      <Dropdown />
      <div className="IconeSair">
              <img src={iconSair} onClick={handleLogoutClick} />
            </div>
    </div>
  );
};
