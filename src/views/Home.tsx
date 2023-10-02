import { Header } from "../components/General/Header";
import { TelaPrincipal } from "../components/General/TelaPrincipal";
import { Footer } from "../components/General/footer";




export const Home = () => {
  return (
      <div>
          <Header/>
          <TelaPrincipal/>
          <Footer/>
      {/*<h1>Home</h1>

      <div className="link">
    
        <button type="button" onClick={() => (window.location.href = "/login")}>
         Entrar!
        </button>
  </div>*/}
    </div>
  );
};
