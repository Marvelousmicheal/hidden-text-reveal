import { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    const onMouseMove = (e) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        e.clientX + "px"
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        e.clientY + "px"
      );
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.addEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <>
      <div className="main-page">
        <div className="layer dark-layer">
          <div
            className="text-container "
            onMouseEnter={() => {
              document.documentElement.style.setProperty(
                "--cursor-size",
                "400px"
              );
            }}
            onMouseLeave={() => {
              document.documentElement.style.setProperty(
                "--cursor-size",
                "40px"
              );
            }}
          >
            <div>I HAVE</div>
            <div>A BIG</div>
            <div>PASSION</div>
            <div>FOR </div>
            <div>WRITING</div>
            <div>CODES</div>
          </div>
        </div>
        <div className="layer layer-red">
          <div className="text-container text-dark">
            <div>I HAVE</div>
            <div>A BIG</div>
            <div>PASSION</div>
            <div>FOR </div>
            <div>MAKKING</div>
            <div>MONEY</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
