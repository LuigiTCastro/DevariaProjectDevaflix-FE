import logo from "../assets/imagens/logo.svg";
import iconEmail from "../assets/imagens/imgEmail.svg";
import iconChave from "../assets/imagens/imgChave.svg";
import { PublicInput } from "../components/General/PublicInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { validarEmail, validarSenha } from "../utils/validators"
import { useSearchParams } from "react-router-dom";


export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");


  const doLogin = async () => {
    try {
      setError("");

      // Realize a validação dos campos usando as funções de validação
      if (!validarEmail(login)) {
        return setError("Endereço de e-mail ou senha inválido.");
      }

      if (!validarSenha(password)) {
        return setError("Endereço de e-mail ou senha inválido.");
      }

      setLoading(true);
      // TODO - banco de dados

      setLoading(false);
    } catch (e) {
      console.log("Erro ao efetuar login:", e);
      setLoading(false);
      // TODO

      return setError("Erro ao efetuar login, tente novamente");
    }
  };

  return (
    <div className="ContainerPublic">
      <img src={logo} alt="Logo Devaflix" className="logo" />
      <form>
        {error && <p className="error">{error}</p>}
        {success && (
          <p className="success">
            Cadastro efetuado com sucesso, faça seu login.
          </p>
        )}

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

        <button
          type="button"
          className="$DesktopBreakpoint"
          onClick={doLogin}
          disabled={loading}
        >
          {loading ? "...Carregando" : "Login"}
         
        </button>

        <div className="link">
          <p> Não possui uma conta? </p>
          <Link to="/register"> Faça seu cadastro agora!</Link>
        </div>
      </form>
    </div>
  );
};
