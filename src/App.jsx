import Post from "./Post";
import "./global.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Post author="Guilherme Wallace" content="esse post esta sendo criado" />
      <Post author="Bidio Willian" content="esse post esta sendo criado 2" />
    </div>
  );
}

export default App;
