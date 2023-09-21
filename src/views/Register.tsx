/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import logo from "../assets/imagens/logo.svg";
import iconUser from "../assets/imagens/imgUser.svg";
import iconEmail from "../assets/imagens/imgEmail.svg";
import iconChave from "../assets/imagens/imgChave.svg";
import { PublicInput } from "../components/General/PublicInput";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UpLoadImagem } from "../components/General/UpLoadImagem";
import {
  validarNome,
  validarEmail,
  validarSenha,
  validarConfirmacaoSenha,
} from "../utils/validators";
import { RegisterServices } from "../Services/RegisterServices";

const registerServices = new RegisterServices();

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleCadastro = async() => {
    try {
      setError(""); // Limpar os erros anteriores

      // Realizar a validação dos campos
      if (!validarNome(name.trim())) {
        setError("Nome deve ter pelo menos 3 caracteres.");
        return;
      }

      if (!validarEmail(email.trim())) {
        setError("Endereço de e-mail inválido.");
        return;
      }

      if (!validarSenha(password.trim())) {
        setError("Senha invalida!");
        return;
      }

      if (!validarConfirmacaoSenha(password.trim(), confirm.trim())) {
        setError("As senhas não coincidem.");
        return;
      }
      setLoading(true);

      const body = {
        name,
        email,
        password,
        avatar: image,
      };

      await registerServices.register(body);
      setLoading(false);
      return navigate("/?success=true");
    } catch (e: any) {
      console.log("Erro ao efetuar cadastro:", e);
      setLoading(false);
      if (e?.response?.data?.message) {
        return setError(e?.response?.data?.message);
      }
      return setError("Erro ao efetuar cadastro, tente novamente");
    }
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
            name="Name"
            alt="Name"
            placeholder="Nome"
            type="text"
            modelValue={name}
            setValue={setName}
          />
          <PublicInput
            icon={iconEmail}
            alt="Email"
            name="Email"
            placeholder="Email"
            type="text"
            modelValue={email}
            setValue={setEmail}
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
            onClick={handleCadastro}
            disabled={loading}
          >
            {loading ? "...Carregando" : "Cadastrar"}
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
