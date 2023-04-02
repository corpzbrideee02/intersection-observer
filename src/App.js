import "./App.css";

import { useState, useRef, useEffect } from "react";

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <div className="App">
      <header>HOME PAGE</header>
      <main ref={ref}>
        <div className="child-one">Section 1</div>
        <div className="child-two">Section 2</div>
      </main>
      <footer>That's all. Thank you!</footer>
    </div>
  );
}

export default App;