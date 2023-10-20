
import imgAvatar from "../../assets/imagens/imgAvatar.svg";
import iconSair from "../../assets/imagens/imgsair.svg";
import Dropdown from "./Dropdown";
import Search from "./Search";


export const Navigation = () => {
  const id = localStorage.getItem("id") || "";

  const handleLoginClick = () => {
    window.location.href = id ? "/me" : "/login";
  };

  const handleLogoutClick = () => {
    // Aqui, vamos apenas limpar o localStorage e redirecionar para a página inicial
    localStorage.clear();
    //  redirecionar para a página inicial (por exemplo, "/home")
    window.location.href = "/home";
  };

  return (
    <div className="ContainerNavigation">
      <Search />
      <Dropdown />
      <div className="AvatarMini login">
        {id ? (
          <>
            <img
              className="imgAvatar"
              src={imgAvatar}
              onClick={() => (window.location.href = "/me")}
              alt="Avatar"
            />
            <div className="IconeSair">
              <img src={iconSair} onClick={handleLogoutClick} />
            </div>
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
    </div>
  );
};
