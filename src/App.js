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

  return (
    <div className="App">
      <header>This is the Header</header>
      <main ref={ref}>
        <div className={`child-one ${isIntersecting ? 'slide-in' : ''}`}>Child One</div>
        <div className={`child-two ${isIntersecting ? 'slide-in' : ''}`}>Child Two</div>
      </main>
      <footer>This is the Footer</footer>
    </div>
  );
}

export default App;
