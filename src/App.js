import { useState } from "react";
import Data from "./Data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  return (
    <section className="section-center">
      <h3>Tired of the same Lorem Text ?</h3>
    </section>
  );
}

export default App;
