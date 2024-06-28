import { About } from "./components/About";
import { Header } from "./components/Header";
import { Primary } from "./components/Primary";
import { Section } from "./components/Section";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 font-poppins">
      <Section>
        <Header />
        <Primary />
      </Section>
      <About />
    </div>
  );
}

export default App;
