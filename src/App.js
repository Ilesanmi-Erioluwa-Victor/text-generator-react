import { useState } from "react";
import Data from "./Data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const HandleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="section-center">
      <h3>Tired of the same Lorem Text ?</h3>

      <form className="lorem-form" onSubmit={() => HandleSubmit}></form>
    </section>
  );
}

export default App;
