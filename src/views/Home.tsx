import { Header } from "../components/General/Header";



export const Home = () => {
  return (
      <div>
          <Header/>
      <h1>Home</h1>

      <div className="link">
    
        <button type="button" onClick={() => (window.location.href = "/login")}>
         Entrar!
        </button>
      </div>
    </div>
  );
};
