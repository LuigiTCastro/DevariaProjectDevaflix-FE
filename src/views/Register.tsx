
/* eslint-disable @typescript-eslint/no-unused-vars */
import logo from "../assets/imagens/logo.svg";
import iconUser from "../assets/imagens/imgUser.svg";
import iconEmail from "../assets/imagens/imgEmail.svg";
import iconChave from "../assets/imagens/imgChave.svg";
import { PublicInput } from "../components/General/PublicInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AvatarInput } from "../components/General/AvatarInput";
import { UpLoadImagem } from "../components/General/UpLoadImagem";
import {
  validarNome,
  validarEmail,
  validarSenha,
  validarConfirmacaoSenha,
} from "../utils/validators";



export const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [usuario, setUsuario] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleCadastro = () => {
    setError(""); // Limpar os erros anteriores

    // Realizar a validação dos campos
    if (!validarNome(usuario)) {
      setError("Nome deve ter pelo menos 3 caracteres.");
      return;
    }

    if (!validarEmail(login)) {
      setError("Endereço de e-mail inválido.");
      return;
    }

    if (!validarSenha(password)) {
      setError("Senha invalida!");
      return;
    }

    if (!validarConfirmacaoSenha(password, confirm)) {
      setError("As senhas não coincidem.");
      return;
    }

    //TODO
    // Implemente a lógica para enviar os dados para o servidor ou fazer o que for necessário aqui.
  };

  return (
    <div className="ContainerPublic register">
      <div className="ContainerInicial register $DesktopBreakpoint">
        
        <img src={logo} alt="Logo Devaflix" className="logo" />

        <form className="formInicial">
        
          <UpLoadImagem />

          {error && <p className="error">{error}</p>}
         
          <PublicInput
            icon={iconUser}
            name="Usuario"
            alt="Usuario"
            placeholder="Usuario"
            type="text"
            modelValue={usuario}
            setValue={setUsuario}
          />
          <PublicInput
            icon={iconEmail}
            alt="Login"
            name="Login"
            placeholder="Login"
            type="text"
            modelValue={login}
            setValue={setLogin}
          />

          <PublicInput
            icon={iconChave}
            alt="Senha"
            name="Senha"
            placeholder="Senha"
            type="password"
            modelValue={password}
            setValue={setPassword}
          />

          <PublicInput
            icon={iconChave}
            alt="Confirme a Senha"
            name="Confirme a Senha"
            placeholder="Confirmar Senha"
            type="password"
            modelValue={confirm}
            setValue={setConfirm}
          />

          <button
            type="button"
            className="$DesktopBreakpoint"
            onClick={handleCadastro}>          
            Cadastrar
          </button>

          <div className="link">
            <p> Já possui uma conta!</p>
            <Link to="/login"> Faça seu login agora!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
