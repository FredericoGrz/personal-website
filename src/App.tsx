import { Header } from "./components/Header";
import { Primary } from "./components/Primary";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 font-poppins">
      <div className="h-screen">
        <Header />
        <Primary />
      </div>
    </div>
  );
}

export default App;
