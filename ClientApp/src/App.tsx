import "./App.css";
import CorsError from "./components/CorsError";
import CorsHandled from "./components/CorsHandled";

function App() {
  return (
    <>
      <CorsHandled />
      <CorsError />
    </>
  );
}

export default App;
